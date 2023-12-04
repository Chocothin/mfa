var express = require('express');
var speakeasy = require('speakeasy');
var bodyParser = require('body-parser');
var app = express();
var nodemailer = require('nodemailer');
var QRCode = require('qrcode')
var cors = require('cors');
const fs = require('fs');
const path = require('path')
const multer = require('multer');

require('dotenv').config()
app.use(cors());

app.use(bodyParser.json());
app.use(express.static('public'));


//multer 파일 저장 위치 설정
const upload = multer({
   storage: multer.diskStorage({
    destination(req,file, done) {
      let dir = req.query.destination;
      console.log(req.query.destination);
      done(null, `${dir}`);
    },
    filename(req,file, done){
      const ext = path.extname(file.originalname);
      console.log(ext);
      console.log(path.basename(file.originalname), Date.now() + ext);
      done(null, path.basename(file.originalname), Date.now() + ext);
    }
  }),
  limits: {fileSize: 10 * 1024 * 1024} //용량 제한 10메가
})

// OTP 비밀 키 생성
var secret = speakeasy.generateSecret({ length: 20 });

QRCode.toDataURL(secret.otpauth_url, function(err, data_url){
  console.log(data_url);
})


// 이메일 설정
let transporter = nodemailer.createTransport({
  service: 'gmail', // 사용할 이메일 서비스
  auth: {
    user: process.env.YOUR_EMAIL, // 보내는 사람 이메일
    pass: process.env.YOUR_APP_PASSWORD // 보내는 사람 이메일의 비밀번호 - 구글 이메일의 경우 일시 비밀번호 발급 후 기입
  }
});

// OTP를 이메일로 보내는 함수
const sendOTP = (email, otp) => {
  let mailOptions = {
    from: process.env.YOUR_EMAIL, // 보내는 사람 이메일
    to: email, // 받는 사람 이메일
    subject: 'Your OTP',
    text: `Your OTP is ${otp}` // 메일 본문에 OTP 포함
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function log(target, key, descriptor) {
  console.log(`Logging ${key} function`);
  return descriptor;
}

// OTP 생성 엔드포인트
app.post('/generate-otp', function (req, res) {
  var token = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
    window: 2
  });
  sendOTP(req.body.email, token); // 생성된 OTP를 이메일로 보내기
  res.send({ otp: token });
});

app.get('/qrcode', function(req, res) {
  
  QRCode.toDataURL(secret.otpauth_url, function(err, data_url) {
    console.log(data_url);
    res.json({ url: data_url});
  })
})

// OTP 검증 엔드포인트
app.post('/verify-otp', function (req, res) {
  var token = req.body.otp;
  console.log(req.body.otp)
  var valid = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: 'base32',
    token: token
  });
  res.send({ valid: valid });
});

app.get('/file/:dir', function (req,res) {
  const dir = req.query.dir;
  console.log(dir)
  if(['firstSafe', 'secondSafe','thirdSafe'].includes(dir)) {
    fs.readdir(path.join('public', dir),(err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        const urls = files.map(file => `/${dir}/${file}`)
        res.json(urls);
      }
    });
  } else {
    res.status(400).send('Invalid directory');
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File uploaded successfully.');
  console.log(req.file, req.body);
  res.status(200).send('File uploaded successfully');
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 서버 시작
app.listen(3001, function () {
  console.log('OTP Server is running on port 3001!');
});

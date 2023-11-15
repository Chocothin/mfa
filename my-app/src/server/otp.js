var express = require('express');
var speakeasy = require('speakeasy');
var bodyParser = require('body-parser');
var app = express();
var nodemailer = require('nodemailer');
var cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

// OTP 비밀 키 생성
var secret = speakeasy.generateSecret({ length: 20 });

// 이메일 설정
let transporter = nodemailer.createTransport({
  service: 'gmail', // 사용할 이메일 서비스
  auth: {
    user: 'wotj220@gmail.com', // 보내는 사람 이메일
    pass: 'vbfm cuwk uddk fbna' // 보내는 사람 이메일의 비밀번호
  }
});

// OTP를 이메일로 보내는 함수
const sendOTP = (email, otp) => {
  let mailOptions = {
    from: 'wotj220@gmail.com',
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

// 서버 시작
app.listen(3001, function () {
  console.log('OTP Server is running on port 3001!');
});

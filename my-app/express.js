import express from 'express';
const app = express();
const port = 3000;

app.get('/', (reg, res)=> {
    res.send('hello Express!!');
});

app.listen(port, () => {
    console.log('example port 3000')
});
import express from "express";
import {Fire} from "./firebase.js";

const app = express();
const fire = new Fire();

//express 라이브러리 설정
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

//express 서버 실행
app.listen(3000, async () => {
    console.log('Server Start');
});

//도서 입력
app.post('/insertBook', async (req, res) => {});

//도서 조회
app.get('/getBook', async (req, res) => {});

//도서 수정
app.post('/updateBook', async (req, res) => {});

//도서 삭제
app.delete('/deleteBook', async (req, res) => {});

//회원 입력
app.post('/insertAccount', async (req, res) => {
    console.log('Insert Account');
    var result = await fire.insertAccount(req.body);
    res.send(result);
});

//회원 조회
app.get('/getAccount', async (req, res) => {
    console.log('Get Account');
    var result = await fire.getAccount(req.query.keyword);
    res.send(result);
});

//회원 수정
app.post('/updateAccount', async (req, res) => {});

//회원 삭제
app.delete('/deleteAccount', async (req, res) => {});

//대출 정보 조회
app.get('/getLentBook', async (req, res) => {});
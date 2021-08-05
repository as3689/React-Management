const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const upload = multer({dest:'./upload'})

app.get('/api/customers', (req,res) => {
  RTCPeerConnection.query(
    "SELECT * FROM CUSTOMER", 
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});
//   )
//     res.send([
//         {
//         'id': 1,
//         'image': 'http://placeimg.com/64/64/1',
//         'name':'홍길동',
//         'birthday':'961222',
//         'gender':'남자',
//         'job': '대학생'
//         },
//         {
//           'id': 2,
//           'image': 'http://placeimg.com/64/64/2',
//           'name':'김개똥',
//           'birthday':'880512',
//           'gender':'남자',
//           'job': '직장인'
//           },
//           {
//             'id': 3,
//             'image': 'http://placeimg.com/64/64/3',
//             'name':'이슬이',
//             'birthday':'941125',
//             'gender':'여자',
//             'job': '대학생'
//             },
//       ]);
// })
app.use('/image',express.static('./upload'));
app.post('/api/customers', upload.single('image'),(req, res)=> {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields)=> {
    res.send(rows);
  });
});
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

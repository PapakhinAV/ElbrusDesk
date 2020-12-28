// import express from 'express';
// import NewPost from '../models/postList';

// const router = express.Router();

// router
//   .route('/')

//   .post(async (req, res) => {
//     console.log('!)@&*#&(*#&*(#(*');
//     const { title, text } = req.body;
//     console.log('Заголовок: ', title, 'Текст: ', text );
//     try {
//       const newuserpost = await NewPost.create({
//         title,
//         text,
//       });
//       console.log(newuserpost);
//       return res.status(200).end();
//     } catch (err) {
//       console.error(err, '>>>>>>>>>>>>>>>>>>>>>>>>>');
//       return res.status(401).end();
//     }
//     // return res.end();
//   }
//   );

// export default router

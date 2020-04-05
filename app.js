// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';
import { userController} from './controller';
import mongoose from "mongoose";
// Init an Express App. 
const app = express();
// Use your dependencies here
// use all controllers(APIs) here
// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* 
app.get('/', (req, res) => {
   res.status(200).json({
      status: 'Server Run successfully'
   });
}); */

app.use('/', userController);
// Start Server here
app.listen(8080, () => {
   console.log('Server is running on port 8080!');
   mongoose.connect("mongodb://localhost/test").then(() => {
    console.log(`Conneted to mongoDB at port 27017`);
  });
});
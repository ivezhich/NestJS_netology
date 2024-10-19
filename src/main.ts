//import express from 'express';
import express from 'express';
import booksRouter from './books/books.route';
import userRouter from './users/users.route';
import error404 from './middleware/err-404';
import logger from './middleware/logger';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.use(logger);
app.use('/api/books', booksRouter);
app.use('/api/user', userRouter);
app.use(error404);

const PORT = process.env.PORT || 3000;
start();

async function start() {
	try {
		await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/book`);
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		})
	} catch (e) {
		console.log(e);
	}
}

import { injectable } from 'inversify';
import bookModel from './books.model';
//import { v4 as uuid } from 'uuid';
import "reflect-metadata";
import { BookDto, CreateBookDto, UpdateBookDto } from './dto/books.dto';


@injectable()
class BooksRepository {
	async getAll(): Promise<BookDto[]> {
		return await bookModel.find().select('-__v');
	}

	async getOne(id: BookDto['id']): Promise<BookDto> {
		return await bookModel.findById(id).select('-__v');
	}

	async update(id: BookDto['id'], content: UpdateBookDto): Promise<BookDto> {
		return await bookModel.findByIdAndUpdate(id, content, { returnDocument: 'after' }).select('-__v');
	}

	async delete(id: BookDto['id']): Promise<boolean> {
		const result = await bookModel.findByIdAndDelete(id)
		if (result === null) return false; else return true;
	}

	async create(content: CreateBookDto): Promise<BookDto> {
		const newBook = new bookModel(content);
		await newBook.save();
		return newBook.toObject({ versionKey: false });
	}
};

export { BooksRepository };

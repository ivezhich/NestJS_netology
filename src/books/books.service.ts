import { Injectable } from '@nestjs/common';
import { BookDto, CreateBookDto, UpdateBookDto } from './dto/books.dto';

@Injectable()
export class BooksService {
	private readonly books: BookDto[] = [];

	getBooks(): BookDto[] {
		return this.books;
	}

	createBook(book: CreateBookDto): void {
		this.books.push(book);
	}

	deleteBook(id: string): void {
		const deleteIndex = this.books.findIndex((element) => element.id === id);
		if (deleteIndex < 0) throw new Error('Элемент не найден');
		this.books.splice(deleteIndex);
	}

	getBook(id: string): BookDto {
		const book = this.books.find((element) => element.id === id);
		if (!book) throw new Error('Элемент не найден');
		return book;
	}

	updateBook(id: string, book: UpdateBookDto): void {
		const updateIndex = this.books.findIndex((element) => element.id === id);
		if (updateIndex < 0) throw new Error('Элемент не найден');
		this.books.splice(updateIndex, 1, { id, ...book });
	}
}

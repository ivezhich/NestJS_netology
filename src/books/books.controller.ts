import { Get, Post, Delete, Controller, Body, Param, Put } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './dto/books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
	constructor(private readonly booksService: BooksService) {}

	@Get()
	async getBooks() {
		return await this.booksService.getBooks();
	}

	@Get(':id')
	async getBook(@Param('id') id: string) {
		return await this.booksService.getBook(id);
	}

	@Post()
	async createBook(@Body() book: CreateBookDto) {
		this.booksService.createBook(book);
	}

	@Delete(':id')
	async deleteBook(@Param('id') id: string) {
		this.booksService.deleteBook(id);
	}

	@Put(':id')
	updateBook(@Param('id') id: string, @Body() book: UpdateBookDto) {
		this.booksService.updateBook(id, book);
	}
}

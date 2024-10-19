
interface BookDto {
	id: string;
	title: string;
	description: string;
	authors: string;
	favorite: string;
	fileCover: string;
	fileName: string;
	fileBook: string;
}

interface CreateBookDto {
	title: BookDto['title'];
	description: BookDto['description'];
	authors: BookDto['authors'];
	favorite: BookDto['favorite'];
	fileCover: BookDto['fileCover'];
	fileName: BookDto['fileName'];
	fileBook: BookDto['fileBook'];
}

interface UpdateBookDto {
	title: BookDto['title'];
	description: BookDto['description'];
	authors: BookDto['authors'];
	favorite: BookDto['favorite'];
	fileCover: BookDto['fileCover'];
}

export { CreateBookDto, BookDto, UpdateBookDto }
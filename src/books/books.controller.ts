import { Controller, Get, Post, Body, HttpException, BadRequestException } from '@nestjs/common';
import * as cuid from 'cuid';
import { BookCreate } from './models';
@Controller('books')
export class BooksController {
    books: Book[] = [
        { id: '1', title: 'Walden', author: 'Thoreau' },
        { id: '2', title: 'Nature', author: 'Emerson' },
        { id: '3', title: 'Swampthing', author: 'Moore' },
    ];
    @Get()
    async getAllBooks() {
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    books: this.books,
                });
            }, 3000);
        });

    }

    @Post()
    async addBook(@Body() book: BookCreate) {
        return new Promise((res, rej) => {

            setTimeout(() => {
                if (book.author === 'King') {
                    rej(new BadRequestException('We don\'t want more King books. Thanks'));
                }

                const bookToAdd: Book = { ...book, id: cuid() };
                this.books.push(bookToAdd);
                res(bookToAdd);
            }, 4000);
        });
    }
}

interface Book {
    id: string;
    title: string;
    author: string;
}

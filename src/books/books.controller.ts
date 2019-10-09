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
    addBook(@Body() book: BookCreate) {
        if (book.author === 'King') {
            throw new BadRequestException('We don\'t want more King books. Thanks');
        }
        const bookToAdd: Book = { ...book, id: cuid() };
        this.books.push(bookToAdd);
        return bookToAdd;
    }
}

interface Book {
    id: string;
    title: string;
    author: string;
}


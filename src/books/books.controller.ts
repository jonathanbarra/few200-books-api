import { Controller, Get } from '@nestjs/common';

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
}

interface Book {
    id: string;
    title: string;
    author: string;
}

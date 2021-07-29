import Controller from './Controller';
import BooksModel from '../models/BooksModel'
class BooksController extends Controller {
  async actionBooksListPage(ctx) {
    const booksModel = new BooksModel()
    const data = await booksModel.getBooksList()
    ctx.body = await ctx.render('books/pages/list', {data: data.data})
  }
}

module.exports =BooksController
import Controller from './Controller';
import BooksModel from '../models/BooksModel'
class ApiController extends Controller {
  async actionBooksList(ctx) {
    const booksModel = new BooksModel()
    ctx.body = await booksModel.getBooksList()
  }
}

module.exports =ApiController
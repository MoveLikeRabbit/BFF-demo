import safeRequest from '../utils/safeRequest'
class BooksModel {
  getBooksList() {
    return safeRequest.fetch('xxx')
  }
  findBook(id) {

  }
}
export default BooksModel
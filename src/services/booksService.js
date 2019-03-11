class BooksService {
  getList() {
    return fetch('http://localhost:3005/books')
      .then((res) => res.json())
  }
}

export default new BooksService();
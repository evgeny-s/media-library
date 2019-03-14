class BooksService {
  getList() {
    return fetch('http://localhost:3005/books')
      .then((res) => res.json())
  }

  add(data) {
    return fetch('http://localhost:3005/books', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
  }
}

export default new BooksService();
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

  sum(a, b, c = null) {
    return a + b;
  }

  remove(id) {
    return fetch(`http://localhost:3005/books/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
  }

  update(data) {
    return fetch(`http://localhost:3005/books/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
  }
}

export default new BooksService();
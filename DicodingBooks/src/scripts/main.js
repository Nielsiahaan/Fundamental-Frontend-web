import { Collapse } from "bootstrap";

function main() {
  const baseUrl = 'https://books-api.dicoding.dev';

  const getBook = async () => {
    // const xhr = new XMLHttpRequest();

    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);

    //   if (responseJson.error) {
    //     showResponseMessage(responseJson.message);
    //   } else {
    //     renderAllBooks(responseJson.books);
    //   }
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // };

    // xhr.open('GET', `${baseUrl}/list`);
    // xhr.send();

    // Refacto code using FETCH API
    // fetch(`${baseUrl}/list`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.error) {
    //       showResponseMessage(responseJson.message);
    //     } else {
    //       renderAllBooks(responseJson.books);
    //     }
    //   })
    //   .catch(error => {
    //     showResponseMessage(error);
    //   });

    // styling asyn wait
    try {
      const response = await fetch(`${baseUrl}/list`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.books);
      }
    } catch (error) {
      showResponseMessage(error)
    }
  };

  // POST request
  const insertBook = async (book) => {
    // const xhr = new XMLHttpRequest();

    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // };

    // xhr.open('POST', `${baseUrl}/add`);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');

    // xhr.send(JSON.stringify(book));

    // Refactor using async wait API
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345'
        },
        body: JSON.stringify(book)
      };

      const response = await fetch(`{baseUrl}/add`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getBook();
    } catch (error) {
      showResponseMessage(error.message);
    }
  };

  const updateBook = async (book) => {
    // const xhr = new XMLHttpRequest();

    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // };

    // xhr.open('PUT', `${baseUrl}/edit/${book.id}`);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');

    // xhr.send(JSON.stringify(book));

    // Refactor using async wait API
    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345'
        },
        body: JSON.stringify(book)
      };

      const response = await fetch(`${baseUrl}/edit/${book.id}`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getBook();
    } catch (e) {
      showResponseMessage(e.message);
    }
  };

  const removeBook = async (bookId) => {
    // const xhr = new XMLHttpRequest();

    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // };

    // xhr.open('DELETE', `${baseUrl}/delete/${bookId}`);
    // xhr.setRequestHeader('X-Auth-Token', '12345');

    // xhr.send();

    // Refactor using async wait API
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'X-Auth-Token': '12345'
        }
      };
      const response = await fetch(`${baseUrl}/delete/${bookId}`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getBook();
    } catch (e) { showResponseMessage(e.message) }
  };

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector('#listBook');
    listBookElement.innerHTML = '';

    books.forEach(book => {
      listBookElement.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
      <div class="card">
        <div class="card-body">
          <h5>(${book.id}) ${book.title}</h5>
          <p>${book.author}</p>
          <button
            type="button"
            class="btn btn-danger btn-delete"
            data-id="${book.id}">
            Hapus
          </button>
        </div>
      </div>
    </div>
      `;
    });

    const buttons = document.querySelectorAll('.button-delete');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const bookId = event.target.dataset.id;
        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const inputBookId = document.querySelector('#inputBookId');
    const inputBookTitle = document.querySelector('#inputBookTitle');
    const inputBookAuthor = document.querySelector('#inputBookAuthor');
    const buttonSave = document.querySelector('#buttonSave');
    const buttonUpdate = document.querySelector('#buttonUpdate');

    buttonSave.addEventListener('click', function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value
      };

      insertBook(book);
    });

    buttonUpdate.addEventListener('click', function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value
      };

      updateBook(book);
    });

    getBook();
  });
}

export default main;

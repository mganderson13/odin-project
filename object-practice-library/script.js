const myLibrary= [];
const library = document.getElementById("library");
const showModal = document.getElementById("show-modal");
const dialogForm = document.getElementById("dialog-form");
const addBook = document.getElementById("addBook");
const exitButton = document.getElementById("exit");


function Book(title, author, pages, read) {
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read = read;

    this.toggleRead = function() {
        this.read = !this.read
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

addBookToLibrary("Book1", "Author1", 301, true);
addBookToLibrary("Book2", "Author2", 253, false);
addBookToLibrary("Book3", "Author3", 435, true);

function libraryDisplay(array) {
    library.innerHTML = "";

    array.map((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        bookCard.innerHTML= `
            <p>Title:</p>
            <p>${book.title}</p>
            <p>Author:</p>
            <p>${book.author}</p>
            <p>Pages:</p>
            <p>${book.pages}</p>
            <p>Read:</p>
            <p>${book.read ? "Yes" : "No"}</p>
            <button class="read-button" data-index="${index}">${book.read ? "Mark as unread" : "Mark as read"}</button>
            <button class="delete-button" data-index="${index}">Delete Book</button>
        `;

        library.appendChild(bookCard);
    })
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
      button.addEventListener("click", function() {
          const index = this.getAttribute("data-index");
          myLibrary.splice(index, 1); // Remove book from array
          libraryDisplay(myLibrary);
    })
  })

  const readButton = document.querySelectorAll(".read-button");
  readButton.forEach(button => {
    button.addEventListener("click", function() {
        const index = this.getAttribute("data-index");
        myLibrary[index].toggleRead();
        libraryDisplay(myLibrary);
    })
  })
}

libraryDisplay(myLibrary);

showModal.addEventListener("click", () => {
    dialogForm.showModal();
  });

  exitButton.addEventListener("click", function(event) {
    event.preventDefault();
    dialogForm.close();
  });

  addBook.addEventListener("click", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value; 
    const author = document.getElementById("author").value; 
    const pages = document.getElementById("pages").value; 
    const read = document.getElementById("read").checked; 

    addBookToLibrary(title, author, pages, read);
    document.getElementById("title").value = ''; 
    document.getElementById("author").value = '';
    document.getElementById("pages").value = ''; 
    dialogForm.close();
    libraryDisplay(myLibrary);
  })


class InputCatatan extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <!-- Style untuk modal -->
    <style>
    /* Style untuk modal */
    .modal-container {
      display: grid;
      place-items: center;
      margin: 20px 0;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
      background-color: #f9f9f9;
      margin: auto;
      padding: 20px;
      border-radius: 10px;
      width: 80%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      position: relative; /* Menetapkan posisi relatif */
    }

    form {
      display: grid;
      gap: 10px;
    }

    label {
      font-weight: bold;
    }

    input[type="text"],
    textarea {
      width: calc(100% - 20px);
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      resize: none;
      font-family: inherit;
      font-size: inherit;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 20px;
      color: #888;
    }

    .error-message{
      color: red;
    }
  </style>

    <!-- HTML untuk modal -->
    <div class="modal-container">
      <button id="openModal">Tambah Catatan</button>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <button class="close-button">&times;</button>
          <form id="inputForm">
            <label for="noteTitle">Judul Catatan:</label>
            <input type="text" id="noteTitle">
            <div id="noteTitleError" class="error-message"></div> <!-- Tambahkan div untuk pesan kesalahan -->
            <label for="noteBody">Isi Catatan:</label>
            <textarea id="noteBody" rows="4"></textarea>
            <div id="noteBodyError" class="error-message"></div> <!-- Tambahkan div untuk pesan kesalahan -->
            <button type="submit">Tambah Catatan</button>
          </form>
        </div>
      </div>
    </div>
    `;
    shadow.appendChild(template.content.cloneNode(true));

    // Ambil elemen notesList untuk menampilkan catatan
    this.notesList = document.getElementById('notes-list');
    // Ambil elemen input judul dan isi catatan
    const noteTitleInput = this.shadowRoot.getElementById("noteTitle");
    const noteBodyInput = this.shadowRoot.getElementById("noteBody");

    // Tambahkan event listener untuk memvalidasi judul catatan
    noteTitleInput.addEventListener("input", () => {
      this.validateNoteTitle();
    });

    // Tambahkan event listener untuk memvalidasi isi catatan
    noteBodyInput.addEventListener("input", () => {
      this.validateNoteBody();
    });

    // Event listener untuk membuka modal saat tombol diklik
    this.shadowRoot.getElementById("openModal")
      .addEventListener("click", () => {
        this.shadowRoot.getElementById("myModal").style.display = "block";
      });

    // Event listener untuk menutup modal saat form disubmit
    this.shadowRoot.getElementById("inputForm")
      .addEventListener("submit", this.onSubmit.bind(this));

    // Event listener untuk menutup modal saat tombol close diklik
    this.shadowRoot.querySelector(".close-button")
      .addEventListener("click", () => {
        this.shadowRoot.getElementById("myModal").style.display = "none";
      });
  }

  // Method untuk memvalidasi judul catatan
  validateNoteTitle() {
    const noteTitleInput = this.shadowRoot.getElementById("noteTitle");
    const noteTitleError = this.shadowRoot.getElementById("noteTitleError");
    if (noteTitleInput.value.trim() === "") {
      noteTitleError.textContent = "Judul catatan tidak boleh kosong";
      noteTitleInput.setCustomValidity("Judul catatan tidak boleh kosong");
    } else {
      noteTitleError.textContent = "";
      noteTitleInput.setCustomValidity("");
    }
  }

  // Method untuk memvalidasi isi catatan
  validateNoteBody() {
    const noteBodyInput = this.shadowRoot.getElementById("noteBody");
    const noteBodyError = this.shadowRoot.getElementById("noteBodyError");
    if (noteBodyInput.value.trim() === "") {
      noteBodyError.textContent = "Isi catatan tidak boleh kosong";
      noteBodyInput.setCustomValidity("Isi catatan tidak boleh kosong");
    } else {
      noteBodyError.textContent = "";
      noteBodyInput.setCustomValidity("");
    }
  }

  // Method untuk menangani submit form
  onSubmit(event) {
    event.preventDefault();

    // Validasi judul dan isi catatan sebelum submit
    this.validateNoteTitle();
    this.validateNoteBody();

    const noteTitleInput = this.shadowRoot.getElementById("noteTitle");
    const noteBodyInput = this.shadowRoot.getElementById("noteBody");

    // Jika formulir valid, simpan catatan ke local storage dan reset formulir
    if (noteTitleInput.checkValidity() && noteBodyInput.checkValidity()) {
      const noteTitle = noteTitleInput.value;
      const noteBody = noteBodyInput.value;

      const newNote = { id: Date.now().toString(), title: noteTitle, body: noteBody };

      this.saveNoteToLocalStorage(noteTitle, noteBody);

      const addNoteEvent = new CustomEvent("addNote", {
        detail: newNote,
      });
      document.dispatchEvent(addNoteEvent);

      this.shadowRoot.getElementById("myModal").style.display = "none";
      this.shadowRoot.getElementById("inputForm").reset();
    }
  }

  // Method untuk menyimpan catatan ke local storage
  saveNoteToLocalStorage(title, body) {
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = { id: Date.now().toString(), title, body };
    existingNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(existingNotes));
  }
}

customElements.define("input-catatan", InputCatatan);
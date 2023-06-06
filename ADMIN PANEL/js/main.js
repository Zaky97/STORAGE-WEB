// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyBaEE0Gx3iMoLWDAUTSLCoLLWiIJUljWvk",
  authDomain: "zaky-50e47.firebaseapp.com",
  databaseURL: "https://zaky-50e47-default-rtdb.firebaseio.com",
  projectId: "zaky-50e47",
  storageBucket: "zaky-50e47.appspot.com",
  messagingSenderId: "1038515986869",
  appId: "1:1038515986869:web:7fa6249a5ff22acb96b9fc",
  measurementId: "G-JD159TTZNG",
};

firebase.initializeApp(firebaseConfig);

// Create a storage reference
const storageRef = firebase.storage().ref();

// Get file list from Firebase Firestore
function getFileList() {
  const fileListElement = document.getElementById("file-list");
  fileListElement.innerHTML = "";

  firebase
    .firestore()
    .collection("files")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const fileData = doc.data();
        const fileId = doc.id;
        const fileName = fileData.fileName;
        const category = fileData.category;

        // Create download button
        const downloadButton = document.createElement("button");
        downloadButton.innerText = "Download";
        downloadButton.className = "btn btn-success";
        downloadButton.addEventListener("click", () => {
          storageRef
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              window.open(url, "_blank");
            })
            .catch((error) => {
              console.log(error);
            });
        });

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "btn btn-danger";
        deleteButton.addEventListener("click", () => {
          // Delete file from storage
          storageRef
            .child(fileName)
            .delete()
            .then(() => {
              // Delete file data from Firestore
              firebase.firestore().collection("files").doc(fileId).delete();
              getFileList();
            })
            .catch((error) => {
              console.log(error);
            });
        });

        // Create table row
        const row = fileListElement.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();

        cell1.textContent = fileName;
        cell2.textContent = category;
        cell3.appendChild(downloadButton);
        cell4.appendChild(deleteButton);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Search file by name and category
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const fileList = document.querySelectorAll("#file-list tr");

  fileList.forEach((row) => {
    const fileName = row.cells[0].textContent.toLowerCase();
    const category = row.cells[1].textContent.toLowerCase();

    if (fileName.includes(searchValue) || category.includes(searchValue)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

// Handle file upload
const uploadForm = document.getElementById("upload-form");
const fileInput = document.getElementById("file-input");
const categoryInput = document.getElementById("category-input");
const fileInputLabel = document.querySelector(".custom-file-label");

fileInput.addEventListener("change", () => {
  fileInputLabel.textContent = fileInput.files[0].name;
});

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const file = fileInput.files[0];
  const fileName = file.name;
  const category = categoryInput.value;
  const fileRef = storageRef.child(fileName);

  fileRef
    .put(file)
    .then(() => {
      // Save the file metadata including the category to a database
      return firebase.firestore().collection("files").add({
        fileName,
        category,
      });
    })
    .then(() => {
      getFileList();
      fileInput.value = "";
      fileInputLabel.textContent = "Choose file";
      categoryInput.value = "";
    })
    .catch((error) => {
      console.log(error);
    });
});

// Call getFileList() on page load
getFileList();

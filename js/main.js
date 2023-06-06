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

        // Create table row
        const row = fileListElement.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();

        cell1.textContent = fileName;
        cell2.textContent = category;
        cell3.appendChild(downloadButton);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Search file by name
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

// Call getFileList() on page load
getFileList();

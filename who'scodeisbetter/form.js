

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIMfB9oHV4KsM957mFLhSQ2ivNeQLvopQ",
    authDomain: "first-form-b839e.firebaseapp.com",
    databaseURL: "https://first-form-b839e-default-rtdb.firebaseio.com",
    projectId: "first-form-b839e",
    storageBucket: "first-form-b839e.firebasestorage.app",
    messagingSenderId: "965728968295",
    appId: "1:965728968295:web:5480f38130d61067a73ec2",
    measurementId: "G-872VTR64DE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var database = firebase.database()

document.getElementById("submit").addEventListener("click", function () {
    if (document.getElementById("nameInput").value == "" ||
        document.getElementById("emailInput").value == "" ||
        document.getElementById("awnser").value == ""
    ) {

        document.getElementById("status").innerText = "Please fill in all the things before submit"
        setTimeout(function () {
            document.getElementById("status").innerText = ""
        }, 3000);
    } else {
        var data = {
            name: document.getElementById("nameInput").value,
            email: document.getElementById("emailInput").value,
            awnser: document.getElementById("awnser").value
        }
        database.ref("result").push(data).then(function () {
            document.getElementById("status").innerText = "submitted";
            document.getElementById("nameInput").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("awnser").value = "";
            setTimeout(function () {
                document.getElementById("status").innerText = ""
            }, 3000)
        }).catch(function (error) {
            document.getElementById("status").innrtText = "Submit failed"
            setTimeout(function () {
                document.getElementById("status").innerText = ""
            }, 3000)
        })
    }

})

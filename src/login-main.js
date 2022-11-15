var objPeople = [
  {
    email: "sam.1988@gmail.com",
    password: "axds4w",
  },
  {
    email: "ali.1999@gmail.com",
    password: "7mi4z1",
  },
  {
    email: "ahmed.1995@gmail.com",
    password: "heiqg8",
  },
];

function getInfo() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < objPeople.length; i++) {
    if (email == objPeople[i].email && password == objPeople[i].password) {
      window.location.href = "./shop.html";
    }
  }
}

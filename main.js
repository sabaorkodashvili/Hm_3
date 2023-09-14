const mainContainer = document.createElement("div");
mainContainer.style.marginLeft = "52px";
mainContainer.style.marginTop = "28px";
const userNum = document.createElement("p");
userNum.textContent = `ALL (10)`;
mainContainer.appendChild(userNum);
///
function arrows(parrentDiv, left) {
  const arrowDiv = document.createElement("div");
  arrowDiv.style.display = "flex";
  arrowDiv.style.flexDirection = "column";
  arrowDiv.style.gap = "4px";
  arrowDiv.style.marginLeft = left;
  ///vector1
  const vector1 = document.createElement("img");
  vector1.src = "./img/vector.png";
  arrowDiv.appendChild(vector1);
  ///vector2
  const vector2 = document.createElement("img");
  vector2.src = "./img/vector (1).png";
  arrowDiv.appendChild(vector2);
  const div = parrentDiv;
  div.appendChild(arrowDiv);
}
//
function box(parrentDiv) {
  const box = document.createElement("div");
  box.style.width = "20px";
  box.style.height = "20px";
  box.style.border = "1px solid #6C757D";
  box.style.borderRadius = "2px";
  box.style.marginRight = "40px";
  ///
  const div = parrentDiv;
  div.appendChild(box);
}
const sort = document.createElement("div");
sort.style.borderBottom = "1px solid black";
sort.style.width = "1430px";
sort.style.display = "flex";
sort.style.alignItems = "center";
sort.style.fontSize = "10px";
////
box(sort);
//img
const imgH1 = document.createElement("h1");
imgH1.textContent = "Image";
sort.appendChild(imgH1);
//title
const titleH1 = document.createElement("h1");
titleH1.textContent = "Name";
titleH1.style.marginLeft = "100px";
sort.appendChild(titleH1);
//username
const userNme = document.createElement("h1");
userNme.textContent = "Username";
userNme.style.marginLeft = "200px";
sort.appendChild(userNme);
arrows(sort, "160px");
//dateh1
const dateH1 = document.createElement("h1");
dateH1.textContent = "Email";
dateH1.style.marginLeft = "25px";
sort.appendChild(dateH1);
///
const title2H1 = document.createElement("h1");
title2H1.textContent = "Phone Number";
title2H1.style.marginLeft = "240px";
sort.appendChild(title2H1);
arrows(sort, "140px");
//zipcode
const zipcode = document.createElement("h1");
zipcode.textContent = "Zip-Code";
zipcode.style.marginLeft = "30px";
sort.appendChild(zipcode);
mainContainer.appendChild(sort);
////
function getUser(parentDiv, Name, Username, email, phoneNumber, zipCode) {
  const user = document.createElement("div");
  user.style.display = "flex";
  user.style.justifyContent = "space-between";
  user.style.alignItems = "center";
  user.style.borderBottom = "1px solid black";
  user.style.width = "1430px";
  user.style.gap = "100px";
  box(user);
  const img = document.createElement("img");
  img.style.marginLeft = "70px";
  img.style.display = "flex";
  img.style.position = "absolute";
  img.style.textAlign = "baseline";
  //img
  img.src = "./img/Rectangle 79.png";
  user.appendChild(img);
  //title
  const title = document.createElement("p");
  title.textContent = Name;
  title.style.marginLeft = "-59px";
  user.appendChild(title);
  const userName = document.createElement("p");
  userName.textContent = Username;
  user.appendChild(userName);
  //mail
  const Mail = document.createElement("p");
  Mail.textContent = email;
  user.appendChild(Mail);
  ///titlle
  const phone = document.createElement("p");
  phone.textContent = phoneNumber;
  user.appendChild(phone);
  //   zipcode
  const zipcode = document.createElement("p");
  zipcode.textContent = zipCode;
  //   zipcode.style.marginLeft = "250px";
  user.appendChild(zipcode);
  const div = parentDiv;
  div.appendChild(user);
}

const getData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    for (let i = 0; i < data.length; i++) {
      let user = data[i];
      let Name = user.name;
      let username = user.username;
      let Mail = user.email;
      let phone = user.phone;
      let zipcode = user.address.zipcode;
      getUser(mainContainer, Name, username, Mail, phone, zipcode);
    }
  } catch (error) {
    console.log(error);
  }
};
getData();
document.body.appendChild(mainContainer);

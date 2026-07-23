// Accessing the DOM
// ID
const myContent = document.getElementById("content");
myContent.style.color = "red";
console.log(myContent);
// ClassName
const newContent = document.getElementsByClassName("myClass");
console.log(newContent);
// Tag Name
const tagElement = document.getElementsByTagName("button");
console.log(tagElement);
// QuerySelector
const myBtn = document.querySelector(".contentCard");
console.log(myBtn);
// QuerySelectorAll
const $paragraph = document.querySelectorAll("p");
console.log($paragraph);
// displaying html on DOM
const $student = document.getElementById("students");
const myStudents = ["John", "Doe", "James", "Daniel"];
let html = ``;
myStudents.forEach((student) => {
  html += `<li> I am ${student} a Frontend Development Student</li>`;
});
$student.innerHTML = html;
$student.style.color = "blue";

// displaying html on DOM using with object
const myCars = document.getElementById("car");
const myObject = {
  carCompany: [
    { company: "Lamborghini", views: "2 million" },
    { company: "Ferrari", views: "20 million" },
  ],
  user() {
    let content = ``;
    this.carCompany.forEach((myCar) => {
      content += `<p> ${myCar.company} has ${myCar.views} reactions</p>`;
    });
    return content;
  },
};
myCars.innerHTML = myObject.user();
myCars.style.color = "green";

// CHANGING HTML ATTRIBUTES.
// CHANGING 'HREF' ATTRIBUTES.
const website = document.querySelector("a");
console.log(website.getAttribute("href"));
// updating html link
website.setAttribute("href", "https://freecodecamp.org");
// updating the text in the dom
website.innerText = "Free-code Camp Official Website";

// CHANGING THE'CLASS/ID' ATTRIBUTE
const newText = document.querySelector("#text");
console.log(newText.getAttribute("id"));
newText.setAttribute("id", "word");
console.log(newText.getAttribute("id"));

// updating an empty id
const link = document.querySelector("div > a");
link.setAttribute("id", "set");
console.log(link);
// Accessing the new id
const newLink = document.getElementById("set");
newLink.innerHTML = "link set";

// styling in JS
newLink.style.border = "1px solid black";
newLink.style.borderRadius = "5px";
newLink.style.padding = "10px";
newLink.style.textDecoration = "none";
newLink.style.backgroundColor = "black";
// newLink.style.backgroundImage = "url(shrek.jpeg)";
newLink.style.color = "white";

// identifying nodes
const javaScriptDom = document.getElementById("dom");
console.log(`node type is:`, javaScriptDom.nodeType);
console.log(`node name is:`, javaScriptDom.nodeName);
console.log("has child node?:", javaScriptDom.hasChildNodes());
const myH2 = document.querySelector("h2");
console.log(`node type is:`, myH2.nodeType);
console.log(`node name is:`, myH2.nodeName);
console.log(newText.hasChildNodes());

const sportUl = document.querySelector("ul");
// create a new <li>
const new_List = document.createElement("li");
new_List.setAttribute("class", "sportClass");
// set a textContent to the <li> created
new_List.innerText = "Gaming";
// appending <li> to <ul>
sportUl.append(new_List);
const listItem = document.querySelectorAll(".sportClass");
console.log(listItem);
for (i = 0; i < listItem.length; i++) {
  listItem[i].style.color = "red";
}

// innerText
// innerHTML
// textContent
const newList = document.querySelector("#testing");
console.log(newList.innerHTML);
console.log(newList.innerText);
console.log(newList.textContent);

// Adding and removing classList
const newParagraph = document.querySelector("#paragraph");
console.log(newParagraph);
// newParagraph.classList.add('new-class');
newParagraph.classList.remove("new-class");
if (newParagraph.classList.contains("new-class")) {
  console.log("This class exist");
} else {
  console.log("This class has been removed");
}

// Creating elements
let newElement = document.createElement("div");
let newPara = document.createElement("p");
// Adding content to newPara
newPara.textContent = "Hello this is a new Paragraph";
// Appending
newElement.append(newPara);
document.body.append(newElement);
console.log(newElement);

// clicking a button, is an event. click on a keyboard. An event is simply something that happens on a webpage. You move your mouse is
// An eventlistener is javascript waiting for an event to happen, so that it can execute some code.
// Events Listener
// onClick(), addEventListener('click', function), mouseover
const btn = document.querySelector("#btn2");

// Solution 1
function alertBtn() {
  alert("A player has been Entered");
}
btn.addEventListener("click", alertBtn);


// Solution 2
btn.addEventListener("click", () => {
  alert("A player has been Entered");
});

const newPlayer = document.querySelector("#player2");
function changePlayerBg() {
  newPlayer.style.backgroundColor = "red";
}
btn.addEventListener("click", changePlayerBg);

const player = document.querySelector("#player3");
function changeBgColor() {
  player.style.backgroundColor = "blue";
}
player.addEventListener("mouseover", changeBgColor);

// Form object
let myForm = document.getElementById("myForm");
console.log(myForm);
console.log(document.forms[0]);
console.log(document.forms["myForm"]);
// Input Element Object
let input = document.getElementById("userInput");
input.value = "Hello! Steven";

// Fieldset and Legend Element Objects
let fieldset = document.querySelector("fieldset");
console.log(fieldset);

// Label Element Object
let label = document.querySelector("label");
console.log(label.htmlFor);

// Textarea Element Object
let textArea = document.getElementById("message");
textArea.value = "Type your message here.....";

// Button Element Object
let submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function () {
  alert("Form Submitted");
};
// Checkbox Input Object
let checkbox = document.getElementById("subscribe");
console.log(checkbox.checked);

// Radio Input Object
let radios = document.getElementsByName("gender");
radios.forEach((radio) => {
  if (radio.checked) {
    console.log(radio.value);
  }
});

// Image Input Object
let imageInput = document.querySelector('input[type="image"]');
console.log(imageInput.alt, imageInput.src);

// Select Elements Objects
let select = document.querySelector("#country");
// console.log(select.value);
let option = select.options[3];
console.log(option.text);

// File Input Element Object
let fileInput = document.getElementById("upload");
fileInput.onchange = function () {
  console.log(fileInput[0].name);
};

// Dark-mode Testing
const body = document.querySelector("body");
const darkMode = document.querySelector(".fa-solid");

darkMode.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});

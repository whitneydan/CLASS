// Accessing the DOM
// ID
const myContent = document.getElementById("content");
myContent.style.color = "red";
console.log(myContent);
// ClassName
const myContent = document.getElementsByClassName("contentCard");
console.log(myContent);
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
        { company: "Lamborghini", views: "2 million"},
        { company: "Ferrari", views: "20 million"},
    ],
    user() {
        let content = ``;
        this.carCompany.forEach((myCar) => {
          content += `<p> ${myCar.company} has ${myCar.views} reactions</p>`;
        });
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
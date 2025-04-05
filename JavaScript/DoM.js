var h1_elements = document.getElementsByTagName("h1")
console.log(h1_elements[0])
console.log(h1_elements[1])

h1_elements[0].innerText="HELLO IJSE"
console.log(h1_elements[0].innerHTML)

var getSubjectID = document.getElementById("id1")
console.log(getSubjectID[0])

var getSubjectBYName = document.getElementsByClassName("id")
console.log(getSubjectBYName[0])

let myNames = document.getElementsByName("myname")
console.log(myNames[0])
console.log(myNames[0].innerText)
console.log(myNames[0].innerHTML)
myNames[0].innerText = "TYPESCRIPT"

var queryLIST = document.querySelector("h6>p")
console.log(document.querySelector("h6>p"))


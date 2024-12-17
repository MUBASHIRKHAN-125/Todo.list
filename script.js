
let newArray =[];

function todosubmit(){
    let todoName = document.getElementById("inputtodo").value;

    if(todoName !== ""){
        newArray.push(todoName);
    }
    else{
        alert("Please enter a valid TODO item!");
    }
let li = "";

    for (let i = 0; i < newArray.length; i++){
         li += `<li>${newArray[i]}</li>`;
    }
document.getElementById("ulTodoList").innerHTML = li ;
}
function reset(){
    newArray =[];
    document.getElementById("ulTodoList").innerHTML = li = "";
    document.getElementById("inputtodo").value = "";
}
const typed = new Typed('.element', {
    strings: ["Welcome to Todo List Web Page..." , "MK Writer!"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });


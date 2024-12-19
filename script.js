
let newArray =[];
function print(){

let li = "";

for(let i = 0; i < newArray.length; i++){

li += `<li>${newArray[i]} <button class="list" onclick ="para(${i})"><i class="fa-solid fa-trash"></i></button></li>`;
}
document.getElementById("ulTodoList").innerHTML = li ;
}
function todosubmit(){
    let todoName = document.getElementById("inputtodo").value;
    if(todoName != ""){
        newArray.push(todoName);
    }else{
    alert("Please enter a valid TODO item!");
    }
    print();
}
function para(){
    newArray.splice(0 , 1);
    print();
}
function reset(){
    newArray =[];
    document.getElementById("ulTodoList").innerHTML = li = "";
    document.getElementById("inputtodo").value = "";
}
const typed = new Typed('.element', {
    strings: ["Welcome to Todo List Web Page..." , "MK Writer!"],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true
  });


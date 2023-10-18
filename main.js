// // console.log("hello wolrd")
// // //notifikasi
// // alert("ada notifikasi")
// // prompt("pinjem dong")

// // var promnet =" coding is easy!"
// // console.log(promnet)
// // var promnet =" coding is hard!"
// // console.log(promnet)

// // // pakai let biar kalo namanya sama ga error
// // let promnet = "coding is fun"
// // console.log(promnet)
// // let promnet = "coding not fun"
// // console.log(promnet)

// // // di js boleh pake koma boleh engga
// // // const promnet =" coding is my life"
// // // console.log(promnet)
// // // const promnet =" coding is my life"
// // // console.log(promnet)

// // // conditional statement
// // let totalPoin = prompt ("masukkan poin anda")
// // if(totalPoin > 100){
// // document.write("congrats");
// // }else{
// //     document.write("keep trying");
// // }

// // let x=6;
// // let y=3;
// // console.log(x<10 && y>1);
// // console.log(x<10 && y<1);
// // console.log(x==5||y==5);
// // console.log(x==6||y==5);
// // console.log(!x==y);


// // document.write(x<10 && y>1);
// // document.write("<br>"); 
// // document.write(x<10 && y<1);
// // document.write("<br>");
// // document.write(x==5||y==5);
// // document.write("<br>");
// // document.write(x==6||y==5);
// // document.write("<br>");
// // document.write(!x==y);

// let p =document.querySelector("p")
// let button =document.querySelector("button")
// let input= document.querySelector("input")
// button.addEventListener('click', function()){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML=isi //bisa input menggunakanhtml co.<b>input</b>
// }

// let h3 =document.querySelector("h3")
// let button =document.querySelector("button")
// let input= document.querySelector("input")
// button.addEventListener('click', function()){
//     let isi = input.value
//     console.log(isi)
//     p.innertext=isi
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    taskInput.value = "";

    if (taskText === "") {
        return;
    }
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    taskItem.appendChild(checkBox);
    taskItem.appendChild(document.createTextNode(taskText));

    var deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "x";
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem);

checkBox.onclick = function () {
    if (checkBox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
};
}
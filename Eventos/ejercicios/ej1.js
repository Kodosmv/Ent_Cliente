let newArray = [];
function addElement(){
   
    let newNum =Math.floor(Math.random() * 10);
    newArray.push(newNum);

    let li = document.createElement("li");
    li.textContent= newNum;
    document.getElementById("lista").appendChild(li);

}
document.getElementById("but").onclick= addElement;



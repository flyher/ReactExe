function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    console.log(event.target.id);
    event.dataTransfer.setData("dropobj",event.target.id);
    //console.log(event);
}
function drop(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("dropobj");
    event.target.appendChild(document.getElementById(data));
    //console.log(event.dataTransfer);
  
}
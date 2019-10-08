
function createTodo(){
    console.log("Creating a ToDo");
    //var text=document.getElementById("txt_Todo").value;
    var text=$('#txt_Todo').val();
    if(text!=""){
        console.log(text);
    //document.getElementById("txt_Todo").value="";
    $('#txt_Todo').val("");

    var li="<li>"+text+"</li>";
    console.log(li);
    $('#pending_List').append(li);

    }
    

    // Set the focus back to the input field
    $('#txt_Todo').focus();

}
function init(){
    console.log("Init of Todo App");

    //By ID
    //document.getElementById("btn_save").onclick=createTodo;
    $("#btn_save").click(createTodo);

    // //By Tag
    // document.getElementsByTagName("button");
    // $('button');

    // //By Class
    // document.getElementsByClassName("create-form");
    // $('.create-form');
}

// when the browser finish rendering my html
// execute the init function
window.onload=init;
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*function checkLogIn(){ 
    if(input name == "user"){
        if(input password == "userpassword"){
            window.open(userMain.html)
        }
    }
    if(input name == "librarian"){
        if(input password == "libpassword"){
            window.open(librarianMain.html)
        }
    }
    if(input name == "systemuser"){
        if(input password == "systempassword"){
            window.open(adminMain.html)
        }
    } 
}
*/
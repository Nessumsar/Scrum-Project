window.onload = function() {
    renderBooks();
    for(let i=0; i<document.getElementsByClassName("col-sm").length; i++) {
        document.getElementsByClassName("col-sm")[i].addEventListener("click", selectedBook);
    }
    document.getElementById("accept").addEventListener("click", borrowBooks);
}

function renderBooks() {
    for(let i=0; i<books.length; i++) {
        var newRow = document.createElement('div');
        var column = document.createElement('div');
        newRow.className = 'row';
        column.className = 'col-sm';
        if(i===0 || i%3===0) {
            for(let j=i; j<i+3; j++) {
                var picture = document.createElement('img');
                picture.src = books[j].Picture;
                picture.id = "image";
                column = document.createElement('div');
                column.className = 'col-sm';
                column.append(picture);
                column.append(document.createElement('br'));
                column.append(books[j].Title);
                column.append(document.createElement('br'));
                column.append("Remaining: " + books[j].Remaining);
                newRow.append(column);
            }
            document.getElementById('container').append(newRow);
        }
    }
}

function selectedBook(e) {
    let event = e.target;
    if(event.style.boxShadow==="darkblue 0px 0px 20px 2px") {
        event.style.boxShadow = "0px 0px 10px 2px black";
    }
    else {
        event.style.boxShadow = "0px 0px 20px 2px darkblue";
    }
}

function borrowBooks(e) {
    for(let i=0; i<document.getElementsByClassName("col-sm").length; i++) {
        if(document.getElementsByClassName("col-sm")[i].style.boxShadow==="darkblue 0px 0px 20px 2px" && books[i].Remaining>0) {
            books[i].Remaining--;
            document.getElementsByClassName("col-sm")[i].lastChild.replaceWith("Remaining: " + books[i].Remaining);
            document.getElementsByClassName("col-sm")[i].style.boxShadow = "0px 0px 10px 2px black";
        }
    }
} 

$(document).ready(function(){
    $("#search-bar").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".col-sm").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
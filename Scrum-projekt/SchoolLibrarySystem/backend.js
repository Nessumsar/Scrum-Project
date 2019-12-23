window.onload = function() {
    renderBooks();
    document.getElementById("search").addEventListener("click", searchBooks);
    for(let i=0; i<document.getElementsByClassName("col-sm").length; i++) {
        document.getElementsByClassName("col-sm")[i].addEventListener("click", selectedBook);
    }
    
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

function searchBooks() {
    var input, filter, grid, li, a, i, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    grid = document.getElementById("container");
    li = grid.getElementsByTagName("Text");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("text")[0];
        txtValue = a.textContent || a.innerText;
        console.log(txtValue.toUpperCase().indexOf(filter));
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
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
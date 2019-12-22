window.onload = function() {
    renderBooks();
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
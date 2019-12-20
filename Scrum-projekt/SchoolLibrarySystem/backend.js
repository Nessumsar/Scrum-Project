window.onload = function() {
    renderBooks();
}

function renderBooks() {
    for(let i=0; i<books.length; i++) {
        var newRow = document.createElement('div');
        var column = document.createElement('div');
        newRow.id = 'row';
        column.id = 'col-sm';
        if(i===0 || i%3===0) {
            for(let j=i; j<i+3; j++) {
                column.append(books[j].Title);
                newRow.append(column);
            }
            document.getElementById('container').append(newRow);
        }
    }
}
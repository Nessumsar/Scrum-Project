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
                column = document.createElement('div');
                column.className = 'col-sm';
                column.append(books[j].Title);
                newRow.append(column);
            }
            document.getElementById('container').append(newRow);
        }
    }
}
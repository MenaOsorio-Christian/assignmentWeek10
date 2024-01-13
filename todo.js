
let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let newStartDate = document.getElementById('new-start-date').value;
    let newEndDate = document.getElementById('new-end-date').value;

    // Check if 'new-end-date' is less than 'new-start-date'
    if (newStartDate > newEndDate) {
        alert("End date cannot be less than start date. Please correct the dates.");
        return; // Do not proceed if dates are invalid
    }

    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = newStartDate;
    row.insertCell(3).innerHTML = newEndDate;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});


function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        if (elementToDelete && elementToDelete.parentNode) {
            elementToDelete.parentNode.removeChild(elementToDelete);
        } else {
            console.error(`Element with id 'item-${id}' not found or has no parent node.`);
        }
    };
    return btn;
}


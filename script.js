//small app where users can add items to a list.

//this project is for my github portfolio

// script.js
class ItemList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.updateList();
    }

    updateList() {
        const listElement = document.getElementById('itemList');
        listElement.innerHTML = ''; // Clear the list
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listElement.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const itemList = new ItemList();
    document.getElementById('addItem').addEventListener('click', () => {
        const itemInput = document.getElementById('itemInput');
        if (itemInput.value) {
            itemList.addItem(itemInput.value);
            itemInput.value = ''; // Clear the input field
        }
    });
});

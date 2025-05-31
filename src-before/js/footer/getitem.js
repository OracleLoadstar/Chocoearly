const start_get = document.getElementById('footer-cloud');
start_get.addEventListener('click', () => {
    window.electronAPI.getItems();
    console.log('Request sent to get items from Chocolatey');
});

window.electronAPI.onGetItemResponse((response) => {
    if (response.success) {
        console.log('Received items:', response.data);
        const itemList = document.getElementById('item-list');
        itemList.innerHTML = ''; // Clear previous items
        response.data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.Name} - ${item.Version}`;
            itemList.appendChild(listItem);
        });
    } else {
        console.error('Error fetching items:', response.error);
    }
});
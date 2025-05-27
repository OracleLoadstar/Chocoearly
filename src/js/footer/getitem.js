import { ipcRenderer } from 'electron';

const start_get = document.getElementById('footer-cloud');
start_get.addEventListener('click', () => {
    ipcRenderer.send('get_item');
    console.log('Request sent to get items from Chocolatey');
    
});

ipcRenderer.on('get_item_response', (event, response) => {
    if (response.success) {
        console.log('Received items:', response.data);
        // Process the received data as needed
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
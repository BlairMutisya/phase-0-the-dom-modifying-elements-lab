const mainElement = document.getElementById('main');
mainElement.remove();
// Get the main element
const main = document.getElementById('main');

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id of the new h1 element
newHeader.id = 'victory';

// Set the text content of the new h1 element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new h1 element to the main element
main.appendChild(newHeader);

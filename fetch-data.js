async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through users and append an <li> for each using DOM methods
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Clear any existing content and append the constructed list
        dataContainer.innerHTML = '';
        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
async function fetchUserData() {
    apiURL = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiURL);
        const users = await response.json();
        const userList = users.map(user => `<li>${user.name}</li>`).join('');
        dataContainer.innerHTML = '';
        dataContainer.innerHTML = `<ul>${userList}</ul>`;
    } catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
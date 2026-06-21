async function testUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.status === 200) {
            console.log('Сервер 200');
        } else {
            console.log('Сервер не работает: ' + response.status);
        }

        const data = await response.json();
        if (data.length === 10) {
            console.log('Пользовайтелей 10');
        } else {
            console.log('Пользователей не 10');
        }
        if (data[0].email) {
            console.log('Email +');
        } else {
            console.log('Email отсутвует');
        }
    }
    catch (error) {
        console.log('Соединение упало: ' + error.message);
    }
}

testUsers();
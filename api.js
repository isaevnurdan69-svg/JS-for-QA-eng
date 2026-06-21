async function testPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.status === 200) {
            console.log('Статус 200');
        } else {
            console.log('Статус менее 200, а ' + response.status);
        }

        const data = await response.json();
        if (data.length > 50) {
            console.log('Постов достаточно: ' + data.length);
        } else {
            console.log('Постов мало: ' + data.length);
        }
    }
    catch (error) {
        console.log('Соединение упало: ', + error.message);
    }
} 

testPosts();
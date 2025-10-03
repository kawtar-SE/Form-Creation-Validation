// 1️⃣ تعريف الدالة غير المتزامنة لجلب بيانات المستخدمين
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // مسح رسالة "Loading"
        dataContainer.innerHTML = '';

        // إنشاء قائمة <ul> للمستخدمين
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // التعامل مع أي خطأ أثناء fetch
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// 2️⃣ تنفيذ الدالة بعد تحميل محتوى DOM
document.addEventListener('DOMContentLoaded', fetchUserData);


window.onload = function() {
    const tableBody = document.getElementById('tableBody');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // ملء الجدول بالبيانات
    users.forEach(user => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = user.username;
        row.insertCell(1).innerText = user.email;
        row.insertCell(2).innerText = user.password;
    });

    // إضافة حدث للزر
    document.getElementById('deleteButton').addEventListener('click', function() {
        // حذف البيانات من localStorage
        localStorage.removeItem('users');
        
        // مسح محتوى الجدول
        tableBody.innerHTML = '';
        
        alert("تم حذف البيانات بنجاح!");
    });
}
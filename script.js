document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند تقديم النموذج

    const username = document.getElementById('username').value; // الحصول على اسم المستخدم
    const email = document.getElementById('email').value; // الحصول على البريد الإلكتروني
    const password = document.getElementById('password').value; // الحصول على كلمة المرور
    if (username && email && password) {
        // تخزين البيانات في localStorage
        const userData = { username, email, password };
        let users = JSON.parse(localStorage.getItem('users')) || []; // جلب المستخدمين المخزنين أو إنشاء مصفوفة جديدة
        users.push(userData); // إضافة بيانات المستخدم الجديد
        localStorage.setItem('users', JSON.stringify(users)); // تخزين المصفوفة المحدثة في localStorage

        // عرض رسالة تأكيد للمستخدم
        document.getElementById('message').innerText = 'سيتم تسجيل بياناتك بعد 24 ساعة بعد عرضها لمطوري الموقع.';
        document.getElementById('message').style.color = 'green';

        // إعادة تعيين النموذج
        document.getElementById('signupForm').reset();
    } else {
        document.getElementById('message').innerText = 'يرجى ملء جميع الحقول.';
        document.getElementById('message').style.color = 'red';
    }
});
// JavaScript to switch between forms based on selected radio button
const hospitalLogin = document.querySelector('.hospital');
const adminLogin = document.querySelector('.admin');
const radioButtons = document.querySelectorAll('input[name="login-type"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'hospital') {
            hospitalLogin.classList.add('active');
            adminLogin.classList.remove('active');
        } else {
            hospitalLogin.classList.remove('active');
            adminLogin.classList.add('active');
        }
    });
});

// Function to reset the form
function resetForm() {
    document.getElementById('login-form').reset();
    document.getElementById('admin-form').reset();
}

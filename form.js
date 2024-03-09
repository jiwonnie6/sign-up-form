document.getElementById("signup-form").addEventListener("submit", checkPassword);

function checkPassword(event) {
    event.preventDefault()

    var pwd = document.getElementById("pwd").value; 
    var confirmPwd = document.getElementById("confirm-pwd").value;
    var message = document.getElementById("message");

    var pwdInput = document.getElementById("pwd");
    var pwdInputConfirm = document.getElementById('confirm-pwd');

    if (pwd != confirmPwd) {
        message.innerHTML = '* Passwords do not match';
        pwdInput.classList.add("error");
        pwdInputConfirm.classList.add("error");
    } else if (pwd == '') {
        message.innerHTML = '* Enter a password';
        pwdInput.classList.add("error");
        pwdInputConfirm.classList.add("error");
    } else {
        message.innerHTML = '';
        pwdInput.classList.remove("error");
        pwdInputConfirm.classList.remove("error");
    }

}
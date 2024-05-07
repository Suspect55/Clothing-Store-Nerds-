function UserDashboard() {
    let email = document.login.Email.value;
    let password = document.login.Password.value;

    if(email !== "allisonburgers@gmail.com") {
        alert("Incorrect Email or Password");
        return false;
    } else {
        return true;
    }
}
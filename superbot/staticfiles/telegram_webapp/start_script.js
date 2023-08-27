Telegram.WebApp.ready();

Telegram.WebApp.MainButton.setText('Send').show().onClick(function () {
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email");

    if (first_name.value == "") {
        first_name.style.border = "1px solid red";
        document.getElementById("fn").textContent ="Please enter your first name";
    };
    if (last_name.value == "") {
        last_name.style.border = "1px solid red";
        document.getElementById("ln").textContent ="Please enter your last name";
    };
    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById("em").textContent ="Please enter your email address";
    };
    if (first_name.value == "" || last_name.value == "" || email.value == "") {
        return;
    };
    const telegram = window.Telegram.WebApp
    const data = JSON.stringify({
        web_data: telegram.initDataUnsafe.query_id,
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
    });

    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});


let email = document.getElementById(`email`);
let password = document.getElementById(`password`);
let login_button = document.getElementById(`button`);
let insert_html = document.getElementById(`insert`);

function successFunction(response) {
    insert_html.insertAdjacentHTML(`beforebegin`, `<h1>success</h1>`);
    Cookies.set(`loginToken`, `${response.data.token}`);
    window.location = `/pages/home.html`;
}
function failureFunction(response) {
    insert_html.insertAdjacentHTML(`beforebegin`, `<h1>failed</h1>`);
}

function login(details) {
    let email_value = email[`value`];
    let password_value = password[`value`];
    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: password_value
        }

    }).then(successFunction).catch(failureFunction);
};

button.addEventListener(`click`, login);
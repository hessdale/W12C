// defining some variables to use in later functions
let email = document.getElementById(`email`);
let password = document.getElementById(`password`);
let login_button = document.getElementById(`button`);
let insert_html = document.getElementById(`insert`);
//defining success function for axios request
function successFunction(response) {
    //inserting html for success
    insert_html.insertAdjacentHTML(`beforebegin`, `<h1>success</h1>`);
    //setting cookie to have log in toke
    Cookies.set(`loginToken`, `${response.data.token}`);
    //moving user to home page
    window.location = `/pages/home.html`;
};
//defining failure function for axios request
function failureFunction(response) {
    insert_html.insertAdjacentHTML(`beforebegin`, `<h1>login failed</h1>`);
};
//defining a function to use an event listener on a button
function login(details) {
    //getting the values of email and password
    let email_value = email[`value`];
    let password_value = password[`value`];
    //axios request to post login info and get return of token if valid log in
    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: password_value
        }
    }).then(successFunction).catch(failureFunction);
};
//adding a event listener to login button
button.addEventListener(`click`, login);

let logout_button = document.getElementById(`delete_cookie`);


function logout(details) {
    Cookies.remove(`loginToken`);
};

logout_button.addEventListener(`click`, logout);
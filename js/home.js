//defining html variable to inject html into later
let main_html = document.getElementById(`main`);
//variable to check login token
let get_login = Cookies.get(`loginToken`);
//defining success function for axios reques
function successFunction(response) {
    //for loop to insert response information
    for (i = 0; i < response.data.data.length; i++) {
        main_html.insertAdjacentHTML(`beforebegin`, `<div><h1>${response.data.data[i].name}</h1><p>Created in year: ${response.data.data[i].year}</p><div style="width: 200px;height: 200px;background-color:${response.data.data[i].color};"></div></div>`)
    }
};
//defining failure function for axios request
function failureFunction(response) {
    //inserts html to let user know that request failed
    main_html.insertAdjacentHTML(`beforeend`, `<h1>request failed</h1>`)
};
//if statement to check and see if the users login token is here injects html if its undefined
if (get_login === undefined) {
    main_html.insertAdjacentHTML(`beforeend`, `<h1>please log in</h1><a href="../index.html">BACK</a>`)
} else {
    //if its not undefined then displays welcome message
    main_html.insertAdjacentHTML(`beforeend`, `<h1>Welcome</h1>`);
    //axios request to get info from db about colors
    axios.request({
        url: `https://reqres.in/api/unknown`
    }).then(successFunction).catch(failureFunction);
};
let main_html = document.getElementById(`main`);
let get_login = Cookies.get(`loginToken`);

function successFunction(response) {
    for (i = 0; i < response.data.data.length; i++) {
        main_html.insertAdjacentHTML(`beforebegin`, `<div><h1>${response.data.data[i].name}</h1><p>Created in year: ${response.data.data[i].year}</p><div style="width: 200px;height: 200px;background-color:${response.data.data[i].color};"></div></div>`)
    }
}
function failureFunction(response) {
    main_html.insertAdjacentHTML(`beforeend`, `<h1>request failed</h1>`)
}

if (get_login === undefined) {
    main_html.insertAdjacentHTML(`beforeend`, `<h1>please log in</h1><a href="../index.html">BACK</a>`)
} else {
    main_html.insertAdjacentHTML(`beforeend`, `<h1>Welcome</h1>`);
    axios.request({
        url: `https://reqres.in/api/unknown`
    }).then(successFunction).catch(failureFunction);

}
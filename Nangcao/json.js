const callBackJson = (err, data) => {
        console.log('function called callback for error', err, 'has json data', data);
    }
    // Json la mot kieu du lieu de ngon ngu may de doc, giong nhu object, co them ngoac nhon

function getTodos() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(xhttp.responseText);
            const string = JSON.stringify(data);
            callBackJson(undefined, data);
            callBackJson(undefined, string);
        }
        if (this.readyState === 4 && this.status !== 200) {
            callBackJson('error', undefined);
        }

    };
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    request.send();
}
getTodos();
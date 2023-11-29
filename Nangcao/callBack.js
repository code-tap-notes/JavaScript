const callBack = (err, data) => {
    console.log('function called callback for error', err, 'has data', data);
}

// Callbacl la goi mot ham trong mot ham khac
function getTodos() {
    var request = new XMLHttpRequest();
    // Ham cua java script
    // Xem thêm https://developer.mozilla.org/fr/docs/Web/HTTP/Status
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            console.log("text result", request.responseText);
            console.log("object oft result", request);
            callBack(undefined, 'loaded');
        }
        if (this.readyState === 4 && this.status !== 200) {
            callBack('error', undefined);
        }

    };
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    request.send();
}
getTodos();
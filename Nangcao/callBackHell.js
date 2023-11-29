// CallBack hell la Goi API thu nhat, lay du lieu de goi API ke tiep => vong load vo han
const callBackHell = (err, data) => {
    if (err) {
        console.log("has error: ", err)
    }
    if (data) {
        console.log("data: ", data)

    }
}

// Callbacl la goi mot ham trong mot ham khac
function getTodos(id, callBackHell) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            const data = JSON.parse(xhttp.responseText);

            callBackHell(undefined, data);
        }
        if (this.readyState === 4 && this.status !== 200) {
            callBackHell('error', undefined);
        }

    };
    request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    request.send();
}
getTodos(1, (err, data) => {
    if (err) {
        console.log("has error: ", err)
    }
    if (data) {
        console.log("data: ", data)

    }
});
getTodos(2, callBackHell);
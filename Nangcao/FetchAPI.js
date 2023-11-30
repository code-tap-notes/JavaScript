// https://jsonplaceholder.typicode.com/ -->Xem them trang nay
// fetch la mot promise 

const callBackFetch = (err, data) => {
    if (err) {
        console.log("has error: ", err);
    }
    if (data) {
        console.log("data: ", data);
    }
}

// Callbacl la goi mot ham trong mot ham khac
function getTodos(id, callBackFetch) {

    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                // Typical action to be performed when the document is ready:
                resolve(xhttp.responseText);
            }
            if (this.readyState === 4 && this.status !== 200) {
                reject('error with id', id);
            }
        }
        request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        request.send();
    })


}

fetch('https://jsonplaceholder.typicode.com/todos/4')
    .then(reponse => {
        return reponse.json()
    })
    .then(data => {
        console.log("data fetch: ", data);
    })
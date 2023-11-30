// CallBack hell la Goi API thu nhat, lay du lieu de goi API ke tiep => vong load vo han
const callBackHellPromise = (err, data) => {
    if (err) {
        console.log("has error: ", err);
    }
    if (data) {
        console.log("data: ", data);
    }
}

// Callbacl la goi mot ham trong mot ham khac
function getTodos(id, callBackHellPromise) {

    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                // Typical action to be performed when the document is ready:
                resolve(xhttp.responseText);
            }
            if (this.readyState === 4 && this.status !== 200) {
                reject('error', undefined);
            }
        }
        request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        request.send();
    })


}
// gettodos khai bao tren la mot promise
getTodos(1).then(data => {
    console.log("data promise: ", data)
}).catch(err => {
    console.log("has error promise: ", err)
})

// promiseResult()
//     .then(data => {
//         console.log("data promises", data);
//     })
//     .catch(error => {
//         console.log("error", error)
//     });
// // toan tu then va catch la lay data tu function promise khai baso tren
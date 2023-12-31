// long nhieu promise => vong load vo han
const callBackChainingPromise = (err, data) => {
    if (err) {
        console.log("has error: ", err);
    }
    if (data) {
        console.log("data: ", data);
    }
}

// Callbacl la goi mot ham trong mot ham khac
function getTodos(id, callBackChainingPromise) {

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
// gettodos khai bao tren la mot promise
// Chi can mot ham catch
getTodos(4).then(data4 => {
    console.log("data promise 1: ", data4);
    return getTodos(5);
}).
then(data5 => {
    console.log("data promise 2: ", data5);
    return getTodos(6);
}).
then(data6 => {
    console.log("data promise 3: ", data6);
}).
catch(err => {
    console.log("has error promise: ", err);
})

// promiseResult()
//     .then(data => {
//         console.log("data promises", data);
//     })
//     .catch(error => {
//         console.log("error", error)
//     });
// // toan tu then va catch la lay data tu function promise khai baso tren
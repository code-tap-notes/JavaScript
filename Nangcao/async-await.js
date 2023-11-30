// async la mot promise , await la cho de dong bo nhung hanh dong khong dong bo
const getNewTodo = async(id) => {
    let dataAsync = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('data async', dataAsync);
    let dataAwait = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('data async await', dataAwait);
}
getNewTodo(5).then(data => {
    console.log('data ', data);
})
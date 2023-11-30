// Error la object da duoc khai bao trong thu vien js -> Doc them
const getNewThrow = async(id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('data await', response);
    if (response && response.status !== 200) {
        throw new Error('something wrongs, status', response.status);
    }
    let data = response.json();
    return data;
}
getNewThrow(5).then(data => {
        console.log('data ', data);
    })
    .catch(err => {
        console.log('error ', err.message);
    })
    // co the dung try  { nhieu du kien code} catch {bat bat cu loi cua lenh nao}
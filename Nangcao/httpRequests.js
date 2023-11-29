//  https://jsonplaceholder.typicode.com/ -->Xem them trang nay
// http request la mot duong link API de lay du lieu tra ve Json
//Thương dung hppt request khi backEng va FrontEng dùng 2 ngôn ngu khac nhau
// https://www.w3schools.com/xml/xml_http.asp
var xhttp = new XMLHttpRequest();
// Ham cua java script
// Xem thêm https://developer.mozilla.org/fr/docs/Web/HTTP/Status
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log("text result", xhttp.responseText);
        console.log("object oft result", xhttp);
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhttp.send();
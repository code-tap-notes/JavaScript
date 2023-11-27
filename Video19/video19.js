//using callback là phương phap goi mot ham trong ham khac - long ghep ham
function myDisplayer(something) {
    console.log('tong la: ', something);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    //mycallback la ten ham muon gọi long ghep sau khi tính tổng, va sum la tham so dua vao ham nay
}
myCalculator(5, 4, myDisplayer);
//set timeout: Ví dụ mơ cua so va dong lai sau 3s
function openWin() {
    const myWindow = window.open("", "", "width=200, height=100");
    setTimeout(function() { myWindow.close() }, 3000);
}
//setintervalle : lặp liên tục

function move() {
    const element = document.getElementById("myBar");
    let width = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}
const getFormvalue = (event) => {
    event.preventDefault();
    let number = document.getElementById("cName").value;
    if(number<1) {
        alert("bạn cần nhập lại")
    }
    else if (number>10) {
        alert("bạn cần nhập lại")
}
let a = Math.floor(Math.random() * 10) + 1;
    //    let goal = document.getElementById("result")
        if(number ==a) {
            alert("bạn đã trúng thưởng 1 triệu")}
            else {
                alert("bạn đã sai")
                document.getElementById("result").innerHTML+= a
            }
        }

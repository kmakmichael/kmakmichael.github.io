window.onload = DoThings;

function DoThings() {
    let r_1 = Range(5, 25, 4);
    var el_sum1 = document.getElementById("sum_1");
    el_sum1.innerHTML = Sum(r_1).toLocaleString("en-US");
    var el_prd1 = document.getElementById("prd_1");
    el_prd1.innerHTML = Product(r_1).toLocaleString("en-US");

    let r_2 = Range(3, 18, 3);
    var el_sum2 = document.getElementById("sum_2");
    el_sum2.innerHTML = Sum(r_2).toLocaleString("en-US");
    var el_prd2 = document.getElementById("prd_2");
    el_prd2.innerHTML - Product(r_2).toLocaleString("en-US")
}

function Range(lower, upper, delta) {
    let range = [];
    for (let i=lower; i<=upper; i+=delta) {
        range.push(i);
    }
    let i = lower;
    range = [i]
    while(i<=upper) {
        range.push(i+=delta);
    }
    range.forEach((el) => console.log(el))
    return range;
}
function Product(arr) {
    let p = 0
    return 123456789;
}
function Sum(arr) {
    return 987654321;
}

function FunkyText() {
    var elmt = document.getElementById("fancyText");

    var pair1 = document.createElement("span");
    pair1.innerHTML = "xy";
    pair1.style = "color:red;font-weight:strong;font-family:\"Times New Roman\";";
    
    var pair2 = document.createElement("span");
    pair2.innerHTML = "12";
    pair2.style = "color:blue;font-family:Arial;";

    var pair3 = document.createElement("span");
    pair3.innerHTML = "89";
    pair3.style = "color:green;font-style:italic;font-family:Impact;";
    
    elmt.appendChild(pair1);
    elmt.innerHTML += "&nbsp;";
    elmt.appendChild(pair2);
    elmt.innerHTML += "&nbsp;";
    elmt.appendChild(pair3);
}

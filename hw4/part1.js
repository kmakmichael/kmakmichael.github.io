window.onload = DoThings;

function DoThings() {
    let r_1 = Range(5, 25, 4);
    let r_2 = Range(3, 18, 3);
    var el_sum1 = document.getElementById("sum_1");
    var el_prd1 = document.getElementById("prd_1");
    var el_sum2 = document.getElementById("sum_2");
    var el_prd2 = document.getElementById("prd_2");
}

function Range(lower, upper, delta) {
    let range = [];
    for (let i=lower; i <= upper; i1 += delta) {
        range.push(i);
        console.log(`adding ${i}`);
    }
    return range;
}
function Product(arr) {

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

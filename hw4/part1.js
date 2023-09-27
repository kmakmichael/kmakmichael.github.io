window.onload = DoThings;

function DoThings() {
    let plus = (a, b) => a + b;
    let mult = (a, b) => a * b;

    var el_sum1 = document.getElementById("sum_1");
    el_sum1.innerHTML = FoldFor(5, 25, 4, plus).toLocaleString("en-US");
    var el_prd1 = document.getElementById("prd_1");
    el_prd1.innerHTML = FoldFor(5, 25, 4, mult).toLocaleString("en-US");

    let r_2 = Range(3, 18, 3);
    var el_sum2 = document.getElementById("sum_2");
    el_sum2.innerHTML = Sum(r_2).toLocaleString("en-US");
    var el_prd2 = document.getElementById("prd_2");
    el_prd2.innerHTML - Product(r_2).toLocaleString("en-US")
}
function FoldFor(lower, upper, increment, operation) {
    let result = 0;
    for (let i=lower; i<=upper; i+= increment) {
        i = operation(result, i);
    }
}

function Range(lower, upper, delta) {
    let range = [];
    for (let i=lower; i<=upper; i+=delta) {
        range.push(i);
    }
    return range;
}
function Product(arr) {
    return 123456789;
}
function Sum(arr) {
    return 987654321;
}

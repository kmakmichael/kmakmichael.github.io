
var prices = [20.99, 12.75, 9.95, 35.89];

function ButtonSubmit() {
    let f = document.forms["sales_form"].elements;
    let [q1,s1] = ProcessItem(1);
    let [q2,s2] = ProcessItem(2);
    let [q3,s3] = ProcessItem(3);
    let [q4,s4] = ProcessItem(4);

    if (q1 === "ERR" || q2 === "ERR" || q3 === "ERR" || q4 === "ERR") {
        f["tot"].value = "ERR";
        f["earnings"].value = "ERR";
        return

    }
    f["tot"].value = q1 + q2 + q3 + q4;
    let cut = 0.09 * (s1 + s2 + s3 + s4);
    let earnings = 500.00 + cut;
    f["earnings"].value = earnings;
}

function ProcessItem(i) {
    let f = document.forms["sales_form"].elements;
    let qty = GetValidInt("q_item${i}");
    if (qty < 0) {
        f["i${i}_qty"].value = "ERR";
        f["i${i}_tot"].value = "ERR";
        return ["ERR", "ERR"]
    }
    f["i${i}_qty"].value = qty;
    f["i${i}_tot"].value = qty * prices[qty-1];
    return [qty, qty * prices[qty-1]];
}

function ClearItem(i) {
    f["i${i}_qty"].value = "";
    f["i${i}_qty"].value = "";
}

function ButtonClear() {
    ClearItem(1)
    f["tot"].value = ""
    f["earnings"].value = ""
}

function GetValidInt(el_name) {
    // elmnt.style.outline = "0px solid black";
    elmnt = document.forms["sales_form"].elements[el_name];
    ival = parseInt(elmnt.value);
    if (isNaN(ival)) {
        // elmnt.style.outline = "2px dotted red";
        return -1;
    }
    return ival;
}
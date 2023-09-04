function ButtonPress() {
    const f = document.forms["mathForm"].elements;
    var int1, int2, int3;
    int1 = parseInt(f["int1"].value);
    int2 = parseInt(f["int2"].value);
    int3 = parseInt(f["int3"].value);
    if (CheckInts(int1, int2, int3)) {
        console.log("good");
        var sum, avg, prod, sm, lg; 
        sum = int1 + int2 + int3;
        avg = sum / 3.0;
        prod = int1 * int2 * int3;
        sm = Math.min(int1, int2, int3);
        lg = Math.max(int1, int2, int3);
        document.forms["mathForm"].elements["resultBox"].value =
`Sum: ${sum}
Average: ${avg}
Product: ${prod}
Smallest: ${sm}
Largest: ${lg}`;
    } else {
        console.log("fuck");
    }
}

function CheckInts(int1, int2, int3) {
    var all_good = true;
    if (int1 == "") {
        all_good = false;
        document.forms["mathForm"].elements["resultBox"].value = "Error: Integer 1 must be a number";
    }
    if (int2 == "") {
        all_good = false;
        document.forms["mathForm"].elements["resultBox"].value = "Error: Integer 2 must be a number";
    }
    if (int3 == "") {
        all_good = false;
        document.forms["mathForm"].elements["resultBox"].value = "Error: Integer 3 must be a number";
    }
    return all_good;
}
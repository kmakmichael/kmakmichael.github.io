function ButtonPress() {
    let f = document.forms["grades_form"].elements;
    f["resultBox"].value = "";
    let hw, mdt, fnl, prt;
    hw = GetValidInt("hw_avg");
    mdt = parseInt(f["midterm"].value);
    fnl = parseInt(f["final"].value);
    prt = parseInt(f["participation"].value);

    let grade = (0.5 * hw_avg) + (0.2 * mdt) + (0.2 * fnl) + (0.1 * prt);
    if (grade < 0.0) {
        f["resultBox"].value = "Invalid Input!";
    } else {
        let letter = "";
        if (grade >= 90.0) {
            letter = "A";
        } else if (grade >= 80.0) {
            letter = "B";
        } else if (grade >= 70.0) {
            letter = "C";
        } else if (grade >= 60.0) {
            letter = "D: student must retake";
        } else {
            letter = "F: student must retake";
        }
        // ceil to be a bit nice
        f["resultBox"].value = Math.ceil(grade).toString().concat(" ", letter);
    }
    if (CheckInts(int1, int2, int3)) {
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
    }
}

function GetValidInt(el_name) {
    elmnt = document.forms["grades_form"].elements[el_name];
    ival = parseInt(elmnt.value);
    if (isNaN(ival)) {
        return -1;
    }
    return ival;
}

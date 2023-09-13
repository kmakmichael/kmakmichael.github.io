function ButtonPress() {
    let f = document.forms["grades_form"].elements;
    f["resultBox"].value = "";
    let hw, mdt, fnl, prt;
    hw = GetValidInt("hw_avg");
    mdt = GetValidInt("midterm");
    fnl = GetValidInt("final");
    prt = GetValidInt("participation");

    let grade = (0.5 * hw) + (0.2 * mdt) + (0.2 * fnl) + (0.1 * prt);
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
}

function GetValidInt(el_name) {
    elmnt.style.outlineColor = "black";
    elmnt = document.forms["grades_form"].elements[el_name];
    ival = parseInt(elmnt.value);
    if (isNaN(ival)) {
        elmnt.style.outlineColor = "red";
        return -1;
    }
    return ival;
}

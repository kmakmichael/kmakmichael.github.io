function ButtonClick() {
    let sz = parseFloat(document.forms["cube_form"].elements["cube_size"]);
    let cube_p = document.getElementById("cube");
    if (Number.isNaN(sz)) {
        p.innerHTML = "Invalid input (must be a number)";
        return;
    }
    if (sz < 2 || sz > 10) {
        cube_p.innerHTML = "Number out of range (must be between 2 and 10 inclusive)";
        return;
    }
    DrawCube(sz);
}

function DrawCUbe(sz) {
    console.log(`cube: ${sz}`)
}

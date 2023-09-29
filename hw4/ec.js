function ButtonClick() {
    let sz = parseFloat(document.forms["cube_form"].elements["cube_size"].value);
    let cube_p = document.getElementById("cube");
    if (Number.isNaN(sz)) {
        cube_p.innerHTML = "Invalid input (must be a number)";
        return;
    }
    if (sz < 2 || sz > 10) {
        cube_p.innerHTML = "Number out of range (must be between 2 and 10 inclusive)";
        return;
    }
    DrawCube(sz);
}

function DrawCube(sz) {
    let ws = "&ensp;".repeat(sz) + "&nbsp;";
    let edge = "* ".repeat(sz-1) + "*<br />"
    let mid = "*" + ws + "*" + "<br />";

    cube_p.innerHTML = "";
    cube_p.innerHTML += edge;
    cube_p.innerHTML += mid.repeat(sz - 2);
    cube_p.innerHTML += edge;
}

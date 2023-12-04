var e = document.forms[0].elements;

let rads = e["bg"];
for (let i = 0; i < rads.length; i ++) {
    rads[i].addEventListener("change", (event) => {
        $("#dynabox").css("background-color", rads[i].value);
    });
}

let chk = e["st_b"];
chk.addEventListener("change", (event) => {
    if (chk.checked) {
        $(".dynatext").css("font-weight", "bold");
    } else {
        $(".dynatext").css("font-weight", "normal")
    }
});
chk = e["st_i"];
chk.addEventListener("change", (event) => {
    if (chk.checked) {
        $(".dynatext").css("font-style", "italic");
    } else {
        $(".dynatext").css("font-style", "normal")
    }
});
chk = e["st_u"];
chk.addEventListener("change", (event) => {
    if (chk.checked) {
        $(".dynatext").css("text-decoration", "underline");
    } else {
        $(".dynatext").css("text-decoration", "none")
    }
});

let sel = e["fs"];
sel.addEventListener("change", (event) => {
    $("#dynatext").css("font-size", sel.options[sel.selectedIndex].value);
})
var f = document.forms[0];

for (rad in f.elements["bg"]) {
    rad.addEventListener("change", (event) => {
        console.log("changing background");
    });
}


f.st_b.addEventListener("change", (event) => {
    console.log("bolding");
});
var f = document.forms[0];

let rads = elements["bg"];
for (let i = 0; i < rads.length; i ++) {
    rads[i].addEventListener("change", (event) => {
        console.log("changing background");
        document.querySelector("#dynabox").style.backgroundColor = rads[i].value;
    });
}

let chk = f.elements["st_b"];
chk.addEventListener("change", (event) => {
    if (chk.checked) {
        console.log("unchecking");
    } else {
        console.log("checking");
    }
});

let sel = f.elements["fs"];
sel.addEventListener("change", (event) => {
    console.log(`changing to ${sel.options[sel.selectedIndex].value}`)
})
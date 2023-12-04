var f = document.forms[0];

for (let i = 0; i < f.elements["bg"].length; i ++) {
    f.elements["bg"][i].addEventListener("change", (event) => {
        console.log("changing background");
    });
}


f.elements["st_b"].addEventListener("change", (event) => {
    console.log("bolding");
});
var f = document.forms[0];

f.elements["bg"].addEventListener("change", (event) => {
    console.log("changing background");
});


f.st_b.addEventListener("change", (event) => {
    console.log("bolding");
});
document.forms[0].onsubmit = (event) => {
    console.log("submission");
    event.preventDefault();
}

document.forms.p3form.addEventListener("submit", FormSubmit);

function FormSubmit(event) {
    console.log("state submitted");
    return false;
}

function ClearForm() {
    document.forms.p3form.reset();
}

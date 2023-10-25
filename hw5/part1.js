$("form").on("submit", function(event) {
    event.preventDefault();
    let msg = ""
    if ($(this).find('[name=full_name]').val() == "") {
        msg += "Please enter a name<br>";
    }
    if ($(this).find("input[name=age_group]:checked")) {
        msg += "Please select an age<br />";
    }
    if ($(this).find("input[name=browsers]:checked")) {
        msg += "Please select at least one browser<br />";
    }
    if ($(this).find("select[name=movie]").val() == "") {
        msg += "Please select a movie genre<br />";
    }
    if (msg == "") {
        $("p#form_output").text("Thanks, your data was submitted.");
    } else {
        $("p#form_output").text("Form data not submitted. Errors:<br />" + msg);
    }
});

function ClearForm() {
    $("form").find("input[name=full_name]").text("");
    $("form").find("input:checked").prop("checked", false);
    $("form").find("select[name=movie]").val("");
}

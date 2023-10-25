$("form").on("submit", function(event) {
    event.preventDefault();
    let clean = true;
    clean = $(this).find('[name=full_name]').val() != "";
    console.log()
    console.log($(this).find('[name=browsers]').val());
    console.log(clean);
});

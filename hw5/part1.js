$("form").on("submit", function(event) {
    event.preventDefault();
    let clean = true;
    clean = $(this).find('[name=full_name]').val() != "";
    console.log($(this).find('[name=browsers]'))
    console.log(clean);
});

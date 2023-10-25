$("form").on("submit", function() {
    event.preventDefault();
    let clean = true;
    clean = $(this).find('[name=full_name]').val() != "";
    console.log(clean);
});

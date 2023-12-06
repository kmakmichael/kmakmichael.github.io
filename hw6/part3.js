$("document").ready(() => {
    $("input#pnum").inputmask("([0-9]{3}) [0-9]{3}-[0-9]{4}");
});

$("form").on("submit", () => {
    console.log($("input#pnum").val());
})
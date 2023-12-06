$("document").ready(() => {
    $("input#pnum").inputmask("(xxx) xxx-xxxx");
});

$("form").on("submit", () => {
    console.log($("input#pnum").val());
})
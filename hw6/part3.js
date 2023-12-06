$("document").ready(() => {
    $("input#pnum").mask("(000) 000-0000");
});

$("form").on("submit", () => {
    event.preventDefault();
    console.log($("input#pnum").val());
})
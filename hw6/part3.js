$("document").ready(() => {
    $("input#pnum").mask("(000) 000-0000");
});

$("form").on("submit", () => {
    console.log($("input#pnum").val());
    event.preventDefault();
})
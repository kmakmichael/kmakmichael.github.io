$("document").ready(() => {
    $("input#pnum").mask("(000) 000-0000");
});

$("form").on("submit", (event) => {
    event.preventDefault();
    console.log($("input#pnum").val().trim());
    let match = $("input#pnum").val().trim().match(/\(([0-9]{3})\) ([0-9]{3})-([0-9]{4})/);
    $("input#area").val(match[1]);
    $("input#area").val(match[2]);
    $("input#area").val(match[3]);
})
$("form").on("submit", () => {
    event.preventDefault();
    let needle = $("input#needle").val();
    let haystack = $("textarea#haystack").val();
    let matches = haystack.matchAll(`/${needle}/g`);
    console.log(`${matches}`);
});
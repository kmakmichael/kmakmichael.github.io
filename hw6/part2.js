$("form").on("submit", () => {
    event.preventDefault();
    let needle = $("input#needle").val();
    let haystack = $("textarea#haystack").val();
    let m = Find(needle, haystack);
    console.log(`${matches}`);
});

function Find(n, h) {
    let m = -1;
    let idx = -1;
    do {
        console.log(`finding ${n} in ${h}`);
        idx = h.indexOf(m);
        ++m;
        h = h.substring(idx);
    } while (idx > -1)
    return m;
}
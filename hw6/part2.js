$("form").on("submit", () => {
    event.preventDefault();
    let needle = $("input#needle").val();
    let haystack = $("textarea#haystack").val();
    let m = Find(needle, haystack);
    console.log(`${m}`);
});

function Find(n, h) {
    let m = -1;
    let idx = 0;
    let s = h;
    do {
        s = s.substring(idx+1);
        idx = h.indexOf(n);
        ++m;
        console.log(`found ${n} at ${idx} of ${h}`);
    } while (idx > -1)
    return m;
}
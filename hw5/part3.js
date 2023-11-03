var state_info = [
    // abbr, name, capital, population
    ["AL", "Alabama", "Montgomery", 4903185],
    ["AK", "Alaska", "Juneau", 731545],
    ["AZ", "Arizona", "Phoenix", 7278717],
    ["AR", "Arkansas", "Little Rock", 3017825],
    ["CA", "California", "Sacramento", 39512223],
    ["CO", "Colorado", "Denver", 5758736]
];

var state_info_lower = state_info.map((r) => {[r[0].toLowerCase(), r[1].toLowerCase()]});
for (r in state_info_lower) {
    console.log(r[0] + "," + r[1]);
}

function FormSubmit() {
    let stateval = document.forms.p3form.state_box.value;
    let idx = HaveStateInfo(stateval.toLowerCase());
}

function ClearForm() {
    document.forms.p3form.reset();
}

function HaveStateInfo(st) {
    for (let r = 0; r < state_info_lower.length; r++) {
        if (st.localeCompare(r[0]) == 0 || st.localeCompare(r[1]) == 0) {
            return r;
        }
    }
    return -1;
}

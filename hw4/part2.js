window.onload = DoThings;

function DoThings() {
    let el_div = document.getElementById("table_div")
    BuildTable(el_div, 5, 0.05)
}

function BuildTable(root, yrs, rate) {
    console.log(`Building ${yrs}yr table @{rate.toFixed(2)}`)
}
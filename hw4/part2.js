window.onload = DoThings;

function DoThings() {
    let el_div = document.getElementById("table_div");
    BuildTable(el_div, 5, 0.05);
    BuildTable(el_div, 5, 0.06);
    BuildTable(el_div, 5, 0.07);
}

function BuildTable(root, yrs, rate) {
    console.log(`Building ${yrs}yr table @{rate.toFixed(2)}`);
    let tbl = document.createElement("table");

    let tbody = document.createElement("tbody");
    for (let i = 1; i < yrs; i++) {
        tbody.appendChild(CreateRow(i, 1234.5678, rate))
    }
    let tfoot = document.createElement("tfoot");
    tfoot.appendChild(CreateRow(yrs, 2345.6789, rate));

    tbl.appendChild(CreateColGroup());
    tbl.appendChild(CreateThead());
    tbl.appendChild(tbody);
    tbl.appendChild(tfoot);
    root.appendChild(tbl);
}

function CreateRow(year, amount, intrate) {
    let rw = document.createElement("tr");

    let yr = document.createElement("td");
    yr.innerHTML = year;
    rw.appendChild(yr);
    let am = document.createElement("td");
    am.innerHTML = amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
    rw.appendChild(am);
    let ir = document.createElement("td");
    ir.innerHTML = `${intrate.toFixed(3)}%`;
    rw.appendChild(ir);
    return rw;
}

function CreateColGroup() {
    let cg = document.createElement("colgroup");
    cg.appendChild(document.createElement("col"));
    cg.appendChild(document.createElement("col"));
    cg.appendChild(document.createElement("col"));
    return cg;
}
function CreateThead() {
    let t_head = document.createElement("thead");
    let tr = document.createElement("tr");
    t_head.appendChild(tr);

    let th_1 = document.createElement("th")
    th_1.innerHTML = "Year";
    tr.appendChild(th_1);
    let th_2 = document.createElement("th")
    th_2.innerHTML = "Amount on Deposit";
    tr.appendChild(th_2);
    let th_3 = document.createElement("th")
    th_3.innerHTML = "Interest Rate";
    tr.appendChild(th_3);

    return t_head;
}
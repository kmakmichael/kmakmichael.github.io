var f = document.forms[0];

f.onsubmit = (event) => {
    console.log("submission");
    event.preventDefault();
    let val = f.elements["num_in"].value;
    let num = parseFloat(val);
    msg = `You typed ${val}`
    msg += `Rounded to the nearest integer: ${num.toFixed()}`;
    msg += `Square root rounded to integer: ${Math.sqrt(num).toFixed()}`;
    msg += `Rounded to the nearest 10th: ${num.toFixed(1)}`;
    msg += `Rounded to the nearest 100th: ${num.toFixed(2)}`;
    msg += `Rounded to the nearest 1000th: ${num.toFixed(3)}`;

    f.elements["txt_out"].value = msg;
}

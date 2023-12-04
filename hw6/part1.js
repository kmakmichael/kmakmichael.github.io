var f = document.forms[0];
f.elements["num_in"].setCustomValidity("Please enter a number with 4 decimal places");

f.onsubmit = (event) => {
    event.preventDefault();
    let val = f.elements["num_in"].value;
    let num = parseFloat(val);
    msg = `You typed ${val}`
    msg += `\nRounded to the nearest integer: ${num.toFixed()}`;
    msg += `\nSquare root rounded to integer: ${Math.sqrt(num).toFixed()}`;
    msg += `\nRounded to the nearest 10th: ${(Math.round(num * 10.0) / 10.0).toFixed(1)}`;
    msg += `\nRounded to the nearest 100th: ${(Math.round(num * 100.0) / 100.0).toFixed(2)}`;
    msg += `\nRounded to the nearest 1000th: ${(Math.round(num * 1000.0) / 1000.0).toFixed(3)}`;
    f.elements["txt_out"].value = msg;
}
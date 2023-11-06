
function goToNewPage(myForm) {
    var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
    console.log(mydest);
    if (mydest == ""){
        console.log("skipping")
    } else {
        window.open(mydest, '_blank');
    }
}
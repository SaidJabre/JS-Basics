document.querySelector("#button").addEventListener("click",clearEntry);

function clearEntry() {
    if (window.confirm("Do you want to reset form values?"))
        document.querySelector("form").reset();
}
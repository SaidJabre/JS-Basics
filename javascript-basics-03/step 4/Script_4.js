document.querySelector("#button").addEventListener("click", updateBorder);

function updateBorder () {

    var pass = document.querySelector("#password");
    var conf = document.querySelector("#confirmation");

    if (pass.value != conf.value) {
        pass.style.borderColor = "red";
        conf.style.borderColor = "red";
    }
    else {
        pass.style.border = "1px solid gray";
        conf.style.border = "1px solid gray";
    }
}
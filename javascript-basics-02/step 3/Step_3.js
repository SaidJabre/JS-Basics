document.querySelector("#name").addEventListener("change", function() {
        var name = document.querySelector("#name").value;
        document.querySelector("#name_div").innerHTML = name;
    });
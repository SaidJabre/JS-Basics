document.querySelector(".blue").addEventListener("click",function () {
                                    changeColor("blue"); 
                                    }, false);

function changeColor (color) {
    document.querySelector("#text").style.color = color;
}
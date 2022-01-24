document.querySelector(".blue").addEventListener("click",function () {
                                    changeColor("blue"); 
                                    } );

function changeColor (color) {
    document.querySelector("#text").style.color = color;
}
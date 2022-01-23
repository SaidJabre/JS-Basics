document.querySelector("#name").addEventListener("blur",ThankMsg);

function ThankMsg()
{
    var name = document.querySelector("#name").value;
    alert("thank you for participating: " + name);
}
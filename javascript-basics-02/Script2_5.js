var images=document.querySelectorAll("<img>");
for (var image of images)
    document.querySelector(image).addEventListener("mouseover",changeImg);

function changeImg()
{
    alert("hello");
}
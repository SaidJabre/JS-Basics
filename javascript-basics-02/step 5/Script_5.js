var images=document.querySelectorAll("img");
var bDone = 0;

for (var image of images)
    image.addEventListener("mouseover",changeImg);

function changeImg()
{
    if (bDone===0)
    {
        var images = document.querySelectorAll("img");
        for (var image of images)
        {
            var source = image.src;
            var len = image.src.length;
            source = image.src.substring(0,len-4)+"_2.jpg";
        
            image.src = source;
        }
        bDone = 1;
    }
    
}
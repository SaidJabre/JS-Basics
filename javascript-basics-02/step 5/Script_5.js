var bDone = 0;

const images=document.querySelectorAll("img");
for (let i=0; i < images.length; i++)
    images[i].addEventListener("mouseover",changeImg);

function changeImg()
{ 
    if (bDone===0)
    {
        const images = document.querySelectorAll("img");
        for (const image of images)
        {
            var source = image.src;
            var len = image.src.length;
            source = image.src.substring(0,len-4)+"_2.jpg";
        
            image.src = source;
        }
        bDone = 1;
    }
}
const images = document.querySelectorAll("img");
for (i=0 ; i < images.length; i++)
{ 
    images[i].addEventListener ("mouseover",newImg);
    images[i].addEventListener ("mouseout",resetImg);
}

function newImg()
{
    const images = document.querySelectorAll("img");
    for (const image of images)
    {
        var source = image.src;
        source = source.substring(0,source.length-4)+"_2.jpg";
        image.src = source;
    }
}
function resetImg() {
  
    const images = document.querySelectorAll("img");
    for (const image of images)
    {
        var source = image.src;
        source = source.substring(0,source.length-6)+".jpg";
        image.src = source;
    }
}
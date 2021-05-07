var i ="0";
function update()
{i++;
    var number_of_member = "11";
    if (i > number_of_member) 
    {
     i = "0";   
    }
    var updatedImage = images[i];
    var updatedname = names[i];
    document.getElementById("image").src = updatedImage;
    document.getElementById("names").innerHTML = updatedname;
    console.log("Next Clicked!!!");  
}
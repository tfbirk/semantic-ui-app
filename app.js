// script for index.html
star_is_visible = false

function action()
{
    var star = document.getElementById("star")
    if (!star_is_visible)
    {
        star.style.display = "block"
        star_is_visible = true
    }
    else
    {
        star.style.display = "none"
        star_is_visible = false
    }
        
} 
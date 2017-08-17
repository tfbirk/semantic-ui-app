// script for index.html

function action()
{
    var star = document.getElementById("star")
    var star_is_visible = star.style.display == "block"
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

function changeBtnText()
{
    var click_me_btn = document.getElementById("click-me-btn")
    var btn = document.getElementById("button")
   
    if (btn.innerHTML != "Click Me!")
    {
        btn.innerHTML = "Click Me!"
        click_me_btn.innerHTML = "<i class=\"warning icon\"></i>"
    }
}

function changeClickMeText()
{
    var click_me_btn = document.getElementById("click-me-btn")
    var btn = document.getElementById("button")
    if (click_me_btn.innerHTML != "Click Me")
    {
        click_me_btn.innerHTML = "Click Me"
        btn.innerHTML = "<i class=\"warning icon\"></i>"
    }
}

function toggleDocumentation()
{
    var docs = document.getElementById("docs")
    if (docs.style.display == "none")
    {
        docs.style.display = "block"
    }
    else
    {
        docs.style.display = "none"
    }
}
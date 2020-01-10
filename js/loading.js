//Loading screen to give fontawesome icons time to load
function load()
{
    wait = setTimeout(display, 300);
    wait = setTimeout(scrollUp, 320);
    wait = setTimeout(links, 1000);
  
}

//facilitate the display of content and loading screen
function display()
{
    document.getElementById("load").style.display = "none";
    document.getElementById("content").classList.add('show');
    document.body.style.overflow="visible";
    
}

//scroll to top of page after loading
function scrollUp()
{
     document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//delay fontawesome icons from appearing to give more time to load
function links()
{
    document.getElementById("links").classList.add('show');
}
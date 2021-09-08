// capturing page elements
const copyrightYear = document.getElementById("copyright-year");
const navBtnOpen = document.getElementById("mobile-nav-open");
const navBtnClose = document.getElementById("mobile-nav-close");
const navBox = document.getElementById("header-nav-box");
const header = document.getElementById("header");







// updating copyright year
let currentYear = new Date().getFullYear();

copyrightYear.textContent = currentYear;




// toggle nav menu open and close
function toggleNavMenu()
{

    if ( navBtnOpen.style.display === "block" )
    {
        navBtnOpen.style.display = "none";
        navBtnClose.style.display = "block";
        navBox.style.display = "flex";
    }
    else if ( navBtnClose.style.display === "block" )
    {
        navBtnClose.style.display = "none";
        navBtnOpen.style.display = "block";
        navBox.style.display = "none";
    }
}





// smooth scrolling animation 
const allAnchors = document.querySelectorAll("a:link");


allAnchors.forEach( (oneAnchor)=>{

    oneAnchor.addEventListener("click" , (cEvent)=>  {

        cEvent.preventDefault();

        let anchorLink = oneAnchor.getAttribute("href");



        if ( anchorLink === "#" )
        {
            scrollTo(
                {
                    top: 0,
                    behavior: "smooth",
                }
            );
        }

        if ( anchorLink !== "#" && anchorLink.startsWith("#") )
        {
            let sectionId = document.querySelector(anchorLink);
            // console.log(anchorLink);
            sectionId.scrollIntoView(
                {
                    behavior: "smooth",
                }

            );
        }

    });

});



// closeing the nav menu on mobile view when links clicked
const navAnchors = document.querySelectorAll(".nav-list-item");

// console.log(navAnchors);

navAnchors.forEach( function (navEl)  {

    navEl.addEventListener("click" , ()=> {

        if ( navBox.style.display === "flex" )
        {
            toggleNavMenu();
        }

    });


});











// initial setting
navBtnOpen.style.display = "block";
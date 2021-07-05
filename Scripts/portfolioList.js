let portfolioItems;

fetch("../Scripts/portfolioItems.json")
.then(function(response){
    return response.json();
})
.then(function(data) {
    //console.log(data);
    portfolioItems = data;

    initialisePortfolio();
})
.catch(e => {
    console.log(e);
});


let portfolioItemsToLoad = null;
const pathLocation = window.location.pathname;
let semanticAdjust = null;

const initialisePortfolio = () =>{
    
    console.log(portfolioItems);


    const blogGrid = document.querySelector('.portfolio-grid');

    if (window.location.pathname === "/WSOA3028A_1894979/" || window.location.pathname === "/WSOA3028A_1894979/index.html" || window.location.pathname === "/")
    {
        console.log("test");
        portfolioItemsToLoad = 1;
        semanticAdjust = "h3";
    }
    else
    {
        console.log(window.location.pathname);


        semanticAdjust = "h2";

        portfolioItemsToLoad = portfolioItems.length;
    }


    for (let i=0; i<portfolioItemsToLoad; i++){

        if (portfolioItems[i] !== undefined || portfolioItems[i] !== null){

            const section = document.createElement("section");
            const link = document.createElement("a");
            link.className = "portfolio-card";
            link.href = "/WSOA3028A_1894979" + portfolioItems[i].portfolioLocation;
        
            const img = document.createElement("img");
            img.src = "/WSOA3028A_1894979" + portfolioItems[i].potfolioImagePreview.src;
            img.alt = portfolioItems[i].potfolioImagePreview.alt;
            img.width = "434";
            img.height = "300";
            img.title = portfolioItems[i].potfolioImagePreview.imageTitle;
        
            const header = document.createElement("header");
            const headerP = document.createElement("p");

            headerP.innerText = portfolioItems[i].portfolioDescription;
            
            const portfolioTitle = document.createElement(semanticAdjust);
            portfolioTitle.innerText = portfolioItems[i].title;
            header.appendChild(portfolioTitle);
            header.appendChild(headerP)
        
            link.appendChild(img);
            link.appendChild(header);
        
            section.appendChild(link);
        
            blogGrid.appendChild(section);
            
        }

    }

};

//document.addEventListener('DOMContentLoaded', () => initialisePortfolio());

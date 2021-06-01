const portfolioItems = [
    {title: "Japan after Bloom", portfolioLocation: "/PortfolioPage/PortfolioPiece1.html",
        potfolioImagePreview: {
            src: "/Images/PortfolioWork/Portfolio1/Japan1.jpg",
            alt: "An Orange Pagoda in Japan",
            imageTitle: "A photo of a Japanese Pagoda"},
        portfolioDescription: "A collection of my favourite photos from my time was working in Japan",
    },
    {title: "Cali in the Winter", portfolioLocation: "/PortfolioPage/PortfolioPiece2.html",
    potfolioImagePreview: {
        src: "/Images/PortfolioWork/Portfolio2/America2.jpeg",
        alt: "America Flag on a mountain",
        imageTitle: "A photo of an American Flag"},
    portfolioDescription: "A collection of my favourite photos from Cali in the Winter",
}
]

let portfolioItemsToLoad = null;
const pathLocation = window.location.pathname;
let blogType = null;
let allBlogs = false;
let semanticAdjust = null;

const initialiseBlogs = () =>{
    const blogGrid = document.querySelector('.portfolio-grid');

    if (window.location.pathname === "/WSOA3028A_1894979/" || window.location.pathname === "/WSOA3028A_1894979/index.html" || window.location.pathname === "/")
    {
        portfolioItemsToLoad = 1;
        semanticAdjust = "h3";
    }
    else
    {

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
            
            const blogTitle = document.createElement(semanticAdjust);
            blogTitle.innerText = portfolioItems[i].title;
            header.appendChild(blogTitle);
            header.appendChild(headerP)
        
            link.appendChild(img);
            link.appendChild(header);
        
            section.appendChild(link);
        
            blogGrid.appendChild(section);
            
        }

    }

};

document.addEventListener('DOMContentLoaded', () => initialiseBlogs());

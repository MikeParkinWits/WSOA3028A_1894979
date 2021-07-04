const portfolioItems = [
    {title: "The Colourful Maboneng", portfolioLocation: "/PortfolioPage/PortfolioPiece5.html",
    potfolioImagePreview: {
        src: "/Images/PortfolioWork/Portfolio5/City7.JPG",
        alt: "A photo of a pink car on a building in Maboneng",
        imageTitle: "A pink car on a building"},
    portfolioDescription: "Some photos taken on my phone in the Maboneng Precinct in Johannesburg",
},
    {title: "Life in the City", portfolioLocation: "/PortfolioPage/PortfolioPiece4.html",
    potfolioImagePreview: {
        src: "/Images/PortfolioWork/Portfolio4/Urban1.jpeg",
        alt: "Two statues at an intersection",
        imageTitle: "Two statues at an intersection"},
    portfolioDescription: "Some photos taken in the city of Johannesburg while scouting for locations for my upcoming movie",
},
    {title: "Nirox in Lockdown", portfolioLocation: "/PortfolioPage/PortfolioPiece3.html",
    potfolioImagePreview: {
        src: "/Images/PortfolioWork/Portfolio3/Nirox3.jpeg",
        alt: "A sculpture of a person sitting on a lawn",
        imageTitle: "A sculpture of a person sitting on a lawn"},
    portfolioDescription: "Some photos taken during lockdown while scouting locations for my movie in Johannesburg",
},
    {title: "Cali in the Winter", portfolioLocation: "/PortfolioPage/PortfolioPiece2.html",
    potfolioImagePreview: {
        src: "/Images/PortfolioWork/Portfolio2/America2.jpeg",
        alt: "America Flag on a mountain",
        imageTitle: "A photo of an American Flag"},
    portfolioDescription: "A collection of my favourite photos from Cali in the Winter",
},
{title: "Japan after Bloom", portfolioLocation: "/PortfolioPage/PortfolioPiece1.html",
potfolioImagePreview: {
    src: "/Images/PortfolioWork/Portfolio1/Japan1.jpg",
    alt: "An Orange Pagoda in Japan",
    imageTitle: "A photo of a Japanese Pagoda"},
portfolioDescription: "A collection of my favourite photos from my time was working in Japan",
}
]

let portfolioItemsToLoad = null;
const pathLocation = window.location.pathname;
let semanticAdjust = null;

const initialisePortfolio = () =>{
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

document.addEventListener('DOMContentLoaded', () => initialisePortfolio());

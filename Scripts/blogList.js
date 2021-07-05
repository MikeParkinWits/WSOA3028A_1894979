let blogItems = []

fetch("/WSOA3028A_1894979/Data/blogItems.json")
.then(function(response){
    return response.json();
})
.then(function(data) {
    //console.log(data);
    blogItems = data;

    initialiseBlogs();
})
.catch(e => {
    console.log(e);
});

let blogsToLoad = null;
const pathLocation = window.location.pathname;
let blogType = null;
let allBlogs = false;
let semanticAdjust = null;

const initialiseBlogs = () =>{
    const blogGrid = document.querySelector('.grid');

    if (window.location.pathname === "/WSOA3028A_1894979/" || window.location.pathname === "/WSOA3028A_1894979/index.html" || window.location.pathname === "/")
    {
        blogsToLoad = 3;
        allBlogs = true;
        semanticAdjust = "h3";
    }
    else
    {

        semanticAdjust = "h2";

        blogsToLoad = blogItems.length;
        switch (window.location.pathname)
        {
            case "/Blogs/AllBlogsP1.html":
                allBlogs = true;
                break;
            case "/WSOA3028A_1894979/Blogs/TheoryBlogsP1.html":
                blogType = "Theory";
                break;
            case "/WSOA3028A_1894979/Blogs/CreativeBlogsP1.html":
                blogType = "Creative";
                break;
            case "/WSOA3028A_1894979/Blogs/CharacterDevBlogsP1.html":
                blogType = "Character Development";
                break;
            case "/WSOA3028A_1894979/Blogs/WebDevBlogsP1.html":
                blogType = "Website Development";
                break;
        }
    }



    for (let i=0; i<blogsToLoad; i++){

        if (blogItems[i] !== undefined || blogItems[i] !== null){

            if (blogItems[i].blogType === blogType || allBlogs === true)
            {
            const section = document.createElement("section");
            const link = document.createElement("a");
            link.className = "blog-card";
            link.href = "/WSOA3028A_1894979" + blogItems[i].blogLocation;
        
            const img = document.createElement("img");
            img.src = "/WSOA3028A_1894979" + blogItems[i].blogImagePreview.src;
            img.alt = blogItems[i].blogImagePreview.alt;
            img.width = "320";
            img.height = "202";
            img.title = blogItems[i].blogImagePreview.imageTitle;
        
            const header = document.createElement("header");
            const headerP = document.createElement("p");

            switch (blogItems[i].blogType){
                case "Theory":
                    headerP.className = "theory-blog";
                    break;
                case "Creative":
                    headerP.className = "creative-blog";
                    break;
                case "Character Development":
                    headerP.className = "character-blog";
                    break;
                case "Website Development":
                    headerP.className = "website-blog";
                    break;
            }




            headerP.innerText = blogItems[i].blogType;
            
            const blogTitle = document.createElement(semanticAdjust);
            blogTitle.innerText = blogItems[i].title;
            header.appendChild(headerP)
            header.appendChild(blogTitle);
            
            const linkP = document.createElement("p");
            linkP.innerText = blogItems[i].blogDescription;
        
        
            const footer = document.createElement("footer");
            const footerP = document.createElement("p");
            footerP.innerText = "By " + blogItems[i].blogAuthor +  " on ";
            const time = document.createElement("time");
            time.dateTime = new Date(blogItems[i].blogDate);
            time.innerText = blogItems[i].blogDate;
            footerP.append(time);
            footer.appendChild(footerP);
            link.appendChild(img);
            link.appendChild(header);
            link.appendChild(linkP);
            link.appendChild(footer);
        
            section.appendChild(link);
        
            blogGrid.appendChild(section);
            }
        }

    }

};

//document.addEventListener('DOMContentLoaded', () => initialiseBlogs());
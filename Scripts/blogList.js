const blogItems = [
    {title: "The Search Begins", blogLocation: "/Blogs/CreativeBlogs/Blog20.html",
        blogImagePreview: {
            src: "/Images/CreativeImages/Blog20/Blog20-Preview-Image.jpg",
            alt: "A picture of a Sculpture Park and multiple brown statues",
            imageTitle: "A picture of a Sculpture Park"},
        blogType: "Creative",
        blogDescription: "Here I tell you about the start of our location scouting in South Africa!",
        blogAuthor: "Jake Sky",
        blogDate: "4 June 2021"
    },
    {title: "Updated Website Wireframes", blogLocation: "/Blogs/WebDevBlogs/Blog19.html",
        blogImagePreview: {
            src: "/Images/WebDevelopmentImages/Blog19-Preview-Image.jpg",
            alt: "A top down view showing a comput above a mobile app wireframe design",
            imageTitle: "A top down view showing a mobile app wireframe design"},
        blogType: "Website Development",
        blogDescription: "In this blog post I give my updated website wireframes",
        blogAuthor: "Michael Parkin",
        blogDate: "28 May 2021"
    },
    {title: "Website Style Guide", blogLocation: "/Blogs/WebDevBlogs/Blog18.html",
        blogImagePreview: {
            src: "/Images/WebDevelopmentImages/Blog18-Preview-Image.jpg",
            alt: "A picture of a computer screen on a table",
            imageTitle: "A picture of a computer screen on a table"},
        blogType: "Website Development",
        blogDescription: "In this blog post I show my websites style guide",
        blogAuthor: "Michael Parkin",
        blogDate: "28 May 2021"
    },
    {title: "The Digital Divide in South Africa", blogLocation: "/Blogs/TheoryBlogs/Blog17.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog17/Blog17-Preview-Image.jpg",
            alt: "A black and green picture showing a cellular signal and a wifi signal",
            imageTitle: "A picture of a cellular, and wifi, symbol"},
        blogType: "Theory",
        blogDescription: "The digital divide is a huge problem, and here I explain why it's a bigger problem for South Africa",
        blogAuthor: "Michael Parkin",
        blogDate: "21 May 2021"
    },
    {title: "What Next?", blogLocation: "/Blogs/CreativeBlogs/Blog16.html",
        blogImagePreview: {
            src: "/Images/CreativeImages/Blog16/Blog16-Preview-Image.jpg",
            alt: "A picture of a tree at sunrise",
            imageTitle: "A picture of a tree at sunrise in Africa"},
        blogType: "Creative",
        blogDescription: "Thought this story couldn't get crazier? Well, it's just getting started!",
        blogAuthor: "Jake Sky",
        blogDate: "14 May 2021"
    },
    {title: "Exploring Metaphors and Meaning Making in Digital Spaces", blogLocation: "/Blogs/TheoryBlogs/Blog15.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog15/Blog15-Preview-Image.jpg",
            alt: "A picture of someone holding a phone",
            imageTitle: "A picture of someone holding a phone in their hand"},
        blogType: "Theory",
        blogDescription: "Here I explore metaphor design, and its use, in digital spaces",
        blogAuthor: "Michael Parkin",
        blogDate: "7 May 2021"
    },
    {title: "Information Geographies - A Critical Reflection", blogLocation: "/Blogs/TheoryBlogs/Blog14.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog14/Blog14-Preview-Image.jpg",
            alt: "A globe on a table",
            imageTitle: "A picture of a globe on a table"},
        blogType: "Theory",
        blogDescription: "Here I give a critical reflection on the reading Towards a Study of Information Geographies",
        blogAuthor: "Michael Parkin",
        blogDate: "30 April 2021"
    },
    {title: "Why Balancing UI and UX Design is Crucial", blogLocation: "/Blogs/TheoryBlogs/Blog13.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog13/Blog13-Preview-Image.jpg",
            alt: "A person drawing wireframes on a piece of paper",
            imageTitle: "A person drawing wireframes for their app"},
        blogType: "Theory",
        blogDescription: "In this blog post I go over why it is important to balance your UI and UX Design",
        blogAuthor: "Michael Parkin",
        blogDate: "16 April 2021"
    },
    {title: "Jake Sky Character Rationale", blogLocation: "/Blogs/CharacterDevBlogs/Blog12.html",
        blogImagePreview: {
            src: "/Images/CharacterDevBlogs/Blog12-Preview-Image.jpg",
            alt: "A barn with an American flag hanging on it, on a yellow open field",
            imageTitle: "An american barn in an open field"},
        blogType: "Character Development",
        blogDescription: "In this character development blog post I give my rationale for creating my fictional character Jake Sky",
        blogAuthor: "Michael Parkin",
        blogDate: "15 April 2021"
    },
    {title: "The History and Purpose of Web Robots", blogLocation: "/Blogs/TheoryBlogs/Blog11.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog11/Blog11-Preview-Image.jpg",
            alt: "Robotic hand reaching upwards",
            imageTitle: "A robotic hand reaching upwards"},
        blogType: "Theory",
        blogDescription: "In this blog post I look at the history and purpose of web robots",
        blogAuthor: "Michael Parkin",
        blogDate: "9 April 2021"
    },
    {title: "The Importance of Good Semantic Markup", blogLocation: "/Blogs/TheoryBlogs/Blog10.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog10/Blog10-Preview-Image.jpg",
            alt: "Photo of screen showing Semantic Markup from an angle",
            imageTitle: "An example of Semantic Markup"},
        blogType: "Theory",
        blogDescription: "Good Semantic Markup is key when writing HTML, and in this blog post I tell you why!",
        blogAuthor: "Michael Parkin",
        blogDate: "2 April 2021"
    },
    {title: "The Medium is the Message and the Web", blogLocation: "/Blogs/TheoryBlogs/Blog9.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog9/Blog9-Preview-Image.jpg",
            alt: "A black and white picture of Marshal McLuhan holding a book",
            imageTitle: "A picture of Marshal McLuhan"},
        blogType: "Theory",
        blogDescription: "In this blog post I explain Marshal McLuhans idea that the medium is the message and how it relates to the internet",
        blogAuthor: "Michael Parkin",
        blogDate: "2 April 2021"
    },
    {title: "Let Me Explain...", blogLocation: "/Blogs/CreativeBlogs/Blog8.html",
        blogImagePreview: {
            src: "/Images/CreativeImages/Blog8/Blog8-Preview-Image.jpg",
            alt: "A Man with a suitcase looking at a plane in an airport",
            imageTitle: "A man looking at a plane"},
        blogType: "Creative",
        blogDescription: "This is the first official blog post documenting my filmmaking journey, where I go more into depth about why this took so long to tell all of you about it!",
        blogAuthor: "Jake Sky",
        blogDate: "29 March 2021"
    },
    {title: "What is a browser? How does it work?", blogLocation: "/Blogs/TheoryBlogs/Blog7.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog7/Blog7-Preview-Image.jpg",
            alt: "Laptop on a table with a browser open",
            imageTitle: "A laptop on a desk"},
        blogType: "Theory",
        blogDescription: "Have you ever wondered just how your web browser works? Well in this blog post I go over just that!",
        blogAuthor: "Michael Parkin",
        blogDate: "26 March 2021"
    },
    {title: "The importance of Web 2.0", blogLocation: "/Blogs/TheoryBlogs/Blog6.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog6/Blog6-Preview-Image.jpg",
            alt: "Photo of laptop on a white desk with a black notebook next to it",
            imageTitle: "A laptop next to a notebook"},
        blogType: "Theory",
        blogDescription: "In this blog post, I take a step back and look at one of the most important milestones in the webs history - the establishment of web 2.0",
        blogAuthor: "Michael Parkin",
        blogDate: "19 March 2021"
    },
    {title: "The Impact of the Dot Com Bubble on the Web", blogLocation: "/Blogs/TheoryBlogs/Blog5.html",
        blogImagePreview: {
            src: "/Images/TheoryBlogs/Blog5/Blog5-Preview-Image.jpg",
            alt: "A person drawing wireframes on a piece of paper",
            imageTitle: "A person drawing wireframes for their app"},
        blogType: "Theory",
        blogDescription: "In this blog post I cover the Dot Com bubble and its importance in Internet history",
        blogAuthor: "Michael Parkin",
        blogDate: "19 March 2021"
    },
    {title: "Original Website Wireframes", blogLocation: "/Blogs/WebDevBlogs/Blog4.html",
        blogImagePreview: {
            src: "/Images/WebDevelopmentImages/Blog4-Preview-Image.jpg",
            alt: "A photo of an iPad on a table, showing an example of a wireframe sketch",
            imageTitle: "An iPad on a table showing a wireframe"},
        blogType: "Website Development",
        blogDescription: "In this blog post I show all my original low-fidelty wireframes",
        blogAuthor: "Michael Parkin",
        blogDate: "16 March 2021"
    },
    {title: "Something New", blogLocation: "/Blogs/CreativeBlogs/Blog3.html",
        blogImagePreview: {
            src: "/Images/CreativeImages/Blog3/Blog3-Preview-Image.jpg",
            alt: "A RED camera on the ground with a blurred background",
            imageTitle: "A RED Camera"},
        blogType: "Creative",
        blogDescription: "So it's been a while, but in this post I'll explain where I've been and some exciting projects on the horizon",
        blogAuthor: "Jake Sky",
        blogDate: "15 March 2021"
    },
    {title: "Jake Sky Character Description", blogLocation: "/Blogs/CharacterDevBlogs/Blog2.html",
        blogImagePreview: {
            src: "/Images/CharacterDevBlogs/Blog2-Preview-Image.jpg",
            alt: "A photo of a man holding a camera, covering his face, with the background blurred",
            imageTitle: "A man holding a camera"},
        blogType: "Character Development",
        blogDescription: "In this character development blog post I give a description of my fictional character Jake Sky",
        blogAuthor: "Michael Parkin",
        blogDate: "12 March 2021"
    },
    {title: "The Library of Babel and the Internet", blogLocation: "/Blogs/TheoryBlogs/Blog1.html",
    blogImagePreview: {
        src: "/Images/TheoryBlogs/Blog1/Blog1-Preview-Image.jpg",
        alt: "A messy, yet organised, book shelf",
        imageTitle: "A bookshelf in a library"},
    blogType: "Theory",
    blogDescription: "In this blog post I look at Jorges text The Library of Babel and relate its concepts to the Internet",
    blogAuthor: "Michael Parkin",
    blogDate: "12 March 2021"
}
]

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

        if (window.location.pathname === "/WSOA3028A_1894979/Blogs/AllBlogsP1.html")
        {
            allBlogs = true;
        }
        else if (window.location.pathname === "/WSOA3028A_1894979/Blogs/TheoryBlogsP1.html")
        {
            blogType = "Theory";
        }
        else if (window.location.pathname === "/WSOA3028A_1894979/Blogs/CreativeBlogsP1.html")
        {
            blogType = "Creative";
        }
        else if (window.location.pathname === "/WSOA3028A_1894979/Blogs/CharacterDevBlogsP1.html")
        {
            blogType = "Character Development";
        }
        else if (window.location.pathname === "/WSOA3028A_1894979/Blogs/WebDevBlogsP1.html")
        {
            blogType = "Website Development";
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

            if (blogItems[i].blogType === "Theory")
            {
                headerP.className = "theory-blog";
            }
            else if (blogItems[i].blogType === "Creative")
            {
                headerP.className = "creative-blog";
            }
            else if (blogItems[i].blogType === "Character Development")
            {
                headerP.className = "character-blog";
            }
            else if (blogItems[i].blogType === "Website Development")
            {
                headerP.className = "website-blog";
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

document.addEventListener('DOMContentLoaded', () => initialiseBlogs());
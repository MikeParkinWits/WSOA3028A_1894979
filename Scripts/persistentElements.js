const menuOptions = [
    {title: "Portfolio", link: "/WSOA3028A_1894979/PortfolioPage/PortfolioMainPage.html"},
    {title: "Blog", link: "/WSOA3028A_1894979/Blogs/AllBlogsP1.html"},
    {title: "About Me", link: "/WSOA3028A_1894979/AboutPage/AboutMePage.html"},
    {title: "Contact Me", link: "/WSOA3028A_1894979/ContactPage/ContactMePage.html"}
]

const socialMediaLinks = [
    {title: "Instagram Logo", link: "https://www.instagram.com/jakeskyphotography/", image: "/WSOA3028A_1894979/Images/SocialMedia/instagram.png"},
    {title: "Facebook Logo", link: "https://www.facebook.com/JakeSkyPhotography/", image: "/WSOA3028A_1894979/Images/SocialMedia/facebook.png"},
    {title: "Twitter Logo", link: "https://twitter.com/JakeSkyPhotos", image: "/WSOA3028A_1894979/Images/SocialMedia/twitter.png"},
    {title: "Email Logo", link: "mailto:JakeSkyPhotography@gmail.com", image: "/WSOA3028A_1894979/Images/SocialMedia/email_square.png"}
]

const initialiseMenuLogo = (ul) => {
    const li = document.createElement("li");
    li.className = "logo";
    const link = document.createElement("a");
    link.href = "/WSOA3028A_1894979/index.html";
    const image = document.createElement("img");
    image.src = "/WSOA3028A_1894979/Images/Logo.png";
    image.width = 120.3;
    image.height = 58;
    image.alt = "Jake Sky Logo";
    link.appendChild(image);

    li.appendChild(link);

    ul.appendChild(li);
}

const HamburgerMenu = (hamburger) => {
    const navItems = document.querySelectorAll(".nav-items a");

    hamburger.addEventListener('click', () => {
        for (let i = 0; i< navItems.length; i++){
            navItems[i].classList.toggle("active");
        }
        
    }

    );
}

const initialiseMenu = () =>{

    const nav = document.querySelector(".navbar");

    const ul = document.createElement("ul");

    initialiseMenuLogo(ul);

    
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hamburger-button";

    const buttonImg = document.createElement("img");
    buttonImg.src = "/WSOA3028A_1894979/Images/menu_hamburger.png";
    buttonImg.width = 20;
    buttonImg.height = 14;
    buttonImg.alt = "Hamburger Menu";

    button.appendChild(buttonImg);


    const hamli = document.createElement("li");

    hamli.appendChild(button);

    ul.appendChild(hamli);

    for (let option of menuOptions){
        const li = document.createElement("li");
        li.className = "nav-items";
        const link = document.createElement("a");
        link.innerText = option.title;
        link.href = option.link;

        li.appendChild(link);

        ul.appendChild(li);
    }

    nav.appendChild(ul);

    HamburgerMenu(button);

};



const initialiseFooter = () =>{
    const footer = document.querySelector(".main-footer");

    const p = document.createElement("p");
    p.className = "p-name";
    p.innerText = "Jake Sky";

    footer.appendChild(p);
    

    const ulSocialMedia = document.createElement("ul");
    
    for (let socialMedia of socialMediaLinks){
        const liSocialMedia = document.createElement("li");
        liSocialMedia.className = "footer-social-media-item";
        const linkSocialMedia = document.createElement("a");
        const image = document.createElement("img");
        image.src = socialMedia.image;
        image.width = 20;
        image.height = 20;
        image.alt = socialMedia.title;
        linkSocialMedia.target = "_blank";
        linkSocialMedia.appendChild(image);

        linkSocialMedia.href = socialMedia.link;


        liSocialMedia.appendChild(linkSocialMedia);

        ulSocialMedia.appendChild(liSocialMedia);
    }

    footer.appendChild(ulSocialMedia);
    

    const ulRef = document.createElement("ul");
    const liRef = document.createElement("li");

    const linkRef = document.createElement("a");
    linkRef.innerText = "References"
    linkRef.href = "/WSOA3028A_1894979/ReferencePage/References.html";

    liRef.appendChild(linkRef);
    ulRef.appendChild(liRef);

    footer.appendChild(ulRef);
};

const scrollToTopButton = document.querySelector(".back-to-top-link");

window.onscroll = function() {
    scrollFunction()
};


const scrollFunction = () => {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
};


window.addEventListener("scroll", scrollFunction);

const scrollToTop = () =>{

    const distanceFromTop = document.documentElement.scrollTop ||
    document.body.scrollTop;

    if (distanceFromTop > 0){
        window.requestAnimationFrame(scrollToTop);

        window.scrollTo(0, distanceFromTop - distanceFromTop/10);
    }

};

scrollToTopButton.onclick = function(scroll){
    scroll.preventDefault();
    scrollToTop();
}

let blogs;

if (document.querySelector(".blog-nav-buttons")){

    fetch("/WSOA3028A_1894979/Scripts/blogItems.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        //console.log(data);
        blogs = data;

        blogs.reverse();

        BlogNavButtons();
    })
    .catch(e => {
        console.log(e);
    });
}


const BlogNavButtons = () => {
    let path = window.location.pathname;
    let blogNum = path.substring(path.lastIndexOf('/') + 5);
    blogNum = parseInt(blogNum.substring(0, blogNum.lastIndexOf('.')));

    console.log(blogs[0]);

    const blogNavButtons = document.querySelector(".blog-nav-buttons");
    
    let blogExtension;

    const BlogExtension = (modifier) => {
        switch (blogs[blogNum - modifier].blogType){
            case "Theory":
                blogExtension = "../TheoryBlogs/Blog";
                break;
            case "Creative":
                blogExtension = "../CreativeBlogs/Blog";
                break;
            case "Character Development":
                blogExtension = "../CharacterDevBlogs/Blog";
                break;
            case "Website Development":
                blogExtension = "../WebDevBlogs/Blog";
                break;

        }
    }


    if (blogNum > 1){

        BlogExtension(2);

        const buttonAnchor = document.createElement("a");
        buttonAnchor.className = "button";
        buttonAnchor.href = blogExtension + (blogNum - 1) + ".html";
        buttonAnchor.innerText = "Previous Blog";
        blogNavButtons.appendChild(buttonAnchor);
    }

    if (blogNum < blogs.length){

        BlogExtension(0);

        const buttonAnchor = document.createElement("a");
        buttonAnchor.className = "button";
        buttonAnchor.href = blogExtension + (blogNum + 1) + ".html";
        buttonAnchor.innerText = "Next Blog";
        blogNavButtons.appendChild(buttonAnchor);
    }

}

document.addEventListener("DOMContentLoaded", () => initialiseMenu(), initialiseFooter(), scrollFunction());
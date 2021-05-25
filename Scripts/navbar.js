const menuOptions = [
    {title: 'Contact Me', link: '/WSOA3028A_1894979/ContactPage/ContactMePage.html'},
    {title: 'About Me', link: '/WSOA3028A_1894979/AboutPage/AboutMePage.html'},
    {title: 'Blog', link: '/WSOA3028A_1894979/Blogs/AllBlogsP1.html'},
    {title: 'Portfolio', link: '/WSOA3028A_1894979/PortfolioPage/PortfolioMainPage.html'}
]

const socialMediaLinks = [
    {title: 'Instagram Logo', link: 'https://www.instagram.com/jakeskyphotography/', image: '/WSOA3028A_1894979/Images/SocialMedia/instagram.png'},
    {title: 'Facebook Logo', link: 'https://www.facebook.com/JakeSkyPhotography/', image: '/WSOA3028A_1894979/Images/SocialMedia/facebook.png'},
    {title: 'Twitter Logo', link: 'https://twitter.com/JakeSkyPhotos', image: '/WSOA3028A_1894979/Images/SocialMedia/twitter.png'},
    {title: 'Email Logo', link: 'mailto:JakeSkyPhotography@gmail.com', image: '/WSOA3028A_1894979/Images/SocialMedia/email.png'}
]

const initialiseMenuLogo = (ul) => {
    const li = document.createElement('li');
    li.className = "logo";
    const link = document.createElement('a');
    link.href = '/WSOA3028A_1894979/index.html';
    const image = document.createElement('img');
    image.src = '/WSOA3028A_1894979/Images/Logo.png';
    image.width = 125;
    image.alt = 'Jake Sky Logo';
    link.appendChild(image);

    li.appendChild(link);

    ul.appendChild(li);
}

const initialiseMenu = () =>{
    const nav = document.querySelector('.navbar');

    const ul = document.createElement('ul');

    initialiseMenuLogo(ul);

    for (let option of menuOptions){
        const li = document.createElement('li');
        li.className = "navItems";
        const link = document.createElement('a');
        link.innerText = option.title;
        link.href = option.link;

        li.appendChild(link);

        ul.appendChild(li);
    }

    nav.appendChild(ul);
};

const initialiseFooter = () =>{
    const footer = document.querySelector('.footer');

    const p = document.createElement('p');
    p.className = "p-name";
    p.innerText = "Jake Sky";

    footer.appendChild(p);
    

    const ulSocialMedia = document.createElement('ul');
    
    for (let socialMedia of socialMediaLinks){
        const liSocialMedia = document.createElement('li');
        liSocialMedia.className = "socialMediaItem";
        const linkSocialMedia = document.createElement('a');
        const image = document.createElement('img');
        image.src = socialMedia.image;
        image.width = 20;
        image.height = 20;
        image.alt = socialMedia.title;
        linkSocialMedia.target = '_blank';
        linkSocialMedia.appendChild(image);

        linkSocialMedia.href = socialMedia.link;


        liSocialMedia.appendChild(linkSocialMedia);

        ulSocialMedia.appendChild(liSocialMedia);
    }

    footer.appendChild(ulSocialMedia);
    

    const ulRef = document.createElement('ul');
    const liRef = document.createElement('il');
    liRef.className = "referenceItem";

    const linkRef = document.createElement('a');
    linkRef.innerText = 'References'
    linkRef.href = '/WSOA3028A_1894979/ReferencePage/References.html';

    liRef.appendChild(linkRef);
    ulRef.appendChild(liRef);

    footer.appendChild(ulRef);
};



document.addEventListener('DOMContentLoaded', () => initialiseMenu(), initialiseFooter());

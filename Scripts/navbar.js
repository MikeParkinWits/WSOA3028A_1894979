const menuOptions = [
    {title: 'Contact Me', link: '/WSOA3028A_1894979/ContactPage/ContactMePage.html'},
    {title: 'About Me', link: '/WSOA3028A_1894979/AboutPage/AboutMePage.html'},
    {title: 'Blog', link: '/WSOA3028A_1894979/Blogs/AllBlogsP1.html'},
    {title: 'Portfolio', link: '/WSOA3028A_1894979/PortfolioPage/PortfolioMainPage.html'}




]

const initialiseMenuLogo = (ul) => {
    const li = document.createElement('li');
    li.className = "logo"
    const link = document.createElement('a');
    link.href = '/WSOA3028A_1894979/index.html';
    const image = document.createElement('img');
    image.src = '/Images/Logo.png';
    image.width = 150;
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
        li.className = "navItems"
        const link = document.createElement('a');
        link.innerText = option.title;
        link.href = option.link;

        li.appendChild(link);

        ul.appendChild(li);
    }

    nav.appendChild(ul);
};



document.addEventListener('DOMContentLoaded', () => initialiseMenu());

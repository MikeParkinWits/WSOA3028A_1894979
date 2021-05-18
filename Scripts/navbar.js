const menuOptions = [
    {title: 'Portfolio', link: '/WSOA3028A_1894979/PortfolioPage/PortfolioMainPage.html'},
    {title: 'Blog', link: '/WSOA3028A_1894979/Blogs/AllBlogsP1.html'},
    {title: 'About Me', link: '/WSOA3028A_1894979/AboutPage/AboutMePage.html'},
    {title: 'Contact Me', link: '/WSOA3028A_1894979/ContactPage/ContactMePage.html'}

]

const initialiseMenuLogo = (ul) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '/WSOA3028A_1894979/index.html';
    const image = document.createElement('img');
    image.src = '/WSOA3028A_1894979/Images/Logo.png';
    image.width = 200;
    image.alt = 'Jake Sky Logo';
    link.appendChild(image);

    li.appendChild(link);

    ul.appendChild(li);
}

const initialiseMenu = () =>{
    const nav = document.querySelector('.header-nav');

    const ul = document.createElement('ul');

    initialiseMenuLogo(ul);

    for (let option of menuOptions){
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = option.title;
        link.href = option.link;

        li.appendChild(link);

        ul.appendChild(li);
    }

    nav.appendChild(ul);
};



document.addEventListener('DOMContentLoaded', () => initialiseMenu());

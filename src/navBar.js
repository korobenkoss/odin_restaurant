export default function() {
    const navBar = document.createElement('nav');
    navBar.classList.add('menu');

    const links = document.createElement('div');
    links.classList.add('tabs');
    const tabNames = ['Home', 'Menu', 'About'];

    tabNames.forEach((tab, index) => {
        const button = document.createElement('button');
        button.classList.add('tabLink');

        if(index === 0) {
            button.id = 'defaultOpen';
        }

        button.textContent = tab;
        button.addEventListener('click', (e) => openTab(e, tab))

        links.appendChild(button);
    });

    function openTab(event, tabName) {
        let tabcontent, tablinks;

        tabcontent = document.querySelectorAll('.tabcontent');

        for(let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.querySelectorAll('.tabLink');

        for(let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].classList.remove("active");
        }

        document.getElementById(tabName).style.display = "block";
        event.target.classList.add('active');
    }

    // links.innerHTML = topMenu;
    navBar.appendChild(links);


    return navBar;
}


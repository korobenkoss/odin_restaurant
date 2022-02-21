export default function() {
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    // const tabNames = ['Home', 'Menu', 'About'];

    ['Home', 'Menu', 'About'].forEach((tab, index) => {
        const button = document.createElement('button');
        button.classList.add('tablink');

        if(index === 0) {
            button.id = 'defaultOpen';
        }

        button.textContent = tab;
        button.addEventListener('click', (e) => openTab(e, tab))

        tabs.appendChild(button);
    });

    function openTab(event, tabName) {

        let tabcontent = document.querySelectorAll('.tabcontent');

        // for(let i = 0; i < tabcontent.length; i++) {
        //     tabcontent[i].style.display = "none";
        // }
        for(let tc of tabcontent){
            tc.style.display = 'none';
        }

        let tablinks = document.querySelectorAll('.tablink');

        // for(let i = 0; i < tablinks.length; i++) {
        //     tablinks[i].className = tablinks[i].classList.remove("active");
        // }
        for(let tl of tablinks) {
            tl.classList.remove('active')
        }

        document.getElementById(tabName).style.display = "block";
        event.target.classList.add('active');
    }

    return tabs;
}
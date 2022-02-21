import homeTab from "./homeTab";
import menuTab from "./menuTab";
import aboutTab from "./aboutTab";

export default function() {
    const main = document.createElement('main');
    main.classList.add('main');

    main.appendChild(homeTab());
    main.appendChild(menuTab());
    main.appendChild(aboutTab());

    return main;
}
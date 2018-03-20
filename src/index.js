window.highlight = (element) => {
    element.style.background = 'black';
    element.style.color = 'white';
}

window.h = window.highlight;

window.toggleClass = (element, className) => {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

window.setPlayersStyle = () => {
    const players = document.querySelectorAll('li[data-type="player"]');
    const playersArr = Array.from(players);
    playersArr.forEach((el) => {
        el.style.background = 'green';
        el.style.color = 'white';
    });
}

window.setAliensStyle = () => {
    const aliens = document.querySelectorAll('li[data-type="alien"]');
    const aliensArr = Array.from(aliens);
    aliensArr.forEach((el) => {
        el.style.background = 'orange';
        el.style.color = 'red';
    });
}

window.setAll = () => {
    /*const players = document.querySelectorAll('li[data-type="player"]');
    const playersArr = Array.from(players);
    const aliens = document.querySelectorAll('li[data-type="alien"]');
    const aliensArr = Array.from(aliens);
    playersArr.forEach((el) => {
        el.style.background = 'green';
        el.style.color = 'white';
    });
    aliensArr.forEach((el) => {
        el.style.background = 'orange';
        el.style.color = 'red';
    }); */
    window.setPlayersStyle();
    window.setAliensStyle();
}

window.setWantedBgColor = (type, background) => {
    const elements = document.querySelectorAll(`li[data-type='${type}']`);
    // *const elements = document.querySelectorAll(`li[data-type="' + type +'"]`);
    const elementsArr = Array.from(elements);
    elementsArr.forEach((el) => {
        el.style.background = background;
    });
}

window.setAllBgColors = () => {
    window.setWantedBgColor('player', 'blue');
    window.setWantedBgColor('alien', 'green');
    window.setWantedBgColor('predator', 'orange');
    window.setWantedBgColor('other', 'red');
}


cloneHeader = (amount) => {
    body = document.querySelector('body');
    header = document.querySelector('h1');
    for (let i = 0; i < amount; i++) {
        body.insertBefore(header.cloneNode(true), header);
        body.append(header.cloneNode(true));
    }
}
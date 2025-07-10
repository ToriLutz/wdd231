

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create card container
        const card = document.createElement('section');

        // Create elements for each piece of data
        const name = document.createElement('h3');
        name.textContent = prophet.name;

        const lastname = document.createElement('h3');
        lastname.textContent = prophet.lastname;

        const birthdate = document.createElement('p');
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

        const death = document.createElement('p');
        death.textContent = `Death: ${prophet.death}`;

        const order = document.createElement('p');
        order.textContent = `Order: ${prophet.order}`;

        const birthplace = document.createElement('p');
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

        const numofchildren = document.createElement('p');
        numofchildren.textContent = `Number of Children: ${prophet.numofchildren}`;

        const imageurl = document.createElement('img');
        imageurl.setAttribute('src', prophet.imageurl);
        imageurl.setAttribute('alt', `Portrait of ${prophet.fullName}`);
        imageurl.setAttribute('loading', 'lazy');
        imageurl.setAttribute('width', '340');
        imageurl.setAttribute('height', '440');

        // Append elements to the card
        card.appendChild(name);
        card.appendChild(lastname);
        card.appendChild(birthdate);
        card.appendChild(death);
        card.appendChild(order);
        card.appendChild(birthplace);
        card.appendChild(numofchildren);
        card.appendChild(imageurl);

        // Append card to the container
        cards.appendChild(card);
    });
}
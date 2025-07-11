const url = "https://raw.githubusercontent.com/ToriLutz/wdd231/main/chamber/scripts/data/members.json";
const cards = document.getElementById('cards');

async function getBusinessData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayBusinesses(data); // assuming data is an array
    } catch (error) {
        console.error('Error fetching data:', error);
        cards.innerHTML = "<p>Failed to load business data.</p>";
    }
}

getBusinessData();

const displayBusinesses = (businesses) => {
    businesses.forEach(business => {
        const card = document.createElement('section');

        const name = document.createElement('h3');
        name.textContent = business.name;

        const membership = document.createElement('p');
        membership.textContent = `Membership Level: ${business.membership_level}`;

        const industry = document.createElement('p');
        industry.textContent = `Industry: ${business.industry}`;

        const address = document.createElement('p');
        address.textContent = `Address: ${business.address}`;

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = `Phone: ${business.phone_number}`;

        const websiteLink = document.createElement('a');
        websiteLink.href = business.website_url;
        websiteLink.textContent = business.website_url;
        websiteLink.target = "_blank";

        const email = document.createElement('p');
        email.textContent = `Email: ${business.contact_email}`;

        const imageurl = document.createElement('img');
        imageurl.setAttribute('src', business.image_file);
        imageurl.setAttribute('alt', `Image of ${business.name}`);
        imageurl.setAttribute('loading', 'lazy');
        imageurl.setAttribute('width', '340');
        imageurl.setAttribute('height', '440');

       
        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(industry);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteLink);
        card.appendChild(email);
        card.appendChild(imageurl);

        
        cards.appendChild(card);
    });
}
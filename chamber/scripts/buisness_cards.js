const url = "https://raw.githubusercontent.com/ToriLutz/wdd231/main/chamber/scripts/data/members.json";
const cards = document.getElementById('cards');
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

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
  businesses.forEach((business) => {

    
    const card = document.createElement("div");
    card.classList.add("business-card", "padding-none", "grid");

    const businessCardHeader = document.createElement("div");
    businessCardHeader.classList.add("business-card-header", "width-100");

    const name = document.createElement("h3");
    name.textContent = business.name;
    name.classList.add("margin-bottom-3", "padding-bottom-0");

    const membership = document.createElement("p");
    membership.textContent = `Membership Level: ${business.membership_level}`;
    membership.classList.add("margin-y-2");

    const industry = document.createElement("p");
    industry.textContent = `Industry: ${business.industry}`;
    industry.classList.add("margin-y-2");

    const businessCardBody = document.createElement("div");
    businessCardBody.classList.add("business-card-body");

    const businessAddressContainer = document.createElement("div");

    const address = document.createElement("p");
    address.textContent = `Address: ${business.address}`;

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = `Phone: ${business.phone_number}`;
    phoneNumber.classList.add("small-margin-bottom", "large-top-margin");
    phoneNumber.classList.remove("big-top-margin");

    const websiteLink = document.createElement("a");
    websiteLink.href = business.website_url;
    websiteLink.textContent = business.website_url;
    websiteLink.target = "_blank";

    const email = document.createElement("p");
    email.textContent = `Email: ${business.contact_email}`;

    const imageurl = document.createElement("img");
    imageurl.setAttribute("src", business.image_file);
    imageurl.setAttribute("alt", `Image of ${business.name}`);
    imageurl.setAttribute("loading", "lazy");
    imageurl.setAttribute("width", "150");
    imageurl.setAttribute("height", "150");

    card.appendChild(businessCardHeader);
    card.appendChild(businessCardBody);
    businessCardHeader.appendChild(name);
    businessCardHeader.appendChild(membership);
    businessCardHeader.appendChild(industry);

    businessCardBody.appendChild(imageurl);
    businessCardBody.appendChild(businessAddressContainer);
    businessAddressContainer.appendChild(address);
    businessAddressContainer.appendChild(phoneNumber);
    businessAddressContainer.appendChild(websiteLink);
    businessAddressContainer.appendChild(email);

    cards.appendChild(card);
    });
}

gridbutton.addEventListener("click", () => {
	
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	cards.classList.add("list");
	cards.classList.remove("grid");
}

const url = "https://raw.githubusercontent.com/ToriLutz/wdd231/main/chamber/scripts/data/members.json";
const membersContainer = document.getElementById('members');


const displayMembers = (members) => {
  
  const filteredMembers = members.filter(member => member.membership_level === 1 || member.membership_level === 2);

  filteredMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("business-card", "padding-none", "grid");

    const businessCardHeader = document.createElement("div");
    businessCardHeader.classList.add("business-card-header", "width-100");

    const name = document.createElement("h3");
    name.textContent = member.name;
    name.classList.add("margin-bottom-3", "padding-bottom-0");

    const membership = document.createElement("p");
    membership.textContent = `Membership Level: ${member.membership_level}`;
    membership.classList.add("margin-y-2");

    const industry = document.createElement("p");
    industry.textContent = `Industry: ${member.industry}`;
    industry.classList.add("margin-y-2");

    const businessCardBody = document.createElement("div");
    businessCardBody.classList.add("business-card-body");

    const businessAddressContainer = document.createElement("div");

    const address = document.createElement("p");
    address.textContent = `Address: ${member.address}`;

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = `Phone: ${member.phone_number}`;
    phoneNumber.classList.add("small-margin-bottom", "large-top-margin");

    const websiteLink = document.createElement("a");
    websiteLink.href = member.website_url;
    websiteLink.textContent = member.website_url;
    websiteLink.target = "_blank";

    const email = document.createElement("p");
    email.textContent = `Email: ${member.contact_email}`;

    const imageurl = document.createElement("img");
    imageurl.setAttribute("src", member.image_file);
    imageurl.setAttribute("alt", `Image of ${member.name}`);
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

    
    membersContainer.appendChild(card);
  });
};

async function getMemberData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data); // Call after defining
  } catch (error) {
    console.error('Error fetching data:', error);
    membersContainer.innerHTML = "<p>Failed to load member data.</p>";
  }
}

getMemberData();

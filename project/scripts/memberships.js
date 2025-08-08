console.log("memberships.js loaded");

const membership = [
    {
        level: "Free Girl",
        Price: "FREE",
        value: 1,
        Benefits: "Access to basic workout videos, Monthly fitness tips and motivational content, Access to public blog articles, Weekly newsletter updates"
    },
    {
        level: "The Golden Chainsaw",
        Price:"$12.99/month",
        value: 2,
        Benefits: 'All benefits of the Free Girl membership, Unlimited access to premium workout plans and videos, Personalized workout and nutrition coaching, Exclusive live classes and webinars, Priority access to new content and challenges, Discount on merchandise and events, One-on-one virtual consultations with fitness experts'

    }
];

document.addEventListener("DOMContentLoaded", () =>{const memberDetails = document.getElementById("memberships-details");
  const container = document.querySelector(".box-modals");
  container.innerHTML = "";

membership.forEach((member) =>{
    const membershipDiv = document.createElement("div");
    membershipDiv.classList.add("membership");
    membershipDiv.setAttribute("member-level", member.level);
    membershipDiv.setAttribute("member-credits", member.value);

    const memberTitle = document.createElement("h3");
    memberTitle.textContent = `${member.level}`;
    membershipDiv.appendChild(memberTitle);

      membershipDiv.addEventListener("click", () => {
      displayCourseDetails(member);
    });

    container.appendChild(membershipDiv);
  });

  function displayCourseDetails(member) {
    if (!memberDetails) return; // Ensure the element exists
    memberDetails.innerHTML = `
      <button id="closeModal">X</button>
      <h2 class = "head-font">${member.level}</h2>
      <h3 class = "head-font">Monthly Membership: ${member.Price}</h3>
      <p class = "body-font">${member.Benefits}</p>
    `;
    memberDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
      memberDetails.close();
    });
  }
});


console.log("memberships.js loaded");
const memberships = [
  {
    level: "Non Profit",
    value: 0,
    Price: '$0',
    description:
      "This membership is for the non profits, it is free and will get you on the directory page ",
  },
  {
    level: "Bronze",
    value: 1,
    Price: '$25',
    description:
      "This membership is the first level and gets you on the directory page and access to special events.",
  },
  {
    level: "Silver",
    value: 2,
    Price: '$50',
    description:
      "This membership is the first level and gets you on the directory page and may get you on the home page access to special events and advertising",
  },
  {
    level: "Gold",
    value: 3,
    Price: '$100',
    description:
      "This membership is the first level and gets you on the directory page and WILL get you on the home page access special events, training, advertising",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const courseDetails = document.getElementById("memberships-details");
  const container = document.querySelector(".box-modals");
  container.innerHTML = ""; // Clear previous entries

  // Display all memberships
  memberships.forEach((member) => {
    const membershipDiv = document.createElement("div");
    membershipDiv.classList.add("membership");
    membershipDiv.setAttribute("member-level", member.level);
    membershipDiv.setAttribute("member-credits", member.value);

    const courseTitle = document.createElement("h3");
    courseTitle.textContent = `${member.level}`;
    membershipDiv.appendChild(courseTitle);

    // Show details on click
    membershipDiv.addEventListener("click", () => {
      displayCourseDetails(member);
    });

    container.appendChild(membershipDiv);
  });

  function displayCourseDetails(member) {
    if (!courseDetails) return; // Ensure the element exists
    courseDetails.innerHTML = `
      <button id="closeModal">X</button>
      <h2>${member.level}</h2>
      <h3>Monthly Membership: ${member.Price}</h3>
      <p>${member.description}</p>
    `;
    courseDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
      courseDetails.close();
    });
  }
});
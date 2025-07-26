console.log("memberships.js loaded");
const memberships = [
  {
    level: "Non Profit",
    value: 0,
    description:
      "This membership is for the non profits, it is free and will get you on the directory page ",
  },
  {
    level: "Bronze",
    value: 1,
    description:
      "This membership is the first level and gets you on the directory page.",
  },
  {
    level: "Silver",
    value: 2,
    description:
      "This membership is the first level and gets you on the directory page and may get you on the home page",
  },
  {
    level: "Gold",
    value: 3,
    description:
      "This membership is the first level and gets you on the directory page and WILL get you on the home page",
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
    courseTitle.textContent = `${member.level} ${member.value}`;
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
      <h2>${member.level} ${member.value}</h2>
      <p>${member.description}</p>
    `;
    courseDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
      courseDetails.close();
    });
  }
});
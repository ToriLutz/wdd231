const currentYear = new Date().getFullYear();
let year = document.getElementById("currentYear");
year.innerHTML = currentYear;
const modifiedYear = document.lastModified;
document.getElementById('lastModified').innerText = modifiedYear;

let templePics = document.querySelector('#temples');
const allLink = document.querySelector('#all');
const wddLink = document.querySelector('#wdd');
const cseLink = document.querySelector('#cse');



const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function clearContainer() {
  document.querySelector(".container").innerHTML = "";
}

function displayCards(courseArray) {
  const display = document.querySelector(".container");
  coursesArray.forEach((course) => {
    display.appendChild(makeCourseCard(course));
  });
}

function initialCourseDisplay() {
  clearContainer();
  displayCards(courses);
}


allLink.addEventListener("click", () => {
  initialCourseDisplay();
});

wddLink.addEventListener("click", () => {
  let wdd = courses.filter((course) => {
    const commaIndex = course.dedicated.indexOf(",");
    const dedicated = course.dedicated.substring(0, commaIndex);
    return Number(dedicated) < 1900;
  });
  clearContainer();
  displayCards(wdd);
});

cseLink.addEventListener("click", () => {
  let cse = courses.filter((course) => {
    const commaIndex = course.dedicated.indexOf(",");
    const dedicated = course.dedicated.substring(0, commaIndex);
    return Number(dedicated) > 2000;
  });
  clearContainer();
  displayCards(cseLinks);
});


function makeCourseCard(course) {
  let card = document.createElement(`section`);
  let subject = document.createElement(`h3`);
  let title = document.createElement(`p`);
  let credits = document.createElement(`p`);
  let certificate = document.createElement(`p`);
  let description = document.createElement(`p`);
  let technology = document.createElement('p');
  let completed = document.createElement(Boolean);
 

  subject.textContent = course.courseName;
  title.innerHTML = `<span class = "label"><span> ${course.title}`;
  credits.innerHTML = `<span class = "label"><span> ${course.credits}`;
  certificate.innerHTML = `<span class = "label"><span> ${course.certificate}`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.templeName} temple`);
  img.setAttribute("loading", "lazy");

  card.appendChild(title);
  card.appendChild(credits);
  card.appendChild(certificate);
  card.appendChild(description);
  card.appendChild(technology);
  card.appendChild(completed);

  return card;
}

initialTempleDisplay();
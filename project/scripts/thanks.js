const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('fname'));

document.querySelector('#results').innerHTML = `
  <h3 class = "head-font">Thank you ${myInfo.get('fname')} ${myInfo.get('lname')}</h3>
 <p class = "body-font"> we will reach out via your number: ${myInfo.get('phone')}</p>
  <p class = "body-font">And email: ${myInfo.get('email')} to confirm your details.</p>
  <p class = "body-font">${myInfo.get('formLoadTimestamp')}</p>
`;
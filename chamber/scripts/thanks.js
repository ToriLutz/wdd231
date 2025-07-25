const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('fname'));

document.querySelector('#results').innerHTML = `
  <p>Thank you ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
  <p>We will be in contact to discuss details on your ${myInfo.get('membership')}</p>
  <p>For your business ${myInfo.get('bname')}, we will reach out via your number: ${myInfo.get('phone')}</p>
  <p>And email: ${myInfo.get('email')} to confirm your details.</p>
`;
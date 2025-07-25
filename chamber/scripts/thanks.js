const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));


document.querySelector('#results'.innerHTML = `<p>Thank you
    ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p> we will be in contact to discuss details on your ${myInfo.get('membership')}</p>
    <p> for your business ${myInfo.get('business')} we will reach out via your number: ${myInfo.get('phone')}</p>
    <p> and Email: ${myInfo.get('email')} to confirm your details`)

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));


document.querySelector('#results'.innerHTMLE = `<p>Appointment for
    ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>${myInfo.get('ordinance')}</p>
    <p> on ${myInfo.get('date')} in the ${myInfo.get('location')} temple
    <p> Your Number : ${myInfo.get('phone')} </p> 
    <p> Your Email: ${myInfo.get('email')}</p>`)




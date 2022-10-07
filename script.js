const form = document.getElementById('myFormToRegister');
const firstname = document.getElementById('firstName');
const secondname = document.getElementById('secondName');
const telephone = document.getElementById('telephone');
const NIN = document.getElementById('uniqueNumber');
const DOB = document.getElementById('DOB');
const location = document.getElementById('location');
const residence = document.getElementById('residence');
const mobile = document.getElementById('mobile');
const supervise = document.getElementById('supervise');
const regulate = document.getElementById('regulate');
const support = document.getElementById('support');

form.addEventListener('submit', e => {
    e.preventDefault()

    validateInputes()
});

function validateInputes(){
    if(firstname.value.trim() === ''){
        firstname.style.border = '2px solid red'
    }else{
        firstname.style.border = '2px solod green'
    }
}












const form=document.getElementById('form');
const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2 =document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstname=firstname.value.trim();
    const lastname=lastname.value.trim();
    const emailvalue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if(usernameValue === '') {
        setError(firstname, 'first name is required');
    } else {
        setSuccess(firstname);
    }

    if(usernameValue === '') {
        setError(lastname, 'last name is required');
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (passwordValue !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

let sample=document.getElementById("sample")

function No_back(){

    history.back ()
}
No_back();


                     /*or*/
function
preventScrollWheel(event){
    if(typeof event.cancelable!=="boolen"||event.cancelable){
        // the even can be cancel so we do so
        event.preventDefault();
    }else{
        console.warn('the following event could not be canceled');
        console.dir(event);
    }
}

document.addEventListener("Wheel")
preventScrollWheel
                      
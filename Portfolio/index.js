// let word=parseInt(prompt('enter a number:'));

//     f_name=prompt("enter your first name");
//     i_name=prompt("enter your second name");
//     next=prompt("is there anyone else?");
// }while(next=="yes"); 

/*
   prompt();
   isNaN();
   confirm(); ok cancel
   parseInt();
   parseFloat();
*/

// value_holder=confirm("does your name start with a?")
// alert("the answer is"+value_holder)

// value_holder=confirm("does your name start with a?")
// Response=isNaN(value_holder)
// alert("the answer a number?"+ response);

// let value_holder=prompt("enter a value");
// let response=isNaN(value_holder);
// alert("is the answer a number?"+response)

// function Welcome()
// {
    // let name=prompt("enter your name");
    // alert("welcome..."+name);
// }

// Welcome();

// function add(num1,num2)
// {
//     let sum=num1+num1
//     return sum;
// }

// let total=add(9+5);
// function sample(){
//     alert("huraay...!")
// }

// window.setTimeout(sample,3000)

/*creating a clock*/

//time function

// function time()
// {
//     //creating an obiect of date0
//     // let date = new Date();
//     //variables to hold hh,mm,ss 
//     // let hh = date.getHours();
//     // let mm = date.getMinutes();
//     // let ss = date.getSeconds();

//     //add zero (0)infront of any unit number
//     // mm = check(mm);
//     // ss = check(ss);
//     //get the id of the element to hold the time 
//     // document.getElementById("timeHolder").innerHTML = hh + " : " + mm + " : " + ss;
//     // setTimeout(time(), 1000);
// }

//creating the check function
// function check(value)
// {
//     if (value < 10)
//     {
//         value = "0" + value;
//     }
//     return value;
// }








// js validation

// const form=document.getElementById('form');
// const f_name=document.getElementById('f-name');
// const l_name=document.getElementById('l_name');
// const email=document.getElementById('email');
// const password=document.getElementById('password');
// const repassword =document.getElementById('repassword');

// form.addEventListener('submit', e=>{
//     e.preventDefault ();
//     validateInputs();
// });

// const setError = (element, message) =>{
//     const inputcontrol = element.parentElement
//     const errorDisplay=inputcontrol.querySelector('.error');

//     errorDisplay.innerText=message;
//     inputcontrol.classlist.add('error');
//     inputcontrol.classlist.remove('success');

// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// const abc()=>{
    // console.log('hi')
// }
// abc()
// hiZ
// const validateInputs=() => {
//     const f_name=f_name.value.trim();
//     const l_name=l_name.value.trim();
//     const email=email.value.trim();
//     const password=password.value.trim();
//     const repassword=repassword.value.trim();
// }

// if(f_namevalue==='' ){
//     setError(f_name,'f_name is required');
// } else{
//     setSuccess(f_name);
// }

// if(l_namevalue==='' ){
//     setError(l_name,'l_name is required');
// } else{
//     setSuccess(l_name);
// }

// if(emailValue === '') {
//     setError(email, 'Email is required');
// } else if (!isValidEmail(emailValue)) {
//     setError(email, 'Provide a valid email address');
// } else {
//     setSuccess(email);
// }

// if(passwordValue === '') {
//     setError(password, 'Password is required');
// } else if (passwordValue.length < 8 ) {
//     setError(password, 'Password must be at least 8 character.')
// } else {
//     setSuccess(password);
// }

// if(password2Value === '') {
//     setError(repassword, 'Please confirm your password');
// } else if (repasswordValue !== passwordValue) {
//     setError(repassword, "Passwords doesn't match");
// } else {
//     setSuccess(repassword);
// }
// // ;

// const email=prompt("enter your email address")
// if(email.endsWith("@gmail.com")|| email.endsWith("@outlook.com") || email.endsWith("@yahoo.com")){
//     alert("Valid gmail account!");
// }else if(email.endsWith("outlook.com")){
//     alert("Validoutlook account!");
// }else if (email.endsWith("@yaahoo.com")){
//     alert("Valid yahoo account!");
// }else{
//     alert("invalid email address.Please enter valid gmail,outlook or yahoo account");
// }
// /*function(name)*/
// const Name = prompt("enter your name");
// if(/^[a-zA-Z]+$/.test(Name)){
//     alert("valid name!");
// }else{
//     alert("invalid name.Please enter a name without special character.");
// }
// /*password*/
// const password=prompt("Enter a password")
// const reEnterpassword=("Re-enter the password");

// if(password===reEnterpassword){
//     alert("Password match!")
// }else{
//     alert("password do not match.Please try again.");
// }

// function submitform(){
//     window.location.href="login details.html";
// }


// let sample=document.getElementById("sample")

// function No_back(){

//     history.back ()


// function preventBack()
// {
//     window.history.forward();
// }
// setTimeout("preventBack()",0);
// window.onunload=function(){null};






 setCookie = (cName,cValue,daysToExpire)=>{
    let date=new Date();
    date.setTime(date.getTime()+(daysToExpire *24*60*60*1000));
    const expires="expires="+date.toUTCString();
    document.cookie=cName+"="+cValue+";"+expires+"; path=/";
}

 getCookie =(cName) =>{
    const name=cName+"=";
    const cDecoded=decodeURIComponent(document.cookie);
    const cArr=cDecoded.split("; ")
    let value;
    cArr.forEach(val=>{
        if(val.indexOf(name) ===0)value=val.substring(name.length);

    })
    return value;
}

document.querySelector("#cookies-btn").addEventListener("click",()=>{
    document.querySelector("#cookies",).style.display="none";
    setCookie("cookies", true,30);
})
cookieMessage=()=>{
    if(!getCookie("cookies"))
    document.querySelector("#cookies").style.display="block";
}

window.addEventListener("load",cookieMessage);



//get the user browsername and function
let browserName = navigator.appName;
let browserVersion = navigator.appVersion;
//the os
 let OSName="known OS";

 if(navigator.userAgent.indexOf("Mac") !=-1)OSName="Macintouch";
 if(navigator.userAgent.indexOf("like mac") !=-1)OSName="ios";
 if(navigator.userAgent.indexOf("Linux") !=-1)OSName="Linux";
 if(navigator.userAgent.indexOf("Win") !=-1)OSName="Windows";
 if(navigator.userAgent.indexOf("Android") !=-1)OSName="Android";

 //display the info to the user
 alert("Hi There! welcome to Ricky's collection" + browser + " version" + browserVersion + "  on" + OSName + "10...");



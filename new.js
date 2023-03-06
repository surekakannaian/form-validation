const form = document.getElementById('form');
const Fname = document.getElementById('fname');
const Lname = document.getElementById('lname');
const Email = document.getElementById('email');
const Mobile = document.getElementById('mobile-number');
var rbd1 = document.getElementById('rbd1');
var rbd2 = document.getElementById('rbd2');
const address = document.getElementById('address');
var ck1 = document.getElementById('lang1');
var ck2 = document.getElementById('lang2');
var ck3 = document.getElementById('lang3');
var ck4 = document.getElementById('lang4');
const pincode = document.getElementById('pincode');
const district = document.getElementById('district');
const sel = document.getElementById('select');

//call a corresponding functions while input to the input fields
Fname.addEventListener('input', Fnamefun);
Lname.addEventListener('input', Lnamefun);
Email.addEventListener('input', Emailfun);
Mobile.addEventListener('input', Mobilefun);
rbd1.addEventListener('input', Genderfun);
rbd2.addEventListener('input', Genderfun);
address.addEventListener('input', addressfun);
sel.addEventListener('input', statefun);
ck1.addEventListener('input', langfun);
ck2.addEventListener('input', langfun);
ck3.addEventListener('input', langfun);
ck4.addEventListener('input', langfun);
pincode.addEventListener('input', pincodefun);
district.addEventListener('input', districtfun);

//checkinput function execute when the user hit a submit button
function checkinput() {
  //Execution goes to Next function or input only the current function or input is true

  //condition check for firstname
  if (Fnamefun() == false) {
    return false;//again same function execute
  }
  else {
    Lnamefun();//goes to next function(lastname)
  }

  //condition check for lastname
  if (Lnamefun() == false) {
    return false;//again same function execute
  }
  else {
    Emailfun();//goes to next function(Email)
  }

  //condition check for lastname
  if (Emailfun() == false) {
    return false;//again same function execute
  }
  else {
    Mobilefun();//goes to next function(Mobile)
  }

  //check for mobilenumber
  if (Mobilefun() == false) {
    return false;//again same function execute
  }
  else {
    Genderfun();//goes to next function(gender)
  }
  
  //check for gender
  if (Genderfun() == false) {
    return false;//again same function execute
  }
  else {
    addressfun();//goes to next function(address)
  }

  //check for address
  if (addressfun() == false) {
    return false;//again same function execute
  }
  else {
    statefun();//goes to next function(state)
  }
  
  //check for state
  if (statefun() == false) {
    return false;//again same function execute
  }
  else {
    langfun();//goes to next function(language)
  }
  
  //check for language
  if (langfun() == false) {
    return false;//again same function execute
  }
  else {
    pincodefun();//goes to next function(pincode)
  }
  
  //check for pincode
  if (pincodefun() == false) {
    return false;//again same function execute
  }
  else {
    districtfun();//goes to next function(district)
  }
  
  //check for district
  if (districtfun() == false) {
    return false;//again same function execute
  }
  else {
    return true;//inputs are validated at this place ...and inputs will be submitted
  }
}

//function for validate firstname
function Fnamefun() {
  const Fnamevalue = Fname.value.trim();
  localStorage.setItem('firstname', Fnamevalue);
  if (Fnamevalue == '') {
    setError(Fname, 'Fill the field');
    return false;
  }
  else if (!isalpha(Fnamevalue)) {
    setError(Fname, 'Text only allowed');
    return false;
  }
  else if ((Fnamevalue.length < 3) || (Fnamevalue.length > 10)) {
    setError(Fname, 'Name should min 3 and max 10 charecter');
    return false;
  }
  else {
    setSuccess(Fname);
  }
}

//function for validate lastname
function Lnamefun() {
  const Lnamevalue = Lname.value.trim();
  localStorage.setItem('lastname', Lnamevalue);
  if (Lnamevalue != '') {
    if (Lnamevalue.length <= 5) {
      setSuccess(Lname);
    }
    else {
      setError(Lname, 'Last name should have max 5 character');
      return false;
    }
  }
  else {
    setSuccess(Lname);
  }
}

//function for validate email
function Emailfun() {
  const Emailvalue = Email.value.trim();
  localStorage.setItem('email', Emailvalue);
  if (Emailvalue == "") {
    setError(Email, 'Fill the field');
    return false;
  }
  else if (!isEMail(Emailvalue)) {
    setError(Email, 'Enter a valid mail address');
    return false;
  }
  else {
    setSuccess(Email);
  }
}

//function for validate mobilevalue
function Mobilefun() {
  const Mobilevalue = Mobile.value.trim();
  localStorage.setItem('mobile', Mobilevalue);
  if (Mobilevalue == '') {
    setError(Mobile, 'Fill the field');
    return false;
  }
  else if (isNaN(Mobilevalue)) {
    setError(Mobile, 'Numbers only allowed');
    return false;
  }
  else if (Mobilevalue.length < 10 || Mobilevalue.length > 10) {
    setError(Mobile, 'mobile value should be 10 numbers');
    return false;
  }
  else {
    setSuccess(Mobile);
  }
}

//function for validate gender
function Genderfun() {
  var Gender = document.myform.gender.value;
  localStorage.setItem('gender', Gender);
  if (rbd1.checked == true) {
    setSuccess(rbd1);
  }
  else if (rbd2.checked == true) {
    setSuccess(rbd1);
  }
  else {
    setError(rbd1, 'Select gender');
    return false;
  }
}

//function for validate address
function addressfun() {
  const addressValue = address.value.trim();
  localStorage.setItem('adress', addressValue);
  if (addressValue == '') {
    setError(address, 'Fill the field');
    return false;
  }
  else if (!isaddress(addressValue)) {
    setError(address, 'special characters are not allowed');
    return false;
  }
  else {
    setSuccess(address);
  }
}

//function for validate state
function statefun() {
  const select = document.myform.state;
  var state = document.myform.state.value;
  localStorage.setItem('sae', state);
  if (state == '') {
    setError(select, 'select state');
    return false;
  }
  else {
    setSuccess(select);
  }
}

//function for validate language
function langfun() {
  var arr = [];
  var num = 0;
var lang=document.getElementsByName('ck');
for(var i=0;i<lang.length;i++){
if(lang[i].checked){
  arr.push(lang[i].value);
  num++;
}
}
  if (num == 0) {
    setError(ck1, 'select languages you know');
    return false;
  }
  else {
    localStorage.setItem('lang', arr);
    setSuccess(ck1);
  }
}

//function for validate pincode
function pincodefun() {
  const pincodevalue = pincode.value.trim();
  localStorage.setItem('pincode', pincodevalue);
  if (pincodevalue == '') {
    setError(pincode, 'Fill the field');
    return false;
  }
  else if (isNaN(pincodevalue)) {
    setError(pincode, 'letters and space are not allowed');
    return false;
  }
  else if (pincodevalue.length > 6) {
    setError(pincode, 'maximun 6 numbers only allowed');
    return false;
  }
  else {
    setSuccess(pincode);
  }
}

//function for validate district
function districtfun() {
  const districtvalue = district.value.trim();
  localStorage.setItem('district', districtvalue);
  if (districtvalue == '') {
    setError(district, 'Fill the field');
    return false;
  }
  else if (!isalpha(districtvalue)) {
    setError(district, 'numbers not allowed');
    return false;
  }
  else {
    setSuccess(district);

  }

}
// error function
function setError(input, msg) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerHTML = msg;
  input.style.border = '2px solid red';
  small.style.visibility = 'visible';

}
//success function
function setSuccess(input) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  input.style.border = '2px solid green';
  small.style.visibility = 'hidden';
}
function isEMail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isaddress(add) {
  return /^[0-9 a-z A-Z.]+$/.test(add);
}
function isalpha(a) {
  return /^[a-z A-Z]+$/.test(a);
}

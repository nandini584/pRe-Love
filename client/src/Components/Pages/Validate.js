// validate login

import toast from 'react-hot-toast'
   

/****************Profile validation*********************/
export async function ValidateProfile( values ) {
    let errors = emailVerify( {} , values);
    MobileVerify( errors , values );

    return errors;
}


function MobileVerify( errors={} ,values ) {
    if( values.Mobile.toString().length != 10){
        console.log(values.Mobile.toString().length)
        errors.Mobile = toast.error('Please enter a valid Mobile Number...!')
    }else if(/^\d+$/.test(values.Mobile)){
        errors.Mobile = toast.error('Please enter a valid Mobile Number...!')
    }
    return errors;
}
/****************Register validation*********************/
export async function ValidateRegister( values ) {
    let errors = usernameVerify( {} , values);
    passwordVerify( errors , values);
    emailVerify( errors , values);
    
    return errors;
}

function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}

/****************new Password validation*********************/
export async function ValidateReset( values ) {
    let errors = verifyReset( {}, values)
    newPasswordVerify( errors, values)
    return errors;
}

function verifyReset ( errors={}, values ){
    if((values.newPassword!==values.reenteredNewPassword)){
        errors.newPassword =toast.error('The passwords are not matching....!')
    }

    return errors;
}

function newPasswordVerify(error={} , values){
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    if(!values.newPassword){
        error.newPassword = toast.error('Password Required...!');
    }else if(values.newPassword.includes(" ")){
        error.newPassword = toast.error('Password cannot conatain blank spaces....!')
    }else if(values.newPassword.length < 6){
        error.newPassword = toast.error('Password must be of at least 6 charecters...!')
    }else if(!specialChars.test(values.newPassword)){
        error.newPassword = toast.error('Password must have at least one special charecter...!');
    }

    return error;
}

/**************************Validate OTP**************************/
export async function ValidateOTP ( values ) {
    const errors = verifyOTP( {}, values);

    return errors;
}

function verifyOTP( errors={},values ) {
    if(values.OTP != 123456){
        errors.OTP = toast.error( 'Invalid OTP....!')
    }

    return errors;
}

/**********************Login validation***********************************/
export async function ValidateLogin(values) {
    let errors = usernameVerify( {} ,values);
    passwordVerify( errors, values);
    return errors;
}

function passwordVerify(error={} , values){
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    if(!values.password){
        error.password = toast.error('Password Required...!');
    }else if(values.password.includes(" ")){
        error.password = toast.error('Password cannot conatain blank spaces....!')
    }else if(values.password.length < 6){
        error.password = toast.error('Password must be of at least 6 charecters...!')
    }else if(!specialChars.test(values.password)){
        error.password = toast.error('Password must have at least one special charecter...!');
    }

    return error;
}

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}
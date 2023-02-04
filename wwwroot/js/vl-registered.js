﻿
$(document).ready(function () {
    SetInputNumeric('Mobile'); 
    // for form validation
    $('form[id="registeredform"]').validate({
        rules: {
            CustomerName: 'required',
            Email: 'required',
            Mobile: 'required',
            Password: 'required',           
            CaptchaCode: 'required',
        },
        messages: {
            CustomerName: 'Please enter your name !',
            Email: 'Please enter valid email !',
            Mobile: 'Please enter 10 digit valid mobile !',
            Password: 'Enter valid password !',       
            CaptchaCode: 'Enter Captcha Code !',  
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
function refreshCaptcha() {
    $.ajax({
        type: "POST",
        url: "/Login/RefereceCaptcha",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess,
        failure: function (data) {
            alert(data.d);
        }
    });
}
function OnSuccess(data) {
    d = new Date();
    $('#captcha').attr("src", "/UploadFiles/captcha.jpg?" + d.getTime());
}
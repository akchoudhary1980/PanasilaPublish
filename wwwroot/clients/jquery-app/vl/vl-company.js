$(document).ready(function () {    
    // for form validation
    $('form[id="vl-company-form"]').validate({
        rules: {
            CompanyName: 'required',     
            CompanyAddress: 'required',     
        },
        messages: {           
            CompanyName: 'Please enter company name !',
            CompanyAddress: 'Please enter company address !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

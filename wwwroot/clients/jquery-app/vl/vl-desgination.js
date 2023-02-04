$(document).ready(function () {    
    // for form validation
    $('form[id="vl-desgination-form"]').validate({
        rules: {
            DesginationName: 'required',
        },
        messages: {           
            DesginationName: 'Please enter desgination name !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

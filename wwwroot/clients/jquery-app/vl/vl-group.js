$(document).ready(function () {    
    // for form validation
    $('form[id="vl-group-form"]').validate({
        rules: {
            GroupName: 'required',           
        },
        messages: {           
            GroupName: 'Please enter group name !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

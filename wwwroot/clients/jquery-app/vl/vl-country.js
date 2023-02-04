$(document).ready(function () {
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    $('form[id="vl-country-form"]').validate({
        rules: {
            CountryName: 'required',           
        },
        messages: {
            CountryName: 'Please enter country name !',
            
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

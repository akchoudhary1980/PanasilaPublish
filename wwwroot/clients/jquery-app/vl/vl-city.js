$(document).ready(function () {
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    $('form[id="vl-city-form"]').validate({
        rules: {
            CityName: 'required',           
            StateID: { valueNotEquals: "0" },
        },
        messages: {           
            CityName: 'Please enter city name !',
            StateID: 'Please select state name !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

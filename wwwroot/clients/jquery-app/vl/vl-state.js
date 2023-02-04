$(document).ready(function () {    
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");
    // end

    $('form[id="vl-state-form"]').validate({
        rules: {
            StateName: 'required',
            StateType: { valueNotEquals: "0" },
            CountryID: { valueNotEquals: "0" },            
        },
        messages: {           
            StateName: 'Please enter state name !',
            StateType: 'Please select state type !',
            CountryID: 'Please select country name !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

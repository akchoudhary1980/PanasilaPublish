$(document).ready(function () {
    // Default Value
    SetInputNumericIndian('ServiceCharge1');
    SetInputNumericIndian('Charge1');

    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-service-json-form"]').validate({
        rules: {
            ServiceName1: 'required',
            DropCategory1: { valueNotEquals: "-1" },
            DropGroup1: { valueNotEquals: "-1" },
            DropUnit1: { valueNotEquals: "-1" },
            DropGSTSlab1: { valueNotEquals: "-1" }
        },
        messages: {           
            ServiceName1: 'Please enter service name !',
            DropCategory1: { valueNotEquals: "Please select service category !" },
            DropGroup1: { valueNotEquals: "Please select service group !" },
            DropUnit1: { valueNotEquals: "Please select service unit !" },
            DropGSTSlab1: { valueNotEquals: "Please select service GST slab !" },
        },
        submitHandler: function (form) {
            form.submit();            
        }
    });
});


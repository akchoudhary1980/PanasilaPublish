
$(document).ready(function () {
    // Default Value
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-topcompany-form"]').validate({
        rules: {
            CompanyName: 'required',
            
        },
        messages: {           
            CompanyName: 'Please enter company name !',
            
        },
        submitHandler: function (form) {
        }
    });
});


// main picture
function ThumbNail(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#thumb')
                .attr('src', e.target.result)
                .width(300)
                .height(250);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

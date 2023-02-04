
$(document).ready(function () {
    // Default Value
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-gallery-form"]').validate({
        rules: {
            PictureTitle: 'required',
            GalleryCategoryID: { valueNotEquals: "0" },
            
        },
        messages: {           
            PictureTitle: 'Please enter gallery title !',
            GalleryCategoryID: { valueNotEquals: "Please select gallery category !" },
        },
        submitHandler: function (form) {
            form.submit();
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

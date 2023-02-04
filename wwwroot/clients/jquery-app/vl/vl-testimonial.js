$(document).ready(function () {    
    // for form validation
    $('form[id="vl-testimonial-form"]').validate({
        rules: {
            Title: 'required',
            Testimonial: 'required',
            QuoteBy: 'required',
        },
        messages: {           
            Title: 'Please enter testimonial title !',
            Testimonial: 'Please enter testimonial quote !',
            QuoteBy: 'Please enter name of testimonial quote by !',
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
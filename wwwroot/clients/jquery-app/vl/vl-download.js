$(document).ready(function () {        
    $('form[id="vl-slider-form"]').validate({
        rules: {
            SliderTitle: 'required',
        },
        messages: {           
            SliderTitle: 'Please enter slider title !',
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
                .width(400)
                .height(165);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
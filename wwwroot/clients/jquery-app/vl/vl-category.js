$(document).ready(function () {    
    // for form validation
    $('form[id="vl-category-form"]').validate({
        rules: {
            CategoryName: 'required',
        },
        messages: {           
            CategoryName: 'Please enter category name !',
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

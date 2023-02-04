$(document).ready(function () {    
    // for form validation
    $('form[id="vl-gallerycategory-form"]').validate({
        rules: {
            GalleryCategoryName: 'required',
        },
        messages: {           
            GalleryCategoryName: 'Please enter gallery category name!',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

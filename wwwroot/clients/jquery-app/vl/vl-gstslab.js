$(document).ready(function () {
    SetInputNumeric('PercentValue');
    // for form validation
    $('form[id="vl-gstslab-form"]').validate({
        rules: {
            GSTSlabName: 'required',
            PercentValue: 'required'
        },
        messages: {           
            GSTSlabName: 'Please enter GST slab name !',
            PercentValue: 'Please enter GST percent !',
        },
        submitHandler: function (form) {
            form.submit();            
        }
    });
});

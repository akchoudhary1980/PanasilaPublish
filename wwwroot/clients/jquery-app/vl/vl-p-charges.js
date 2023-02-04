$(document).ready(function () {
    $('form[id="vl-p-charges-form"]').validate({
        rules: {
            ChargesID: 'required',
            ChargesName: 'required',
            CCharge: 'required',             
        },
        messages: {
            ChargesID: 'Service required!',
            ChargesName: 'Service required!',
            CCharge: 'Quantity required!',           
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

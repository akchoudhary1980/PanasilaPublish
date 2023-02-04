$(document).ready(function () {        
    $('form[id="vl-unit-form"]').validate({
        rules: {
            UnitName: 'required',           
        },
        messages: {           
            UnitName: 'Please enter unit name !',          
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

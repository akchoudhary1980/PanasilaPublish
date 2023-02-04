$(document).ready(function () {

    SetInputMobile("Mobile"); //set
    SetInputMobile("Whatsup"); // whats up
    GetStateList("State");
    GetCityList("City");

    // for form validation
    $('form[id="vl-vender-form"]').validate({
        rules: {
            VenderName: 'required',
            Mobile: 'required',             
        },
        messages: {           
            VenderName: 'Please enter vender name !',
            Mobile: 'Please enter vender mobile !',            
        },
        submitHandler: function (form) {                    
            form.submit();            
        }
    });
});

function CopyMobile() {    
    if ($('#SameAs').is(':checked') == true) {
        $('#Whatsup').val($('#Mobile').val());
    }
    else {
        $('#Whatsup').val("");
    }
}

GetStateList();
GetSStateList()
GetCityList();
GetSCityList();


$(document).ready(function () {
    SetInputNumeric('Mobile');
    SetInputNumeric('Whatsup');
    SetInputNumeric('SMobile');
    SetInputNumeric('SWhatsup');

    // check box
    $('#isshipping').change(function () {
        if ($(this).is(":checked")) {
            $('#SName').val($('#CustomerName').val());
            $('#SMobile').val($('#Mobile').val());
            $('#SWhatsup').val($('#Whatsup').val());
            $('#SAddress').val($('#Address').val());
            $('#SState').val($('#State').val());
            $('#SCity').val($('#City').val());
            $('#SArea').val($('#Area').val());
            $('#SPinCode').val($('#PinCode').val());
            $('#SEmail').val($('#Email').val());
            $('#SGST').val($('#GST').val());
        }
        else {
            $('#SName').val("");
            $('#SMobile').val("");
            $('#SWhatsup').val("");
            $('#SAddress').val("");
            $('#SState').val("");
            $('#SCity').val("");
            $('#SArea').val("");
            $('#SEmail').val("");
            $('#SGST').val("");
        }
    });



    // for form validation
    $('form[id="deliverydetailsform"]').validate({
        rules: {
            Whatsup: 'required',
            Address: 'required',
            State: 'required',
            City: 'required',
            Area: 'required',
            PinCode: 'required',
            
            SName: 'required',
            SMobile: 'required',
            SWhatsup: 'required',
            SAddress: 'required',
            SState: 'required',
            SCity: 'required',
            SArea: 'required',
            SPinCode: 'required',
            SArea: 'required',
        },
        messages: {
            Whatsup: 'Please enter your whatsup number !',
            Address: 'Please enter your valid address !',
            State: 'Please select your state !',
            City: 'Please select your city !',
            Area: 'Enter your area !',
            PinCode: 'Enter your pin code !',
            SName: 'Enter name of consigne !',
            SMobile: 'Please enter consigne mobile number !',
            SWhatsup: 'Please enter consigne whatsup number !',
            SAddress: 'Please enter consigne valid address !',
            SState: 'Please select consigne state !',
            SCity: 'Please select consigne city !',
            SArea: 'Enter consigne area !',
            SPinCode: 'Enter consigne pin code !',
           
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});


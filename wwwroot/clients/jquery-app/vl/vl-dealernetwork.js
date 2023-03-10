SetInputMobile("Mobile"); //set 

$(document).ready(function () {  
    GetStateList("State");
    GetCityList("City");
    // for form validation
    $('form[id="vl-dealernetwork-form"]').validate({
        rules: {
            DealerName: 'required',
            Mobile: 'required',           
            Email: 'required', 
            State: 'required', 
            City: 'required', 
            Email: 'required', 
            Address: 'required', 
        },
        messages: {           
            DealerName: 'Please enter dealer name !',
            Mobile: 'Please enter dealer mobile !',     
            Email: 'Please enter dealer email !',    
            State: 'Please enter dealer state !',    
            City: 'Please enter dealer city !',    
            Email: 'Please enter dealer email !',   
            Address: 'Please enter dealer address !',   
           
        },
        submitHandler: function (form) {                    
            form.submit();            
        }
    });
});

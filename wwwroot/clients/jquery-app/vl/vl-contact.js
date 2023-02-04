SetInputMobile("Mobile"); //set 

$(document).ready(function () {  
    GetStateList("State");
    GetCityList("City");
    // for form validation
    $('form[id="vl-contact-form"]').validate({
        rules: {
            CustomerName: 'required',
            Mobile: 'required',           
            Email: 'required', 
            State: 'required', 
            City: 'required', 
            Message: 'required', 
        },
        messages: {           
            CustomerName: 'Please enter your name !',
            Mobile: 'Please enter your mobile !',     
            Email: 'Please enter your email !',    
            State: 'Please enter your state !',    
            City: 'Please enter yoyr city !',    
            Message: 'Please enter your query / message !',   
           
        },
        submitHandler: function (form) {                    
            form.submit();            
        }
    });
});

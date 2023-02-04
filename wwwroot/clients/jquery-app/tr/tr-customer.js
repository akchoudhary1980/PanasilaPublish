SetInputMobile("BillToMobile"); //set
SetInputMobile("BillToWhatsup"); // whats up

SetInputMobile("ShipToMobile"); //set
SetInputMobile("ShipToWhatsup"); // whats up

$(function () {
    $("#Birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });

    $("#Anniversary").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });
    GetStateList("BillToState");
    GetCityList("BillToCity");
    GetStateList("ShipToState");
    GetCityList("ShipToCity");

    // Get Unit List
    GetDropDown("DropProfession", "/Share/GetProfessionList", "Profession");

    // Customer Type 
    $('#PartC').hide();
});

function CopyMobile() {  
    if ($('#SameAs').is(':checked') == true) {
        $('#BillToWhatsup').val($('#BillToMobile').val());
    }
    else {
        $('#BillToWhatsup').val("");
    }    
}
function CopyMobile2() {
    if ($('#SameAs2').is(':checked') == true) {
        $('#ShipToWhatsup').val($('#ShipToMobile').val());
    }
    else {
        $('#ShipToWhatsup').val("");
    }
}


//function getCustomerType() {
//    var ch = $('input[name="CustomerType"]:checked').val();   
//    if (ch == "A")
//    {
//        $('#PartC').hide();
//        $('#PartA').show();
//        $('#PartB').show();
//    }
//    if (ch == "B") {
//        $('#PartB').hide();
//        $('#PartC').hide();
//        $('#PartA').show();        
//    }
//    if (ch == "C") {
//        $('#PartB').hide();
//        $('#PartA').show();
//        $('#PartC').show();
//    }
//}



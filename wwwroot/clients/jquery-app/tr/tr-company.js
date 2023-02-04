GetStateList('CompanyState');
GetCityList('CompanyCity');

$(function () {
    SetInputMobile('CompanyMobile');
    SetInputMobile('CompanyWhatsup');

    // date pic
    $("#DateofRegistration").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });
});

$(document).ready(function () {

    // Profession On Change
    $("#DropProfession").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#ProfessionModel').modal('show');
        }
        else {
            $('#ProfessionID').val(status);
        }
    });


    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-customer-form"]').validate({
        rules: {
            CustomerName: 'required',
            BillToMobile: 'required',            
        },
        messages: {           
            CustomerName: 'Please enter customer name !',
            BillToMobile: 'Please enter customer mobile !',
        },
        submitHandler: function (form) {            
            form.submit();            
        }
    });
});

// Insert InsertProfession
function InsertProfession() {
    var obj = {};
    obj.ProfessionName = $("#ProfessionName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertProfession",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropProfession", "/Share/GetProfessionList", "Profession");
                alert("Profession added successfully !");
                $('#ProfessionModel').modal('hide');
                $('#DropProfession').val(r);
                $('#ProfessionID').val(r);
            }
        }
    });
}


function CopyMobile() {
    if ($('#SameAs').is(':checked') == true) {
        $('#Whatsup').val($('#Mobile').val());
    }
    else {
        $('#Whatsup').val("");
    }
}

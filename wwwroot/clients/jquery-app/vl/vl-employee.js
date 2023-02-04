$(document).ready(function () {
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    SetInputMobile("Mobile"); //set
    SetInputNumericIndian("Salary");

    $("#DateofBirth").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });
    $("#DateofJoining").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });


    GetStateList("State");
    GetCityList("City");
    // Designation On Change     
    $("#DropDesignation").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#DesignationModel').modal('show');
        }
        else {
            $('#DesignationID').val(status);
        }
    });

    // for form validation
    $('form[id="vl-employee-form"]').validate({
        rules: {
            EmployeeName: 'required',           
            Mobile: 'required',
            Email: {
                required: true,
                email: true
            },           
            Salary: 'required',           
            DesignationID: { valueNotEquals: "0" },
            Qualification: { valueNotEquals: "0" }
        },
        messages: {           
            EmployeeName: 'Please enter employee name !',             
            Mobile: 'Please enter employee mobile !',
            Email: 'Please enter employee email !',
            Salary: 'Please enter employee salary !',
            DesignationID: { valueNotEquals: "Please select employee designation !" },
            Qualification: { valueNotEquals: "Please select employee qualification !" },
        },
        submitHandler: function (form) {
            RemoveIndianCulture("Salary");           
            form.submit();            
        }
    });
});

// Insert Designation
function InsertDesignation() {
    var obj = {};
    obj.DesginationName = $("#DesginationName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertDesignation",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropDesignation", "/Share/GetDesignationList", "Designation");
                alert("Designation added successfully !");
                $('#DesignationModel').modal('hide');
                $('#DropDesignation').val(r);
                $('#DesignationID').val(r);
            }
        }
    });
}

// Insert Upload Image 
function uploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#empPicture')
                .attr('src', e.target.result)
                .width(300)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function CopyMobile() {
    if ($('#SameAs').is(':checked') == true) {
        $('#Whatup').val($('#Mobile').val());
    }
    else {
        $('#Whatup').val("");
    }
}
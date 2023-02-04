$(document).ready(function () {

    // Unit On Change     
    $("#DropUnit").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#UnitModel').modal('show');
        }
        else {
            $('#UnitID').val(status);
        }
    });
    // Gropu On Change     
    $("#DropGroup").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#GroupModel').modal('show');
        }
        else {
            $('#GroupID').val(status);
        }
    });
    // Category On Change
    $("#DropCategory").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#CategoryModel').modal('show');
        }
        else {
            $('#CategoryID').val(status);
        }
    });
    // GST On Change
    $("#DropGSTSlab").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#GSTSlabModel').modal('show');
        }
        else {
            $('#GSTSlabID').val(status);
        }
    });
    // check box
    $('#GSTInclusive').change(function () {
        if ($(this).is(":checked")) {
            // get GST Slab value
            var gstid = $('#DropGSTSlab').val();

            if (gstid == "") {
                alert("Please select GST percent");
            }
            else {
                // Call Ajax method
                var gst = GetPercent(gstid);
                var p = $('#ServiceCharge').val();
                p = ClearCulture(p);
                var r = parseFloat(p) * 100 / parseFloat(gst);
                r = ConvertToIndian(r);
                $('#ServiceCharge').val(r);
            }
        }
        else {
            $('#ServiceCharge').val($('#Charge').val());
        }
    });

    $("#Charge").blur(function () {
        var charge = $('#Charge').val();
        charge = ConvertToIndian(charge);
        //alert(charge);
        ////charge = ConvertToIndian(charge);
        $('#ServiceCharge').val(charge);
    });

    // Get GST Percent
    function GetPercent(id) {
        var gst = 0;
        $.ajax({
            type: "POST",
            async: false,
            url: '/Share/GetGSTPercent',
            data: "{'ID': '" + id + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                gst = response;
            },
            failure: function (response) {
                alert(response);
            }
        });
        return gst;
    }


    // Default Value
    SetInputNumericIndian('ServiceCharge');
    SetInputNumericIndian('Charge');

    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-service-form"]').validate({
        rules: {
            ServiceName: 'required',
            DropCategory: { valueNotEquals: "-1" },
            DropGroup: { valueNotEquals: "-1" },
            DropUnit: { valueNotEquals: "-1" },
            DropGSTSlab: { valueNotEquals: "-1" }
        },
        messages: {
            ServiceName: 'Please enter service name !',
            DropCategory: { valueNotEquals: "Please select service category !" },
            DropGroup: { valueNotEquals: "Please select service group !" },
            DropUnit: { valueNotEquals: "Please select service unit !" },
            DropGSTSlab: { valueNotEquals: "Please select service GST slab !" },
        },
        submitHandler: function (form) {
            // Remove indian
            RemoveIndianCulture("ServiceCharge");
            RemoveIndianCulture("Charge");
            // Set the Value 
            var editor_content_service = quillservice.root.innerHTML;
            $('#Description').val(editor_content_service);

            form.submit();
        }
    });
});


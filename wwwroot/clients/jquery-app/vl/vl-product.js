
$(document).ready(function () {
    // Default Value
    
    SetIntegerIndian("Like");
    SetIntegerIndian("DisLike");
    SetIntegerIndian("View");
    SetIntegerIndian("Rating");

    SetInputNumericIndian("Price");
    SetInputNumericIndian("Rate");
    SetInputNumericIndian("MRP");

    SetInputNumericIndian("DeliveryCharge");

    SetIntegerIndian("StockQty");
    SetIntegerIndian("AlertStockQty");
    


    // check box
    $('#GSTInclusive').change(function () {
        if ($(this).is(":checked")) {
            // get GST Slab value
            var gstid = $('#GSTSlabID').val();
           
            if (gstid == "") {
                alert("Please select GST percent");
            }
            else {
                // Call Ajax method
                var gst = GetPercent(gstid);
                var p = $('#Rate').val();
                p = ClearCulture(p);
                var r = parseFloat(p) * 100 / parseFloat(gst);
                r = ConvertToIndian(r);
                $('#Rate').val(r);
            }
        }
        else {
            $('#Rate').val($('#Price').val());
        }
    });

    $("#Price").blur(function () {
        var price = $('#Price').val();
        // price = ConvertToIndian(price);
        $('#Rate').val(price);
    });


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

    // Brand On Change     
    $("#DropBrand").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#BrandModel').modal('show');
        }
        else {
            $('#BrandID').val(status);
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



    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-product-form"]').validate({
        rules: {
            ProductName: 'required',                   
            BrandID: { valueNotEquals: "0" },
            GroupID: { valueNotEquals: "0" },
            CategoryID: { valueNotEquals: "0" },
            UnitID: { valueNotEquals: "0" },
            MRP: 'required',
            Price: 'required',
        },
        messages: {           
            ProductName: 'Please enter product name !',            
            BrandID: { valueNotEquals: "Please select brand !" },
            GroupID: { valueNotEquals: "Please select group !" },
            CategoryID: { valueNotEquals: "Please select category !" },
            UnitID: { valueNotEquals: "Please select unit !" },           
            MRP: 'Please enter product MRP !',
            Price: 'Please enter product Price !',
        },
        submitHandler: function (form) {

            RemoveIndianCulture("Like");
            RemoveIndianCulture("DisLike");
            RemoveIndianCulture("View");
            RemoveIndianCulture("Rating");

            RemoveIndianCulture("Price");
            RemoveIndianCulture("Rate");
            RemoveIndianCulture("MRP");

            RemoveIndianCulture("DeliveryCharge");

            RemoveIndianCulture("StockQty");
            RemoveIndianCulture("AlertStockQty");

            // Set the Value 
            var editor_content = quillproduct.root.innerHTML;
            $('#FullDescription').val(editor_content);
            form.submit();            
        }
    });
});

// Get GST Percent
function GetPercent(id) {
    var gst = 0;   
    $.ajax({
        type: "POST",
        async: false,
        url: '/Share/GetGSTPercent',
        data: { ID: id},       
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
// Upload Image
// main picture
function uploadPicture(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#productPicture')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// picture 1
function uploadPicture1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#productPicture1')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// picture 2
function uploadPicture2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#productPicture2')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// picture 3
function uploadPicture3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#productPicture3')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// picture 4
function uploadPicture4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#productPicture4')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

var loc;
var mc = "", gd = "", rm = "", ra = "", sn = "", bn = "";

$(document).ready(function () {
    // Default Value
    SetInputNumericIndian('MRPRate');
    SetInputNumericIndian('Rate');
    SetInputNumericIndian('Price');
    SetDoubleIndian('OpeningStock');
    SetDoubleIndian('StockMinimumLevel');
    SetDoubleIndian('StockMaximumLevel');

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

    // Color On Change     
    $("#DropColor").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#ColorModel').modal('show');
        }
        else {
            $('#ColorID').val(status);
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
    // Material Center On Change
    $("#DropMaterialCenter").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#MaterialCenterModel').modal('show');
        }
        else {
            $('#MaterialCenterID').val(status);
            mc = $('option:selected', this).text();
            loc = mc + "/" + gd + "/" + rm + "/" + ra + "/" + sn + "/" + bn;
            $('#Location').val(loc);
        }
    });
    // Godown On Change
    $("#DropGodown").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#GodownModel').modal('show');
        }
        else {
            $('#GodownID').val(status);
            gd = $('option:selected', this).text();
            loc = mc + "/" + gd + "/" + rm + "/" + ra + "/" + sn + "/" + bn;
            $('#Location').val(loc);
        }
    });
    // Room On Change
    $("#DropRoom").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#RoomModel').modal('show');
        }
        else {
            $('#RoomNoID').val(status);
            rm = $('option:selected', this).text();
            loc = mc + "/" + gd + "/" + rm + "/" + ra + "/" + sn + "/" + bn;
            $('#Location').val(loc);
        }
    });
    // Rack On Change
    $("#DropRack").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#RackModel').modal('show');
        }
        else {
            $('#RackNoID').val(status);
            ra = $('option:selected', this).text();
            loc = mc + "/" + gd + "/" + rm + "/" + ra + "/" + sn + "/" + bn;
            $('#Location').val(loc);
        }
    });

    // Self On Change
    $("#DropSelf").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#SelfModel').modal('show');
        }
        else {
            $('#SelfNoID').val(status);
            sn = $('option:selected', this).text();
            loc = mc + "/" + gd + "/" + rm + "/" + ra + "/" + sn + "/" + bn;
            $('#Location').val(loc);
        }
    });
    // Bin On Change
    $("#DropBin").change(function () {
        var status = this.value;
        if (status == "0") {
            $('#BinModel').modal('show');
        }
        else {
            $('#BinNoID').val(status);
            bn = $('option:selected', this).text();
            loc = mc + "/" + gd + "/" + rm + "/" + ra + "/" + sn + "/" + bn;
            $('#Location').val(loc);
        }
    });


    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    // for form validation
    $('form[id="vl-product-json-form"]').validate({
        rules: {
            ProductName: 'required',                   
            CategoryID: { valueNotEquals: "-1" },
            CategoryID: { valueNotEquals: "-1" }
        },
        messages: {           
            ProductName: 'Please enter product name !',            
            CategoryID: { valueNotEquals: "Please select employee designation !" },
            CategoryID: { valueNotEquals: "Please select employee qualification !" },
        },
        submitHandler: function (form) {            
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
// Upload Image
function uploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#productPicture')
                .attr('src', e.target.result)
                .width(300)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
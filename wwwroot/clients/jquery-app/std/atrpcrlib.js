$(function () {
    // Get Unit List
    GetDropDown("DropUnit", "/Share/GetUnitList", "Unit");
    // Get Brand List
    GetDropDown("DropBrand", "/Share/GetBrandList", "Brand");
    // Get Color List
   /* GetDropDown("DropColor", "/Share/GetColorList", "Color");*/
    // Get Group List
    GetDropDown("DropGroup", "/Share/GetGroupList", "Group");
    // Get Category List
    GetDropDown("DropCategory", "/Share/GetCategoryList", "Category");
    // Get GST List
    GetDropDown("DropGSTSlab", "/Share/GetGSTSlabList", "GSTSlab");
    // Get Material Center List
    //GetDropDown("DropMaterialCenter", "/Share/GetMaterialCenterList", "MaterialCenter");
    //// Get Godown List
    //GetDropDown("DropGodown", "/Share/GetGodownList", "Godown");
    //// Get Room List
    //GetDropDown("DropRoom", "/Share/GetRoomList", "Room");
    //// Get Rack List
    //GetDropDown("DropRack", "/Share/GetRackList", "Rack");
    //// Get Self List
    //GetDropDown("DropSelf", "/Share/GetSelfList", "Self");
    //// Get Bin List
    //GetDropDown("DropBin", "/Share/GetBinList", "Bin");

    /**** For Service  ****/    
   
    

    //// Get Unit List
    //GetDropDown("DropUnit1", "/Share/GetUnitList", "Unit1");
    //// Get Group List
    //GetDropDown("DropGroup1", "/Share/GetGroupList", "Group1");
    //// Get Category List
    //GetDropDown("DropCategory1", "/Share/GetCategoryList", "Category1");
    //// Get GST List
    //GetDropDown("DropGSTSlab1", "/Share/GetGSTSlabList", "GSTSlab1");
    //// check box
    //$('#GSTInclusive1').change(function () {
    //    if ($(this).is(":checked")) {
    //        // get GST Slab value
    //        var gstid = $('#DropGSTSlab1').val();

    //        if (gstid == "") {
    //            alert("Please select GST percent");
    //        }
    //        else {
    //            // Call Ajax method
    //            var gst = GetPercent(gstid);
    //            var p = $('#ServiceCharge1').val();
    //            p = ClearCulture(p);
    //            var r = parseFloat(p) * 100 / parseFloat(gst);
    //            r = ConvertToIndian(r);
    //            $('#ServiceCharge1').val(r);
    //        }
    //    }
    //    else {
    //        $('#ServiceCharge1').val($('#Charge1').val());
    //    }
    //});

    //$("#Charge1").blur(function () {
    //    var charge = $('#Charge1').val();
    //    charge = ConvertToIndian(charge);
    //    //alert(charge);
    //    ////charge = ConvertToIndian(charge);
    //    $('#ServiceCharge1').val(charge);
    //});

    //// Unit On Change     
    //$("#DropUnit1").change(function () {
    //    var status = this.value;      
    //    if (status == "0") {
    //        $('#UnitModel').modal('show');
    //    }
    //    else {
    //        $('#UnitID1').val(status);
    //    }
    //});
    //// Gropu On Change     
    //$("#DropGroup1").change(function () {
    //    var status = this.value;        
    //    if (status == "0") {
    //        $('#GroupModel').modal('show');
    //    }
    //    else {
    //        $('#GroupID1').val(status);
    //    }
    //});
    //// Category On Change
    //$("#DropCategory1").change(function () {
    //    var status = this.value;       
    //    if (status == "0") {
    //        $('#CategoryModel').modal('show');
    //    }
    //    else {
    //        $('#CategoryID1').val(status);
    //    }
    //});
    //// GST On Change
    //$("#DropGSTSlab1").change(function () {
    //    var status = this.value;       
    //    if (status == "0") {
    //        $('#GSTSlabModel').modal('show');
    //    }
    //    else {
    //        $('#GSTSlabID1').val(status);
    //    }
    //});
});


function GetProductModel() {
    $('#ProductModel').modal('show');
}
function GetServiceModel() {
    $('#ServiceModel').modal('show');
}
function GetChargesModel() {
    $('#ChargesModel').modal('show');
}

// Insert Unit 
function InsertUnit() {
    var obj = {};
    obj.UnitName = $("#UnitName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertUnit",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {           
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropUnit", "/Share/GetUnitList", "Unit");
                alert("Unit added successfully !");
                $('#UnitModel').modal('hide');
                $('#DropUnit').val(r);
                $('#UnitID').val(r);
            }
        }
    });
}
// Insert Brand 
function InsertBrand() {
    var obj = {};
    obj.BrandName = $("#BrandName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertBrand",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropBrand", "/Share/GetBrandList", "Brand");
                alert("Brand added successfully !");
                $('#BrandModel').modal('hide');
                $('#DropBrand').val(r);
                $('#BrandID').val(r);
            }
        }
    });
}
// Insert Color 
function InsertColor() {
    var obj = {};
    obj.ColorName = $("#ColorName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertColor",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropColor", "/Share/GetColorList", "Color");
                alert("Color added successfully !");
                $('#ColorModel').modal('hide');
                $('#DropColor').val(r);
                $('#ColorID').val(r);
            }
        }
    });
}
// Insert Group
function InsertGroup() {
    var obj = {};
    obj.GroupName = $("#GroupName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertGroup",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropGroup", "/Share/GetGroupList", "Group");
                alert("Group added successfully !");
                $('#GroupModel').modal('hide');
                $('#DropGroup').val(r);
                $('#GroupID').val(r);
            }
        }
    });
}
// Insert Category
function InsertCategory() {
    var obj = {};
    obj.CategoryName = $("#CategoryName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertCategory",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropCategory", "/Share/GetCategoryList", "Category");
                alert("Category added successfully !");
                $('#CategoryModel').modal('hide');
                $('#DropCategory').val(r);
                $('#CategoryID').val(r);
            }
        }
    });
}
// Insert // Insert Category
function InsertGSTSlab() {
    var obj = {};
    obj.GSTSlabName = $("#GSTSlabName").val();
    obj.PercentValue = $("#PercentValue").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertGSTSlab",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropGSTSlab", "/Share/GetGSTSlabList", "GSTSlab");
                alert("GST Slab added successfully !");
                $('#GSTSlabModel').modal('hide');
                $('#DropGSTSlab').val(r);
                $('#GSTSlabID').val(r);
            }
        }
    });
}

// Insert Material Center
function InsertMaterialCenter() {
    var obj = {};
    obj.MaterialCenterName = $("#MaterialCenterName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertMaterialCenter",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropMaterialCenter", "/Share/GetMaterialCenterList", "MaterialCenter");
                alert("Material Center added successfully !");
                $('#MaterialCenterModel').modal('hide');
                $('#DropMaterialCenter').val(r);
                $('#MaterialCenterID').val(r);
            }
        }
    });
}
// Insert Godown
function InsertGodown() {
    var obj = {};
    obj.GodownName = $("#GodownName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertGodown",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropGodown", "/Share/GetGodownList", "Godown");
                alert("Godown added successfully !");
                $('#GodownModel').modal('hide');
                $('#DropGodown').val(r);
                $('#GodownID').val(r);
            }
        }
    });
}
// Insert Room
function InsertRoom() {
    var obj = {};
    obj.RoomName = $("#RoomName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertRoom",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropRoom", "/Share/GetRoomList", "Room");
                alert("Room added successfully !");
                $('#RoomModel').modal('hide');
                $('#DropRoom').val(r);
                $('#RoomNoID').val(r);
            }
        }
    });
}
// Insert Rack
function InsertRack() {
    var obj = {};
    obj.RackName = $("#RackName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertRack",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropRack", "/Share/GetRackList", "Rack");
                alert("Rack added successfully !");
                $('#RackModel').modal('hide');
                $('#DropRack').val(r);
                $('#RackNoID').val(r);
            }
        }
    });
}
// Insert Self 
function InsertSelf() {
    var obj = {};
    obj.SelfName = $("#SelfName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertSelf",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropSelf", "/Share/GetSelfList", "Self");
                alert("Self added successfully !");
                $('#SelfModel').modal('hide');
                $('#DropSelf').val(r);
                $('#SelfNoID').val(r);
            }
        }
    });
}
// Insert Bin
function InsertBin() {
    var obj = {};
    obj.BinName = $("#BinName").val();
    obj.Remark = $("#Remark").val();
    $.ajax({
        type: "POST",
        url: "/Share/InsertBin",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                GetDropDown("DropBin", "/Share/GetBinList", "Bin");
                alert("Bin added successfully !");
                $('#BinModel').modal('hide');
                $('#DropBin').val(r);
                $('#BinNoID').val(r);
            }
        }
    });
}

// Insert Product
function InsertProduct() {
    var obj = {};
    obj.ProductName = $("#ProductName2").val();
    obj.Description = $("#Description2").val();
    obj.ProductCode = $("#ProductCode").val();
    obj.HSNCode = $("#HSNCode").val();
    obj.CategoryID = $("#CategoryID").val();
    obj.GroupID = $("#GroupID").val();
    obj.BrandID = $("#BrandID").val();
    obj.ColorID = $("#ColorID").val();
    obj.UnitID = $("#UnitID").val();
    obj.OpeningStock = $("#OpeningStock").val();
    obj.MRPRate = $("#MRPRate").val();
    obj.GSTSlabID = $("#GSTSlabID").val();
    obj.Price = $("#Price").val();
    obj.Rate = $("#Rate").val();
    obj.GSTInclusive = $('#GSTInclusive').is(':checked'); 
    obj.MaterialCenterID = $("#MaterialCenterID").val();
    obj.GodownID = $("#GodownID").val();
    obj.RoomNoID = $("#RoomNoID").val();
    obj.RackNoID = $("#RackNoID").val();
    obj.SelfNoID = $("#SelfNoID").val();
    obj.BinNoID = $("#BinNoID").val();
    obj.Location = $("#Location").val();
    obj.StockMinimumLevel = $("#StockMinimumLevel").val();
    obj.StockMaximumLevel = $("#StockMaximumLevel").val();

    $.ajax({
        type: "POST",
        url: "/Share/InsertProduct",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                alert("Product added successfully !");
                $('#ProductModel').modal('hide');
                FetchProductOrService(r, "P");
                $('#ProductID').val(r);
            }
        }
    });
}
// Insert Service 
function InsertService() {    
    var obj = {};
    obj.ServiceName = $("#ServiceName1").val();
    obj.ServiceCode = $("#ServiceCode1").val();
    obj.SAC = $("#SAC1").val();
    obj.Description = $("#Description1").val();
    obj.CategoryID = $("#CategoryID1").val();
    obj.GroupID = $("#GroupID1").val();
    obj.UnitID = $("#UnitID1").val();
    obj.GSTSlabID = $("#GSTSlabID1").val();
    obj.Charge = $("#Charge1").val();
    obj.ServiceCharge = $("#ServiceCharge1").val();
    obj.GSTInclusive = $('#GSTInclusive1').is(':checked'); 

    $.ajax({
        type: "POST",
        url: "/Share/InsertService",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                alert("Service added successfully !");
                $('#ServiceModel').modal('hide');
                FetchProductOrService(r, "S");
                $('#ServiceID').val(r);
            }
        }
    });
}

// Insert Charges 
function InsertCharges() {
    var obj = {};
    obj.ChargesName = $("#ChargesName2").val();
    obj.Charge = $("#Charge2").val();

    $.ajax({
        type: "POST",
        url: "/Share/InsertCharges",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r == "DO") {
                alert("Duplicate Record Found !");
            }
            else {
                alert("Charges added successfully !");
                $('#ChargesModel').modal('hide');
                FetchProductOrService(r, "C");
                $('#ChargesID').val(r);
            }
        }
    });
}

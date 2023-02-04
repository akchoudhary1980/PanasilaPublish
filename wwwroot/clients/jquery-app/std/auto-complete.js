function ConvertToDDMMYYYY(date) {
    /*alert(date);*/
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}

function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}

function TrueToYes(boolvalue) {  
    let result = ""; 
    if (String(boolvalue) === "true") {
        result = "Yes";
    }
    else {
        result = "No";
    }
    return result;
}

function PostFixPercent(str) {
    str = str + "%"
    return str;
}

// Get State List
function GetStateList(id) {    
    $(document).ready(function () {       
        $('#' + id).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/Share/StateAutoComplete",
                    type: "POST",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return { label: item.stateName, value: item.stateName, id: item.stateID };
                        }))
                    },
                })
            },
            select: function (event, ui) {               
                $('#' + id).val(ui.item.label);               
            },           
        });
    })
}
// Get City List
function GetCityList(id) {
    $(document).ready(function () {
        $('#' + id).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/Share/CityAutoComplete",
                    type: "POST",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return { label: item.cityName, value: item.cityName, id: item.cityID };
                        }))
                    },
                })
            },
            select: function (event, ui) {               
                $('#' + id).val(ui.item.label);               
            },            
        });
    })
}


/**
 Transaction Section
 */
// Product Auto Complete
function GetProductList(id) {
    $(document).ready(function () {
        $("#" + id).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/Share/ProductAutoComplete",
                    type: "POST",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return { label: item.productName, value: item.productName, id: item.productID };
                        }))
                    },
                })
            },
            select: function (event, ui) {
                FetchProductOrService(ui.item.id, "P");
                $("#ProductID").val(ui.item.id);                 
            }
        });
    })
}
// Service Auto Complete
function GetServiceList(id) {
    $("#" + id).autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/Share/ServiceAutoComplete",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item.serviceName, value: item.serviceName, id: item.serviceID };
                    }))
                },
            })
        },
        select: function (event, ui) {
            FetchProductOrService(ui.item.id, "S");
            $("#ServiceID").val(ui.item.id);
        }
    });
}

// Charges Auto Complete
function GetChargesList(id) {
    $("#" + id).autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/Share/ChargesAutoComplete",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item.chargesName, value: item.chargesName, id: item.chargesID };
                    }))
                },
            })
        },
        select: function (event, ui) {
            FetchProductOrService(ui.item.id, "C");
            $("#ChargesID").val(ui.item.id);
        }
    });
}
// Fetch Product and Service and Charges
function FetchProductOrService(itemid, itype) {
    $.ajax({
        type: "POST",
        url: "/Share/FetchProductOrService",
        dataType: "json",
        data: { iID: itemid, iType: itype },
        success: function (response) {
            var str = response;
            var res = str.split("^");
            // if condition P
            if (itype == "P") {
                $('#PUnit').val(res[0]);
                $('#PGST').val(res[1]);
                $('#PRate').val(res[2]);
                $('#ProductName').val(res[3]);
                $('#PQty').val(1); // Default Value
            }
            // if condition C
            if (itype == "C") {
                $('#ChargesName').val(res[0]);
                $('#CCharge').val(res[1]);
                $('#ChargesID').val(res[2]);               
            }
            // if condition S
            if (itype == "S") {
                $('#SUnit').val(res[0]);
                $('#SGST').val(res[1]);
                $('#SRate').val(res[2]);
                $('#ServiceName').val(res[3]);
                $('#SQty').val(1); // Default Value
            }
        }
    });
}
// Insert and Update Trans Data 
function InsertRow(itype,act) {

    var itemtype = itype;
    var action = act;
    var itemid, qty, rate;
   
    if (itemtype == "P") {
        itemid = $('#ProductID').val();        
        qty = $('#PQty').val();
        rate = $('#PRate').val();
    }
    if (itemtype == "S") {
        itemid = $('#ServiceID').val();
        qty = $('#SQty').val();
        rate = $('#SRate').val();
    }
    if (itemtype == "C") {
        itemid = $('#ChargesID').val();        
        qty = 1;
        rate = $('#CCharge').val();
    }

    /// for Product  
    if (action == "ACP") {
        var pstatus =  productform();       
        if (pstatus == true) {
            var actionp = $('#btnp').val();
            if (actionp == "CP") {
                $.ajax({
                    type: 'POST',
                    url: "/Share/InsertRow",
                    dataType: 'json',
                    data: { iID: itemid, iQty: qty, iRate: rate, iType: itemtype },
                    success: function (data) {
                        DisplayData(data);
                    }
                });
            }
            else {
                $('#iconp').removeClass('fas fa-recycle').addClass('fas fa-plus');
                $('#btnp').val("CP");
                $.ajax({
                    type: 'POST',
                    url: "/Share/UpdateRow",
                    dataType: 'json',
                    data: { iID: itemid, iQty: qty, iRate: rate, iType: itemtype },
                    success: function (data) {
                        DisplayData(data);
                    }
                });
            }
        }
    }
    

    /// For Services     
    if (action == "ACS") {
        sstatus = serviceform();
        if (sstatus == true) {       
        var actions = $('#btns').val();
        if (actions == "CS") {
            $.ajax({
                type: 'POST',
                url: "/Share/InsertRow",
                dataType: 'json',
                data: { iID: itemid, iQty: qty, iRate: rate, iType: itemtype },
                success: function (data) {
                    DisplayData(data);
                }
            });
        }
        else {
            $('#icons').removeClass('fas fa-recycle').addClass('fas fa-plus');
            $('#btns').val("CS");
            $.ajax({
                type: 'POST',
                url: "/Share/UpdateRow",
                dataType: 'json',
                data: { iID: itemid, iQty: qty, iRate: rate, iType: itemtype },
                success: function (data) {
                    DisplayData(data);
                }
            });
            }
        }
    }
    

    /// For Charges     
    if (action == "ACC") {
        cstatus = chargesform();
        if (cstatus == true) {
            var actionc = $('#btnc').val();
            if (actionc == "CC") {
                $.ajax({
                    type: 'POST',
                    url: "/Share/InsertRow",
                    dataType: 'json',
                    data: { iID: itemid, iQty: qty, iRate: rate, iType: itemtype },
                    success: function (data) {
                        DisplayData(data);
                    }
                });
            }
            else {
                $('#iconc').removeClass('fas fa-recycle').addClass('fas fa-plus');
                $('#btnc').val("CC");
                $.ajax({
                    type: 'POST',
                    url: "/Share/UpdateRow",
                    dataType: 'json',
                    data: { iID: itemid, iQty: qty, iRate: rate, iType: itemtype },
                    success: function (data) {
                        DisplayData(data);
                    }
                });
            }
        }
    }


}
// for Remove Trans Data
function DeleteRow(serno) {

    $.ajax({
        type: 'POST',
        url: "/Share/DeleteRow",
        dataType: 'json',
        data: { iSer: serno },
        success: function (data) {
            DisplayData(data);
        }
    });
}
// Load Trans Data with Customer
function LoadTransDataCustomer(qid, cid) {
    // aign here
    $.ajax({
        type: 'POST',
        url: "/Share/FetchRows",
        dataType: 'json',
        data: { ID: qid, TransModel: 'T1TX' },
        success: function (data) {
            DisplayData(data);
            FetchCustomer(cid);
        }
    });
}
// Load Trans Data with Vender
function LoadTransDataVender(pid, vid) {
    // aign here
    $.ajax({
        type: 'POST',
        url: "/Share/FetchRows",
        dataType: 'json',
        data: { ID: vid, TransModel: 'T2TX' },
        success: function (data) {
            DisplayData(data);
            FetchVender(vid);
        }
    });
}


// for Display Data-- > 
function DisplayData(data) {
    var counter = 0;
    $("#dtTable tbody tr").remove();
    var items = '';
    $.each(data, function (i, item) {
        counter = counter + 1;
        var rows = "<tr>"
            + "<td>" + counter + "</td>"
            + "<td>" + item.itemName + "</td>"
            + "<td>" + item.hsnCode + "</td>"
            + "<td class='text-right'>" + item.quantity + "</td>"
            + "<td class='text-right'>" + item.unit + "</td>"
            + "<td class='text-right'>" + item.rate + "</td>"
            + "<td class='text-right'>" + item.amount + "</td>"
            + "<td class='text-right'>" + item.gstSlab + "%</td>"
            + "<td class='text-right'>" + item.gstAmount + "</td>"
            + "<td><button type='button' id=" + item.itemID + " onclick='FetchEditRowProductOrService(this.id)' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></button></td>"
            + "<td><button type='button' id=" + item.serNo + " onclick='DeleteRow(this.id)' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></button></td>"
            + "</tr>";
        $('#dtTable tbody').append(rows);
    });

    // Get Calculation 
    discount = $('#Discount').val();
    $.ajax({
        type: "POST",
        url: "/Share/Calculation",
        async: false,
        dataType: "json",
        data: { Dis: discount },
        success: function (response) {
            totalamt = response.TotalAmount;
            totalgst = response.TotalGST;
            subtotal = response.SubTotal;
            discount = response.Discount
            grandtotal = response.GrandTotal;
            $('#Discount').val(discount);
            $('#GroundTotal').text(grandtotal);

        }
    });
    //
    $('#dtTable tbody').append('<tr><td colspan="6" align="right" > <b>Total</b></td><td class="text-right"><b style="color:green">' + totalamt + '</b></td><td></td><td class="text-right"><b style="color:green">' + totalgst + '</b></td><td></td><td></td></tr><tr><td colspan="8" class="text-right"><b>Sub Total (Amount + GST Amt) </b></td><td class="text-right"><b style="color:green">' + subtotal + '</b></td><td></td><td></td></tr>');
    // Clear Product & Service Data
    $('#ProductName').val("");
    $('#PQty').val("");
    $('#PUnit').val("");
    $('#PRate').val("");
    $('#PGST').val("");

    $('#ServiceName').val("");
    $('#SQty').val("");
    $('#SUnit').val("");
    $('#SRate').val("");
    $('#SGST').val("");

}
// Get Update Discount No-- >    
function UpdateDiscount(method) {    
    grandtotal = ClearCulture(grandtotal);    
    if (method == "P") {
        per = parseFloat($("#DiscountPercent").val());
        disamount = Math.round(grandtotal * per / 100).toFixed(2);       
        saleamount = grandtotal - disamount;
        $("#DiscountPercent").val(per);
        $("#DiscountValue").val(ConvertToIndian(disamount));
        $("#Discount").val(ConvertToIndian(disamount));
        $("#GroundTotal").text(ConvertToIndian(saleamount)); // Errore
    }
    else {
        disamount = ClearCulture($("#DiscountValue").val());//
        //disamount = $("#DiscountValue").val();
        //disamount = ClearCulture(disamount);           
        disamount = parseFloat(disamount);
        per = Math.round(disamount / grandtotal * 100).toFixed(2);
        saleamount = grandtotal - disamount;
        $("#DiscountPercent").val(per);
        $("#DiscountValue").val(ConvertToIndian(disamount));
        $("#Discount").val(ConvertToIndian(disamount));
        $("#GroundTotal").text(ConvertToIndian(saleamount));
    }
}
// Edit Product and Service
function FetchEditRowProductOrService(itemid) {
    $.ajax({
        type: "POST",
        url: "/Share/FetchEditProductOrService",
        dataType: "json",
        data: { iID: itemid },
        success: function (response) {
            var str = response;
            var res = str.split("^");
            var itype = res[6];
            // if condition
            if (itype == "P") {
                $('#iconp').removeClass('fas fa-plus').addClass('fas fa-recycle');
                $('#btnp').val("EP");
                $('#ProductID').val(res[0]);
                $('#ProductName').val(res[1]);
                $('#PQty').val(res[2]);
                $('#PUnit').val(res[3]);
                $('#PRate').val(res[4]);
                $('#PGST').val(res[5]);
                $('#tab1').click();
            }
            if (itype == "S") {
                $('#icons').removeClass('fas fa-plus').addClass('fas fa-recycle');
                $('#btns').val("ES");
                $('#ServiceID').val(res[0]);
                $('#ServiceName').val(res[1]);
                $('#SQty').val(res[2]);               
                $('#SUnit').val(res[3]);
                $('#SRate').val(res[4]);
                $('#SGST').val(res[5]);
                $('#tab2').click();
            }
            if (itype == "C") {
                $('#iconc').removeClass('fas fa-plus').addClass('fas fa-recycle');
                $('#btnc').val("EC");
                $('#ChargesID').val(res[0]);
                $('#ChargesName').val(res[1]);               
                $('#CCharge').val(res[4]);
                $('#tab3').click();
            }

        }
    });
}

/**
 Vender Section
 */
// Vender Auto Complete 
function GetVenderList(id) {
    $(document).ready(function () {
        $("#" + id).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/Share/VenderAutoComplete",
                    type: "POST",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return { label: item.venderName, value: item.venderName, id: item.venderID };
                        }))
                    },
                })
            },
            select: function (event, ui) {
                $('#VenderHiddenID').val(ui.item.id);
                FetchVender(ui.item.id);                
            }
        });
    })
}
// Vender Fille
function FetchVender(vid) {
    $.ajax({
        type: "POST",
        url: "/Share/FetchVender",
        dataType: "json",
        data: { VenderID: vid },
        success: function (obj) {            
            $('#VenderHiddenID').val(obj.venderID);
            $('#VenderName').val(obj.venderName);
            $('#Address').val(obj.address);
            $('#State').val(obj.state);
            $('#City').val(obj.city);
            $('#Mobile').val(obj.mobile);
            $('#Whatsup').val(obj.whatsup);
            $('#Email').val(obj.email);
            $('#GSTNo').val(obj.gsto);
            $('#VenderID').val(obj.venderName);
        }
    });
}
// Vender Click Event 
function VenderManage() {
    var vid = $('#VenderHiddenID').val();
    if (vid == "0") {
        $('#VenderModel').modal('show');

        $('#vcreate').show();
        $('#vupdate').hide();
        $('#vclear').hide();
    }
    else {
        $('#VenderModel').modal('show');
        $('#vcreate').hide();
        $('#vupdate').show();
        $('#vclear').show();
    }
}
// Insert Vender  
function InsertVender() {
    var status = $("#vl-vender-form").valid();
    if (status == true) {
        var obj = {};
        obj.VenderName = $("#VenderName").val();
        obj.Address = $("#Address").val();
        obj.State = $("#State").val();
        obj.City = $("#City").val();
        obj.Mobile = $("#Mobile").val();
        obj.Whatsup = $("#Whatsup").val();
        obj.Email = $("#Email").val();
        obj.GSTNo = $("#GSTNo").val();

        $.ajax({
            type: "POST",
            url: "/Share/InsertVender",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                if (r == "DO") {
                    alert("Duplicate Record Found !");
                }
                else {
                    $('#VenderHiddenID').val(r);
                    $('#VenderID').val($("#VenderName").val());
                    // Hindr
                    alert("Vender added successfully !");
                    $('#VenderModel').modal('hide');
                }
            }
        });
    }
}
// Update Vender  
function UpdateVender(id) {
    var status = $("#vl-vender-form").valid();
    if (status == true) {
        var obj = {};
        obj.VenderID = $("#VenderID").val();
        obj.VenderName = $("#VenderName").val();
        obj.Address = $("#Address").val();
        obj.State = $("#State").val();
        obj.City = $("#City").val();
        obj.Mobile = $("#Mobile").val();
        obj.Whatsup = $("#Whatsup").val();
        obj.Email = $("#Email").val();
        obj.GSTNo = $("#GSTNo").val();

        $.ajax({
            type: "POST",
            url: "/Share/UpdateVender",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                if (r == "DO") {
                    alert("Duplicate Record Found !");
                }
                else {
                    $('#VenderHiddenID').val(r);
                    $('#VenderID').val($("#VenderName").val());
                    alert("Vender update successfully !");
                    $('#VenderModel').modal('hide');
                }
            }
        });
    }
}
// Insert Vender  
function ClearVender() {
    $("#VenderID").val("");
    $("#VenderHiddenID").val("0");
    $("#VenderName").val("");
    $("#Address").val("");
    $("#State").val("");
    $("#City").val("");
    $("#Mobile").val("");
    $("#Whatsup").val("");
    $("#Email").val("");
    $("#GSTNo").val("");

    $('#vcreate').show();
    $('#vupdate').hide();
    $('#vclear').hide();
}


/**
 Customer Section 
 */
// Customer Auto Complete 
function GetCustomerList(id) {
    $(document).ready(function () {
        $("#" + id).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/Share/CustomerAutoComplete",
                    type: "POST",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return { label: item.customerName, value: item.customerName, id: item.customerID };
                        }))
                    },
                })
            },
            select: function (event, ui) {
                FetchCustomer(ui.item.id);
                $("#CustomerHiddenID").val(ui.item.id);
            }
        });
    })
}
// Customer Fetch
function FetchCustomer(cid) {
    $.ajax({
        type: "POST",
        url: "/Share/FetchCustomer",
        dataType: "json",
        data: { CustomerID: cid },
        success: function (obj) {

            $('#CustomerHiddenID').val(obj.customerID);
            $('#CustomerID').val(obj.customerName);

            //$('#CustomerName').val(obj.CustomerName);
            //$('#CustomerType').val(obj.CustomerName);

            $('#Address').val(obj.address);
            $('#City').val(obj.city);
            $('#State').val(obj.state);
            $('#Email').val(obj.email);
            $('#GSTNo').val(obj.gstNo);
            $('#Mobile').val(obj.mobile);
            $('#Whatsup').val(obj.whatsup);

           /* $('#ShipToName').val(obj.CustomerName);*/
            $('#SAddress').val(obj.sAddress);
            $('#SCity').val(obj.sCity);
            $('#SState').val(obj.sState);
            $('#SMobile').val(obj.sMobile);
            $('#SWhatsup').val(obj.sWhatsup);
            $('#SEmail').val(obj.sEmail);
            $('#SGSTNo').val(obj.sGSTNo);

            //$('#Birthday').val(obj.Birthday);
            //$('#Anniversary').val(obj.Anniversary);
            //$('#ProfessionID').val(obj.ProfessionID);
        }
    });
}
// Customer Click Event
function CustomerManage() {
    var vid = $('#CustomerHiddenID').val();
    if (vid == "0") {
        $('#CustomerModel').modal('show');

        $('#ccreate').show();
        $('#cupdate').hide();
        $('#cclear').hide();
    }
    else {
        $('#CustomerModel').modal('show');
        $('#ccreate').hide();
        $('#cupdate').show();
        $('#cclear').show();
    }
}
// Customer Customer
function InsertCustomer() {
    var status = $("#vl-customer-form").valid();
    if (status == true) {
        var obj = {};

        obj.CustomerName = $("#CustomerName").val();
        obj.CustomerType = $('input[name="CustomerType"]:checked').val();

        obj.BillToAddress = $("#BillToAddress").val();
        obj.BillToCity = $("#BillToCity").val();
        obj.BillToState = $("#BillToState").val();
        obj.BillToEmail = $("#BillToEmail").val();
        obj.BillToGSTNo = $("#BillToGSTNo").val();
        obj.BillToMobile = $("#BillToMobile").val();
        obj.BillToWhatsup = $("#BillToWhatsup").val();

        obj.ShipToName = $("#ShipToName").val();

        obj.ShipToAddress = $("#ShipToAddress").val();
        obj.ShipToCity = $("#ShipToCity").val();
        obj.ShipToState = $("#ShipToState").val();
        obj.ShipToMobile = $("#ShipToMobile").val();
        obj.ShipToWhatsup = $("#ShipToWhatsup").val();
        obj.ShipToEmail = $("#ShipToEmail").val();
        obj.ShipToGSTNo = $("#ShipToGSTNo").val();

        obj.Birthday = $("#Birthday").val();
        obj.Anniversary = $("#Anniversary").val();
        obj.ProfessionID = $("#ProfessionID").val();

        $.ajax({
            type: "POST",
            url: "/Share/InsertCustomer",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                if (r == "DO") {
                    alert("Duplicate Record Found !");
                }
                else {
                    $('#CustomerHiddenID').val(r);
                    $('#CustomerID').val($("#CustomerName").val());
                    // Hindr
                    alert("Customer added successfully !");
                    $('#CustomerModel').modal('hide');
                }
            }
        });
    }
}
// Update Customer
function UpdateCustomer() {
    var status = $("#vl-customer-form").valid();
    if (status == true) {
        var obj = {};
        obj.CustomerID = $("#CustomerHiddenID").val();

        obj.CustomerName = $("#CustomerName").val();
        obj.CustomerType = $('input[name="CustomerType"]:checked').val();

        obj.BillToAddress = $("#BillToAddress").val();
        obj.BillToCity = $("#BillToCity").val();
        obj.BillToState = $("#BillToState").val();
        obj.BillToEmail = $("#BillToEmail").val();
        obj.BillToGSTNo = $("#BillToGSTNo").val();
        obj.BillToMobile = $("#BillToMobile").val();
        obj.BillToWhatsup = $("#BillToWhatsup").val();

        obj.ShipToName = $("#ShipToName").val();
        obj.ShipToAddress = $("#ShipToAddress").val();
        obj.ShipToCity = $("#ShipToCity").val();
        obj.ShipToState = $("#ShipToState").val();
        obj.ShipToMobile = $("#ShipToMobile").val();
        obj.ShipToEmail = $("#ShipToEmail").val();
        obj.ShipToGSTNo = $("#ShipToGSTNo").val();

        obj.Birthday = $("#Birthday").val();
        obj.Anniversary = $("#Anniversary").val();
        obj.ProfessionID = $("#ProfessionID").val();

        $.ajax({
            type: "POST",
            url: "/Share/UpdateCustomer",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                if (r == "DO") {
                    alert("Duplicate Record Found !");
                }
                else {
                    $('#CustomerHiddenID').val(r);
                    $('#CustomerID').val($("#CustomerName").val());
                    alert("Customer update successfully !");
                    $('#CustomerModel').modal('hide');
                }
            }
        });
    }
}
// Clear Customer
function ClearCustomer() {
    $("#CustomerID").val("");
    $("#CustomerHiddenID").val("0");

    $('#SameAs').prop('checked', false); // Unchecks it
    $('#SameAs2').prop('checked', false); // Unchecks it

    $("#CustomerName").val("A");
    $("#CustomerType").val("");

    $("#BillToAddress").val("");
    $("#BillToCity").val("");
    $("#BillToState").val("");
    $("#BillToEmail").val("");
    $("#BillToGSTNo").val("");
    $("#BillToMobile").val("");
    $("#BillToWhatsup").val("");

    $("#ShipToName").val("");
    $("#ShipToAddress").val("");
    $("#ShipToCity").val("");
    $("#ShipToState").val("");
    $("#ShipToMobile").val("");
    $("#ShipToEmail").val("");
    $("#ShipToGSTNo").val("");

    $("#Birthday").val("");
    $("#Anniversary").val("");
    $("#ProfessionID").val("0");

    $('#ccreate').show();
    $('#cupdate').hide();
    $('#cclear').hide();
}




/**
 Drop Down Section Section
 */
// GetDropDown
function GetDropDown(Name, Method, Model) {
    var ddName = $("#" + Name);
    ddName.empty().append('<option selected="selected" value="-1" disabled = "disabled">Loading.....</option>');
    
    $.ajax({
        type: "POST",
        url: Method,
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (response) {           
            // initail value 
            ddName.empty().append('<option selected="selected" value="-1">Select</option>');
            // through Loop 
            $.each(response, function () {               
                ddName.append($("<option></option>").val(this['value']).html(this['text']));
            })          

            ddName.append('<option value="0">Add New ' + Model + ' +</option>');
        },
    });
}
// SetDropDown
function SetDropDown(Name, Method, Hidden) {
    var ddName = $("#" + Name);
    ddName.empty().append('<option selected="selected" value="-1" disabled = "disabled">Loading.....</option>');
    var selvalue = "";
    $.ajax({
        type: "POST",
        url: Method,
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (response) {
            // initail value 
            ddName.empty().append('<option selected="selected" value="-1">Select</option>');
            // through Loop 
            $.each(response, function () {
                ddName.append($("<option></option>").val(this['value']).html(this['text']));
            });
            ddName.append('<option value="0">Add New ' + Name + ' +</option>');
            $("#" + Name).val(Hidden);
        },
    });
}
// Drop Down Action 
function DropDownActivity(Name,POPModel,ID) {
    $("#" + Name).change(function () {
        var status = this.value;
        if (status == "0") {
            $('#' + POPModel).modal('show');
            //$('#' + ID).val("0");
        }
        else {
            $('#' + ID).val(status);
        }
    });
}

// not use 

function getCustomerType() {
    var ch = $('input[name="CustomerType"]:checked').val();
    if (ch == "A") {
        $('#PartC').hide();
        $('#PartA').show();
        $('#PartB').show();
    }
    if (ch == "B") {
        $('#PartB').hide();
        $('#PartC').hide();
        $('#PartA').show();
    }
    if (ch == "C") {
        $('#PartB').hide();
        $('#PartA').show();
        $('#PartC').show();
    }
}

// Product Insert Form
function productform() {

    if ($('#ProductID').val() == "") {
        $('#ProductName').addClass('validation');
        return false;
    }
    else {
        $('#ProductName').removeClass('validation');       
    }
    // 
    if ($('#ProductName').val() == "") {
        $('#ProductName').addClass('validation');
        return false;
    }
    else {
        $('#ProductName').removeClass('validation');       
    }
    //
    if ($('#PQty').val() == "") {
        $('#PQty').addClass('validation');
        return false;
    }
    else {
        $('#PQty').removeClass('validation');       
    }

    //
    if ($('#PRate').val() == "") {
        $('#PRate').addClass('validation');
        return false;
    }
    else {
        $('#PRate').removeClass('validation');       
    }
    return true;

}

// Service Insert Form
function serviceform() {

    if ($('#ServiceID').val() == "") {
        $('#ServiceName').addClass('validation');
        return false;
    }
    else {
        $('#ServiceName').removeClass('validation');
    }
    // 
    if ($('#ServiceName').val() == "") {
        $('#ServiceName').addClass('validation');
        return false;
    }
    else {
        $('#ServiceName').removeClass('validation');
    }
    //
    if ($('#SQty').val() == "") {
        $('#SQty').addClass('validation');
        return false;
    }
    else {
        $('#SQty').removeClass('validation');
    }

    //
    if ($('#SRate').val() == "") {
        $('#SRate').addClass('validation');
        return false;
    }
    else {
        $('#SRate').removeClass('validation');
    }
    return true;

}


// Charges Insert Form
function chargesform() {

    if ($('#ChargesID').val() == "") {
        $('#ChargesName').addClass('validation');
        return false;
    }
    else {
        $('#ChargesName').removeClass('validation');
    }
    // 
    if ($('#ChargesName').val() == "") {
        $('#ChargesName').addClass('validation');
        return false;
    }
    else {
        $('#ChargesName').removeClass('validation');
    }
    //
    if ($('#CCharge').val() == "") {
        $('#CCharge').addClass('validation');
        return false;
    }
    else {
        $('#CCharge').removeClass('validation');
    }
    
    return true;
}



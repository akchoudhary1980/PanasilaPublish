function ConvertToDDMMYYYY(stingdate) {   
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(stingdate);
    var mydate = new Date(parseFloat(results[1]));
    year = mydate.getFullYear();
    month = mydate.getMonth() + 1;
    day = mydate.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    var outdate = day + '-' + month + '-' + year;
    return outdate;
}
function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}

$(document).ready(function () {
    $("#example3").dataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/PurchaseOrder/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "PurchaseOrderID", "name": "PurchaseOrderID", "autoWidth": true },
            { "data": "SerialNo", "name": "SerialNo", "autoWidth": true }, 
            {
                "data": "OrderDate", "name": "OrderDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.OrderDate);
                },
            },     
            { "data": "VenderName", "name": "VenderName", "autoWidth": true }, 
            {
                "data": "PurchaseValue", "name": "PurchaseValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.PurchaseValue);
                },                
            },
            {
                "data": "PurchaseGST", "name": "PurchaseGST", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.PurchaseGST);
                },
            },
            {
                "data": "PurchaseTotal", "name": "PurchaseTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.PurchaseTotal);
                },
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/PurchaseOrder/PrintPreview/" + full.PurchaseOrderID + "' class='btn btn-xs btn-outline-info'><i class='fas fa-print'></i></a>";
                }
            },

            { "data": "Status", "name": "Status", "autoWidth": true },
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/PurchaseOrder/Edit/" + full.PurchaseOrderID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {               
                "render": function (data, type, full) {
                    return "<a href='/PurchaseOrder/Delete/" + full.PurchaseOrderID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
           
        ]
    });
});  


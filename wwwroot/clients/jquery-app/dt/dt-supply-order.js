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
            "url": "/SupplyOrder/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "SupplyOrderID", "name": "SupplyOrderID", "autoWidth": true },
            { "data": "SerialNo", "name": "SerialNo", "autoWidth": true }, 
            {
                "data": "SupplyOrderDate", "name": "SupplyOrderDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.SupplyOrderDate);
                },
            },

            {
                "data": "DueDate", "name": "DueDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.DueDate);
                },
            },
            { "data": "CustomerName", "name": "CustomerName", "autoWidth": true },
            { "data": "IsPerfomance", "name": "IsPerfomance", "autoWidth": true },
            {
                "data": "Perfomance", "name": "Perfomance", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.Perfomance);
                },
            },
            {
                "data": "PerfomanceDueDate", "name": "PerfomanceDueDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.PerfomanceDueDate);
                },
            },

            {
                "data": "SupplyOrderValue", "name": "SupplyOrderValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.SupplyOrderValue);
                },                
            },
            {
                "data": "SupplyOrderGST", "name": "SupplyOrderGST", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.SupplyOrderGST);
                },
            },
            {
                "data": "SupplyOrderTotal", "name": "SupplyOrderTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.SupplyOrderTotal);
                },
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/SupplyOrder/PrintPreview/" + full.SupplyOrderID + "' class='btn btn-xs btn-outline-primary'><i class='fas fa-solid fa-eye'></i></a>";
                }
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/SupplyOrder/PrintPreview/" + full.SupplyOrderID + "' class='btn btn-xs btn-outline-primary'><i class='fas fa-solid fa-print'></i></a>";
                }
            },            
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/SupplyOrder/Edit/" + full.SupplyOrderID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {               
                "render": function (data, type, full) {
                    return "<a href='/SupplyOrder/Delete/" + full.SupplyOrderID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
           
        ]
    });
});  


$(document).ready(function () {
    $("#mytable").dataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/CustomerPayment/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "paymentID", "name": "paymentID", "autoWidth": true },             
            {
                "data": "transactionDate", "name": "transactionDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.transactionDate);
                },
            },     
            { "data": "paymentType", "name": "paymentType", "autoWidth": true }, 
            { "data": "paymentMode", "name": "paymentMode", "autoWidth": true }, 
            { "data": "customerName", "name": "customerName", "autoWidth": true }, 
            {
                "data": "amount", "name": "amount", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.amount);
                },                
            },          

            { "data": "paymentMethod", "name": "paymentMethod", "autoWidth": true },
            { "data": "remark", "name": "remark", "autoWidth": true },

            {
                "render": function (data, type, full) {
                    return "<a href='/Share/CustomerPayment/" + full.paymentID + "' class='btn btn-xs btn-outline-info'><i class='fas fa-print'></i></a>";
                }
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/CustomerPayment/Edit/" + full.paymentID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/CustomerPayment/Delete/" + full.paymentID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
        ]
    });
});  


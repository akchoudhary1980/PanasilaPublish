$(document).ready(function () {
    $("#mytable").dataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/CustomerPayment/GetCustomerBalance",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "customerID", "name": "customerID", "autoWidth": true }, 
            { "data": "customerName", "name": "customerName", "autoWidth": true }, 
            { "data": "mobile", "name": "mobile", "autoWidth": true }, 
            { "data": "whatsup", "name": "whatsup", "autoWidth": true },
            { "data": "email", "name": "email", "autoWidth": true },

            {
                "data": "totalSale", "name": "totalSale", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.totalSale);
                },
            },
            {
                "data": "totalPayment", "name": "totalPayment", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.totalPayment);
                },
            },
            {
                "data": "balance", "name": "balance", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.balance);
                },
            },
            

            {
                "render": function (data, type, full) {
                    return "<a href='/CustomerPayment/Details/" + full.customerID + "' class='btn btn-xs btn-outline-info'><i class='fas fa-book'></i></a>";
                }
            },
           
        ]
    });
});  


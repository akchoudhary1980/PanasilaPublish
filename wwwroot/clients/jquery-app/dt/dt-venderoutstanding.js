$(document).ready(function () {
    $("#mytable").dataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/VenderPayment/GetVenderOutstanding",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "venderID", "name": "venderID", "autoWidth": true }, 
            { "data": "venderName", "name": "venderName", "autoWidth": true }, 
            { "data": "mobile", "name": "mobile", "autoWidth": true }, 
            { "data": "whatsup", "name": "whatsup", "autoWidth": true },
            { "data": "email", "name": "email", "autoWidth": true },

            {
                "data": "purchaseTotal", "name": "purchaseTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.purchaseTotal);
                },
            },
            {
                "data": "totalPayment", "name": "totalPayment", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.totalPayment);
                },
            },
            {
                "data": "outstanding", "name": "outstanding", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.outstanding);
                },
            },
            {
                
                "render": function (data, type, full,meta)
                {                       
                    var myURL = "/VenderPayment/Details/" + full.venderID;
                    return "<a href=" + myURL + " class='class='btn btn-xs btn-outline-success'><i class='fas fa-book'></i></a>";
                }
            },            
           
        ]
    });
});  


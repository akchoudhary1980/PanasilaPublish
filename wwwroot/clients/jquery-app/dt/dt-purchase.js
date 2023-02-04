$(document).ready(function () {
    $("#mytable").dataTable({
        //
        "pageLength": 10,     
        //
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/Purchase/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "purchaseID", "name": "purchaseID", "autoWidth": true },  
            { "data": "serialNo", "name": "serialNo", "autoWidth": true }, 
            {
                "data": "purchaseDate", "name": "purchaseDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.purchaseDate);
                },
            },     
            { "data": "venderName", "name": "venderName", "autoWidth": true }, 
            {
                "data": "purchaseValue", "name": "purchaseValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.purchaseValue);
                },                
            },
            {
                "data": "purchaseGST", "name": "purchaseGST", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.purchaseGST);
                },
            },
            {
                "data": "purchaseTotal", "name": "purchaseTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.purchaseTotal);
                },
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/Purchase/PrintPreview/" + full.purchaseID + "' class='btn btn-xs btn-outline-primary'><i class='fas fa-solid fa-print'></i></a>";
                }
            },

            {
                "data": "venderID", "name": "venderID",
                "render": function (data, type, full) {
                    return "<a href='/Purchase/Payment/" + full.venderID + "' class='btn btn-xs btn-outline-info'><i class='fas fa-rupee-sign'></i>";
                }
            },
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/Purchase/Edit/" + full.purchaseID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {               
                "render": function (data, type, full) {
                    return "<a href='/Purchase/Delete/" + full.purchaseID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
           
        ]
    });
});  


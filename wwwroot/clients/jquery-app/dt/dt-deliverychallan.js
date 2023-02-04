$(document).ready(function () {
    $("#mytable").dataTable({

        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/DeliveryChallan/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "deliveryChallanID", "name": "deliveryChallanID", "autoWidth": true },  
            { "data": "serialNo", "name": "serialNo", "autoWidth": true }, 
            {
                "data": "deliveryDate", "name": "deliveryDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.deliveryDate);
                },
            },     
            { "data": "customerName", "name": "customerName", "autoWidth": true }, 
            {
                "data": "deliveryValue", "name": "deliveryValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.deliveryValue);
                },                
            },
            {
                "data": "deliveryGST", "name": "deliveryGST", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.deliveryGST);
                },
            },
            {
                "data": "deliveryTotal", "name": "deliveryTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.deliveryTotal);
                },
            },


            {
                "data": "customerID", "name": "customerID",
                "render": function (data, type, full) {
                     return "<div class='btn-group'>"+
                           "<button class='btn btn-info btn-sm' type='button'>Action</button >"+
                           "<button type='button' class='btn btn-info dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
                           "<span class='sr-only'>Toggle Dropdown</span></button>"+
                            "<div class='dropdown-menu'>"+
                         "<a class='dropdown-item' href='/DeliveryChallan/NormalPreview/" + full.deliveryChallanID + "'><i class='fas fa-plus-square'></i> Normal</a>"+
                            "<div class='dropdown-divider'></div>"+
                         "<a class='dropdown-item' href='/DeliveryChallan/WithAmountPreview/" + full.deliveryChallanID + "'><i class='fas fa-plus-square'></i> With Amount</a>"+                           
                            "</div>"+
                            "</div>";
                }
            },            
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/DeliveryChallan/Edit/" + full.deliveryChallanID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {               
                "render": function (data, type, full) {
                    return "<a href='/DeliveryChallan/Delete/" + full.deliveryChallanID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
           
        ]
    });
});  


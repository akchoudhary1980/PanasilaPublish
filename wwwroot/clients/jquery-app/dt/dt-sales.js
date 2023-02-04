$(document).ready(function () {
    $("#mytable").dataTable({

        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/Sales/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "salesID", "name": "salesID", "autoWidth": true },  
            { "data": "serialNo", "name": "serialNo", "autoWidth": true }, 
            {
                "data": "salesDate", "name": "salesDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.salesDate);
                },
            },     
            { "data": "customerName", "name": "customerName", "autoWidth": true }, 
            {
                "data": "saleValue", "name": "saleValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.saleValue);
                },                
            },
            {
                "data": "saleGST", "name": "saleGST", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.saleGST);
                },
            },
            {
                "data": "saleTotal", "name": "saleTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.saleTotal);
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
                         "<a class='dropdown-item' href='/Sale/Payment/" + full.customerID + "'><i class='fas fa-plus-square'></i> Payment</a>"+
                            "<div class='dropdown-divider'></div>"+
                         "<a class='dropdown-item' href='/Sale/PrintPreview/" + full.salesID + "'>Normal Bill</a>"+
                            "<a class='dropdown-item' href='#'>Detail Bill</a>"+
                            "<a class='dropdown-item' href='#'>Image Bill</a>"+
                            "<div class='dropdown-divider'></div>"+
                            "<a class='dropdown-item' href='#'>Normal DC</a>"+
                            "<a class='dropdown-item' href='#'>Detail DC</a>"+
                            "<div class='dropdown-divider'></div>"+
                            "<a class='dropdown-item' href='#'>Normal IR</a>"+
                            "<a class='dropdown-item' href='#'>Detail IR</a>"+
                            "<div class='dropdown-divider'></div>"+
                            "<a class='dropdown-item' href='#'>Cancel Bill</a>"+
                            "</div>"+
                            "</div>";
                }
            },            
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/Sale/Edit/" + full.salesID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {               
                "render": function (data, type, full) {
                    return "<a href='/Sale/Delete/" + full.salesID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
           
        ]
    });
});  


$(document).ready(function () {   
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Payment/GetIndex",
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
                "data": "recieptDate", "name": "recieptDate", 

                "render": function (data, type, full, meta) {
                    return  ConvertToDDMMYYYY(full.recieptDate);
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "firmName", "name": "firmName", "autoWidth": true },           
            { "data": "paymentType", "name": "paymentType", "autoWidth": true },   
            { "data": "paymentMode", "name": "paymentMode", "autoWidth": true },  
            
            {
                "data": "amount", "name": "amount", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.amount);
                },
                "orderable": false,
                "searchable": false
            },

            { "data": "remark", "name": "remark", "autoWidth": true },  


            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Payment/Edit?id=" + full.paymentID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Payment/Delete?id=" + full.paymentID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 

                    
        ]
    });    
    
});  



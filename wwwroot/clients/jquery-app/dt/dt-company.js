$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Company/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "companyID", "name": "companyID", "autoWidth": true },
            { "data": "companyName", "name": "companyName", "autoWidth": true },
            { "data": "companyAddress", "name": "companyAddress", "autoWidth": true },
            { "data": "companyMobile", "name": "companyMobile", "autoWidth": true },
            { "data": "companyEmail", "name": "companyEmail", "autoWidth": true },
            { "data": "gst", "name": "gst", "autoWidth": true },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Company/Setting/" + full.companyID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Company/Edit/" + full.companyID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Company/Delete/" + full.companyID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


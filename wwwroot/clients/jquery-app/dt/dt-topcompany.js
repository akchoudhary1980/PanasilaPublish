$(document).ready(function () {
    $("#mytable").DataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/TopCompany/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "topCompanyID", "name": "topCompanyID", "autoWidth": true },
            {
                "data": "picture", "name": "picture",

                "render": function (data, type, full, meta) {
                    return "<img src='/uploadfiles/" + full.picture + "' height='50'/>";
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "companyName", "name": "companyName", "autoWidth": true },          
            {
                "data": "isDisplay", "name": "isDisplay", className: "text-right",
                "render": function (data, type, full, meta) {
                    return TrueToYes(full.isDisplay);
                },
            },
                       
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/TopCompany/Edit?id=" + full.topCompanyID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/TopCompany/Delete?id=" + full.topCompanyID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


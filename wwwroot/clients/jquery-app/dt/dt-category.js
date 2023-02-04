$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Category/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "categoryID", "name": "categoryID", "autoWidth": true },
            {
                "data": "picture", "name": "picture",

                "render": function (data, type, full, meta) {
                    return "<img src='/uploadfiles/" + full.picture + "' height='50'/>";
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "categoryName", "name": "categoryName", "autoWidth": true },
            { "data": "remark", "name": "remark", "autoWidth": true },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Category/Edit?id=" + full.categoryID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Category/Delete?id=" + full.categoryID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


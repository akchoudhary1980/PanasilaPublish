$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Brand/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "brandID", "name": "brandID", "autoWidth": true },
            { "data": "brandName", "name": "brandName", "autoWidth": true },
            { "data": "remark", "name": "remark", "autoWidth": true },

            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Brand/Edit?id=" + full.brandID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Brand/Delete?id=" + full.brandID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 

        ]
    });
});


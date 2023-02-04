$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/GalleryCategory/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "galleryCategoryID", "name": "galleryCategoryID", "autoWidth": true },
            { "data": "galleryCategoryName", "name": "galleryCategoryName", "autoWidth": true },
            { "data": "remark", "name": "remark", "autoWidth": true },

            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/GalleryCategory/Edit/" + full.galleryCategoryID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/GalleryCategory/Delete/" + full.galleryCategoryID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },

        ]
    });
});


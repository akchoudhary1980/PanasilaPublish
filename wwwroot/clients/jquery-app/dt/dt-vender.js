
$(document).ready(function () {
    $("#mytable").dataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/Vender/GetIndex",
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
            { "data": "address", "name": "address", "autoWidth": true },
            { "data": "city", "name": "city", "autoWidth": true },
            { "data": "mobile", "name": "mobile", "autoWidth": true },
            { "data": "whatsup", "name": "whatsup", "autoWidth": true },
            { "data": "email", "name": "email", "autoWidth": true },

            {
                "render": function (data, type, full) {
                    return "<a href='/Vender/Edit/" + full.venderID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Vender/Delete/" + full.venderID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },

        ]
    });
});


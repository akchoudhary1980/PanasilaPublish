$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Designation/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "desginationID", "name": "desginationID", "autoWidth": true },
            { "data": "desginationName", "name": "desginationName", "autoWidth": true },
            { "data": "remark", "name": "remark", "autoWidth": true },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Designation/Edit?id=" + full.desginationID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Designation/Delete?id=" + full.desginationID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


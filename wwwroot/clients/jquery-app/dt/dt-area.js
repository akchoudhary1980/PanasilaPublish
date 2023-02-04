$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Area/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }], 
        "columns": [
            { "data": "areaID", "name": "areaID", "autoWidth": true }, 
            { "data": "areaName", "name": "areaName", "autoWidth": true },
            { "data": "cityName", "name": "cityName", "autoWidth": true },           
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Area/Edit?id=" + full.areaID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Area/Delete?id=" + full.areaID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


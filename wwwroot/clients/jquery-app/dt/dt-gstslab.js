
$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/GSTSlab/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "gstSlabID", "name": "gstSlabID", "autoWidth": true },
            { "data": "gstSlabName", "name": "gstSlabName", "autoWidth": true },

            {
                "data": "percentValue", "name": "percentValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return PostFixPercent(full.percentValue);
                },
            },
            
            { "data": "remark", "name": "remark", "autoWidth": true },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/GSTSlab/Edit?id=" + full.gstSlabID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/GSTSlab/Delete?id=" + full.gstSlabID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


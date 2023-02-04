$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Group/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "groupID", "name": "groupID", "autoWidth": true },
            { "data": "groupName", "name": "groupName", "autoWidth": true },
            { "data": "remark", "name": "remark", "autoWidth": true },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Group/Edit?id=" + full.groupID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Group/Delete?id=" + full.groupID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


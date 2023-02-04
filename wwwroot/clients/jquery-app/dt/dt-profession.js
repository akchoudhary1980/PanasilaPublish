$(document).ready(function () {
    $("#example3").DataTable({        
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Profession/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "ProfessionID", "name": "ProfessionID", "autoWidth": true },
            { "data": "ProfessionName", "name": "ProfessionName", "autoWidth": true },
            { "data": "Remark", "name": "Remark", "autoWidth": true },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Profession/Edit/" + full.ProfessionID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Profession/Delete/" + full.ProfessionID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


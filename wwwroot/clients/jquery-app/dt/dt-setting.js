$(document).ready(function () {
    $("#mytable").dataTable({
        //
        "pageLength": 10,    
        //
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/Admin/Setting/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "settingID", "name": "settingID", "autoWidth": true },
            { "data": "companyName", "name": "companyName", "autoWidth": true },
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/Admin/Setting/Edit/" + full.settingID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
             
           
        ]
    });
});  


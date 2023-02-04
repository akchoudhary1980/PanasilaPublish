$(document).ready(function () {
    $("#mytable").DataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/MyServices/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "myServicesID", "name": "myServicesID", "autoWidth": true },
            {
                "data": "mainPicture", "name": "mainPicture",

                "render": function (data, type, full, meta) {
                    return "<img src='/uploadfiles/" + full.mainPicture + "' height='50'/>";
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "myServicesName", "name": "myServicesName", "autoWidth": true },          
            { "data": "serviceCharge", "name": "serviceCharge", "autoWidth": true },
           
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/MyServices/Edit?id=" + full.myServicesID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/MyServices/Delete?id=" + full.myServicesID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


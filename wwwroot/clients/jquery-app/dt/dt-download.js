$(document).ready(function () {
    $("#mytable").DataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Slider/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "sliderID", "name": "sliderID", "autoWidth": true },
            {
                "data": "picture", "name": "picture",

                "render": function (data, type, full, meta) {
                    return "<img src='../uploadfiles/" + full.picture + "' height='50'/>";
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "sliderTitle", "name": "sliderTitle", "autoWidth": true },           
            {
                "data": "isDisplay", "name": "isDisplay", className: "text-right",
                "render": function (data, type, full, meta) {
                    return TrueToYes(full.isDisplay);
                },
            },
            { "data": "link", "name": "link", "autoWidth": true },            
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Slider/Edit/" + full.sliderID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Slider/Delete/" + full.sliderID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


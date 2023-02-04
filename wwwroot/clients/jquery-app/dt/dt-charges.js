function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}
$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Charges/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "chargesID", "name": "chargesID", "autoWidth": true },
            { "data": "chargesName", "name": "chargesName", "autoWidth": true },           
            {
                "data": "charge", "name": "charge", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.charge);
                },
            },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Charges/Edit?id=" + full.chargesID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Charges/Delete?id=" + full.chargesID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


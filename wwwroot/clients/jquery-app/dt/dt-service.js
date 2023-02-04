function ConvertToDDMMYYYY(dateString) {
    date = new Date(dateString);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    var result = dt + '-' + month + '-' + year;
    return result;
}
function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}

$(document).ready(function () {
    $("#mytable").dataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/Admin/Service/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "serviceID", "name": "serviceID", "autoWidth": true },             
            { "data": "serviceName", "name": "serviceName", "autoWidth": true },
            { "data": "unitName", "name": "unitName", "autoWidth": true },
            { "data": "categoryName", "name": "categoryName", "autoWidth": true },

            {
                "data": "finalCharges", "name": "finalCharges", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.finalCharges);
                },
            },

            {
                "data": "percentValue", "name": "percentValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return full.percentValue + "%";
                },
            },
           
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Service/Edit?id=" + full.serviceID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Service/Delete?id=" + full.serviceID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


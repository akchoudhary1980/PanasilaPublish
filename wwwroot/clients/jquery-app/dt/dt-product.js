$(document).ready(function () {
    $("#mytable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Product/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "productID", "name": "productID", "autoWidth": true },
            {
                "data": "picture", "name": "picture",

                "render": function (data, type, full, meta) {
                    return "<img src='/uploadfiles/" + full.picture + "' height='50'/>";
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "productName", "name": "productName", "autoWidth": true },
            { "data": "categoryName", "name": "categoryName", "autoWidth": true },
            { "data": "unitName", "name": "unitName", "autoWidth": true },

            {
                "data": "mrp", "name": "mrp", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.mrp);
                },
            },

            {
                "data": "rate", "name": "rate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.rate);
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
                    return "<a href='/Admin/Product/Edit?id=" + full.productID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Product/Delete?id=" + full.productID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 

        ]
    });
});

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
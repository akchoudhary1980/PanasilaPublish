function ConvertToDDMMYYYY(stingdate) {
    //alert(stingdate);
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(stingdate);
    var mydate = new Date(parseFloat(results[1]));
    year = mydate.getFullYear();
    month = mydate.getMonth() + 1;
    day = mydate.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    var outdate = day + '-' + month + '-' + year;
    return outdate;
}
function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}

function RenderQuotation(ser) {
    result = "AE/2022/" + ser;
    return result;
}

$(document).ready(function () {
    $("#example3").dataTable({        
        "processing": true,
        "serverSide": true,
        "filter": true,

        "ajax": {
            "url": "/Quotation/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "QuotationID", "name": "QuotationID", "autoWidth": true },  
           /* { "data": "SerialNo", "name": "SerialNo", "autoWidth": true },*/

            {
                "data": "SerialNo", "name": "SerialNo", className: "text-right",
                "render": function (data, type, full, meta) {
                    return RenderQuotation(full.SerialNo);
                },
            },


            {
                "data": "QuotationDate", "name": "QuotationDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.QuotationDate);
                },
            },  
            {
                "data": "ExpactedDate", "name": "ExpactedDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.ExpactedDate);
                },
            },  
            { "data": "CustomerName", "name": "CustomerName", "autoWidth": true }, 
            {
                "data": "QuotationValue", "name": "QuotationValue", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.QuotationValue);
                },                
            },
            {
                "data": "QuotationGST", "name": "QuotationGST", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.QuotationGST);
                },
            },
            {
                "data": "QuotationTotal", "name": "QuotationTotal", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.QuotationTotal);
                },
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/Quotation/PrintPreview/" + full.QuotationID + "' class='btn btn-xs btn-outline-info'><i class='fas fa-print'></i></a>";
                }
            },            
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='/Quotation/Edit/" + full.QuotationID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {               
                "render": function (data, type, full) {
                    return "<a href='/Quotation/Delete/" + full.QuotationID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            },
           
        ]
    });
});  


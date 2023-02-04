$(document).ready(function () {
    $("#mytable").DataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Admin/Enquiry/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "enquiryID", "name": "enquiryID", "autoWidth": true },            
            {
                "data": "enquiryDate", "name": "enquiryDate", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY(full.enquiryDate);
                },
            },      
            { "data": "enquiryType", "name": "enquiryType", "autoWidth": true },
            { "data": "customerName", "name": "customerName", "autoWidth": true },
            { "data": "mobile", "name": "mobile", "autoWidth": true },
            { "data": "email", "name": "email", "autoWidth": true },
            { "data": "enquiryStatus", "name": "enquiryStatus", "autoWidth": true },

            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Enquiry/ViewDetails?id=" + full.enquiryID + "' class='btn btn-xs btn-outline-primary'><i class='fas fa-eye'></i></a>";
                }
            },

            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Enquiry/Close?id=" + full.enquiryID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Admin/Enquiry/Delete?id=" + full.enquiryID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


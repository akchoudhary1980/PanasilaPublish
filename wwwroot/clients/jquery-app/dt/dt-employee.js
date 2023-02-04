function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}

$(document).ready(function () {
    $("#example3").DataTable({
        
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Employee/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "EmployeeID", "name": "EmployeeID", "autoWidth": true },
            {
                "data": "Picture", "name": "Picture",

                "render": function (data, type, full, meta) {
                    return "<img src='../UploadFiles/" + full.Picture + "' height='50'/>";
                },
                "orderable": false,
                "searchable": false
            },

            { "data": "EmployeeName", "name": "EmployeeName", "autoWidth": true },
            { "data": "NicName", "name": "NicName", "autoWidth": true },
            { "data": "DesginationName", "name": "DesginationName", "autoWidth": true },
            { "data": "Mobile", "name": "Mobile", "autoWidth": true },
            { "data": "Email", "name": "Email", "autoWidth": true },
            {
                "data": "Salary", "name": "Salary", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.Salary);
                },
            },
            
            {
                "render": function (data, type, full) {
                    return "<a href='/Employee/Edit/" + full.EmployeeID + "' class='btn btn-xs btn-outline-success'><i class='fas fa-edit'></i></a>";
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='/Employee/Delete/" + full.EmployeeID + "' class='btn btn-xs btn-outline-danger'><i class='fas fa-window-close'></i></a>";
                }
            }, 
           
        ]
    });
});  


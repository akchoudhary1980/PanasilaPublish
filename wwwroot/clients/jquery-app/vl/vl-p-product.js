$(document).ready(function () {        
    $('form[id="vl-product"]').validate({
        rules: {
            ProductID: 'required',
            ProductName: 'required',
            PQty: 'required',
            PRate: 'required',
            PUnit: 'required',
            PGST: 'required',
        },
        messages: {           
            ProductID: 'Product required!',
            ProductName: 'Product required!',
            PQty: 'Quantity required!',
            PUnit: 'Unit required!',
            PRate: 'Rate required!',
            PGST: 'GST required!',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

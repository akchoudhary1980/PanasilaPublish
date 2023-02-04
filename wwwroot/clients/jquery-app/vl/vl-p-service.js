$(document).ready(function () {
    $('form[id="vl-p-servie-form"]').validate({
        rules: {
            ServiceID: 'required',
            ServiceName: 'required',
            SQty: 'required',
            SRate: 'required',
            SUnit: 'required',
            SGST: 'required',
        },
        messages: {
            ServiceID: 'Service required!',
            ServiceName: 'Service required!',
            SQty: 'Quantity required!',
            SUnit: 'Unit required!',
            SRate: 'Rate required!',
            SGST: 'GST required!',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

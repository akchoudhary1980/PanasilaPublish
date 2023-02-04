



    

    


function FormValidation() {
    RemoveIndianCulture("Like");
    RemoveIndianCulture("DisLike");
    RemoveIndianCulture("View");
    RemoveIndianCulture("Rating");
    RemoveIndianCulture("Price");
    RemoveIndianCulture("Rate");
    RemoveIndianCulture("MRP");
    RemoveIndianCulture("StockQty");
    RemoveIndianCulture("AlertStockQty");
    RemoveIndianCulture("DeliveryCharge");

    // Set the Value 
    var editor_content = quill.root.innerHTML;
    $('#FullDescription').val(editor_content);
}

// Main function
$(function () {    
    var records = GetRecordCount('Product');
    var pagesize = 10;
    DrawaPagination(records, pagesize);
    PaintContent("Product", 10, 0);
   
});

function DrawaPagination(Records,PageSize) {
    var PageCount = Math.ceil(Records / PageSize);
    /* alert(PageCount);*/
    var PartA = "";
    var PartB = "";
    var PartC = "";
    var Part = "";


    PartA = '<nav aria-label="Page navigation example">' +

        '<ul class="pagination">' +

        '<li class= "page-item"> ' +
        '<a class= "page-link" href = "#" aria-label="Previous"> ' +
        '<span aria-hidden="true">&laquo;</span> ' +
        '</a > ' +
        '</li> ';

    for (let i = 1; i <= PageCount; i++) {
        PartB = PartB + '<li class="page-item"> <a class="page-link curhand" onclick="PaintContent(' + '12' + ',' + '10' + ',' + '1' + ')">'+i+'</a></li> ';
    } 

   



    PartC = '<li class="page-item"> ' +
        '<a class="page-link" href = "#" aria-label="Next">' +
        '<span aria-hidden="true">&raquo;</span > ' +
        '</a> ' +
        '</li> ' +
        '</ul> ' +
        '</nav> ';

    Part = PartA + PartB + PartC;
    $('#PaginationDiv').empty().append(Part); 
}
// Get Counter
function GetRecordCount(query) {  
    var counter;
    $.ajax({
        type: "POST",
        async: false,
        url: "Share/RecordCount",
        dataType: "json",
        data: { Query: query},
        success: function (r) {        
            counter = r.total;
        }
    });
    return counter;
}


function GetPagination(query, pagesize, currentpage) {
    $.ajax({
        type: "POST",
        url: "Share/GetPagination",
        dataType: "json",
        data: { Query: query, PageSize: pagesize, CurrentPage: currentpage },
        success: function (data) {
            //alert(data.list);
            //alert(data.recordCount);
           /* alert(data.pageCount);*/
            DrawaPagination(data.pageCount, data.list);
        }
    });
}
// imp 
function Test(query, pagesize, pageno) {
   /* alert(page);*/
    $.ajax({
        type: "POST",
        async: false,
        url: "Share/GetData",
        dataType: "json",
        data: { Query: query, PageSize: pagesize, PageNo: pageno },
        success: function (data) {   
           /* var mydiv = "";*/
            $.each(data.list, function (i, item) {
                var mydiv = "";
                mydiv = '<div class="mybox">' +
                        '<p>' + item.productName +'</p>' +
                        '<p>' + item.productCode + '</p>' +
                        '<p>' + item.mrp + '</p>' +
                         '</div>';

                $('#ContentDiv').append(mydiv);
            });
        }
    });
}
// Imps sett
function PaintContent(query, pagesize, pageno) {
    
    $.ajax({
        type: "POST",
        async: false,
        url: "Share/GetData",
        dataType: "json",
        data: { Query: query, PageSize: pagesize, PageNo: pageno },
        success: function (data) {
            var mydiv = "";
            $.each(data.list, function (i, item) {               
               /* alert(item.productID);*/
                mydiv = '<div class="col-xl-4 col-md-4 col-sm-6 col-xs-12 mb-3">' +
                    '<div class="card prod-view rounded-0" style="min-height:500px">' +
                    '<div class="prod-item text-center">' +
                    '<div class="prod-img">' +
                    '<div class="option-hover" style="top:10px;">' +
                    '<button type="button" onclick="addtocart('+"'" + item.encript +"'"+ ')" class="btn btn-success rounded-0">' +
                    '<i class="icofont icofont-cart-alt f-20"></i>' +
                    '</button>' +
                    '<a href="/Product-Details?qwert=' + item.encript+'" class="btn btn-primary rounded-0">' +
                    '<i class="icofont icofont-list f-20"></i>' +
                    '</a>' +
                    '<button type="button" class="btn btn-warning rounded-0">' +
                    '<i class="icofont icofont-eye-alt f-20"></i>' +
                    '</button>' +
                    '<button type="button" class="btn btn-danger rounded-0">' +
                    '<i class="icofont icofont-heart-alt f-20"></i>' +
                    '</button>' +
                    '</div>' +

                    '<a href="#" class="hvr-shrink">' +

                    '<img src="/uploadfiles/' + item.picture + '" class="img-fluid o-hidden">' +
                   
                    '<div class="p-new"><a class="no-link" href="#"> New </a></div>' +

                    '</div>' +
                    '<div class="prod-info">' +
                    '<h4 class="text-capitalize text-primary">' + item.productName + '</h4>' +
                    '<div class="m-b-10">' +
                    '<label style="color:gold">' + item.rating + ' <i class="icofont-star"></i></label>' +

                    '<a class="text-muted f-w-600 no-link"> ' + item.view + ' <i class="icofont-eye"></i> | ' + item.like + ' <i class="icofont-like"></i> | ' + item.disLike + ' <i class="icofont-thumbs-down"></i> </a>' +
                    '</div>' +
                    '<span class="prod-price">' + item.rate + ' <small class="old-price">' + item.mrp + '</small></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'; $('#ContentDiv').append(mydiv);
            });
        }
    });
   

}



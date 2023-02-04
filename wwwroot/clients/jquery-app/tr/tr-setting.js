function uploadLogo(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#compLogo')
                .attr('src', e.target.result)
                .width(300)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function uploadSeal(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#compSeal')
                .attr('src', e.target.result)
                .width(300)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
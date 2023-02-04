﻿function uploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#userPicture')
                .attr('src', e.target.result)
                .width(300)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

SetInputMobile('UserName');
SetInputMobile('Mobile');
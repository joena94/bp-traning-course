$(function () {
    $(".post-form").each(function (index, item) {
        $(item).validate({
            rule: {
                name: "required",
                division: {
                    required: true
                },
                personnel: {
                    required: true
                },
                phone: {
                    required: true,
            
                },
                email: {
                    required: true,
                    email: true
                },
                educational: {
                    required: true
                },
            },
            messages: {
                name: "*입력해주세요",
                division: {
                    required: "*입력해주세요"
                },
                personnel: {
                    required: "*입력해주세요"
                },
                phone: {
                    required: "*입력해주세요",
            
                },
                email: {
                    required: "*입력해주세요",
                    email: "*이메일 형식이 아닙니다"
                },
                educational: {
                    required: "*입력해주세요"
                },


            }
        });
    })
});

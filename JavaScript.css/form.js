
    $(function(){ 
    $("#form").validate({ 
        rules: { 
            "username": { 
                required: true 
            }, 
            "postnumber": { 
                required: true 
            }, 
            "phone": { 
                required: true,
                minlength: 10,
                maxlength: 11
            }, 
            "email": { 
                required: true 
            }
        }, 

        // エラーメッセージ
        messages: { 
            "username": { 
                required: "<span class='warning'>※お名前が未入力です</span><br>" 
            }, 
            "postnumber": { 
                required: "<span class='warning'>※郵便番号が未入力です</span><br>" 
            }, 
            "phone": { 
                required: "<span class='warning'>※電話番号が未入力です</span><br>",
                minlength: "<span class='warning'>※電話番号は固定電話または携帯電話の番号を入力してください</span><br>",
                maxlength: "<span class='warning'>※電話番号は固定電話または携帯電話の番号を入力してください</span><br>"
            }, 
            "email": { 
                required: "<span class='warning'>※メールアドレスが未入力です</span><br>" 
            }
        }, 

        // エラーの場所指定
        errorPlacement: function (error, element) { 
            error.insertBefore(element); 
        }
    });

    // 電話番号は数字だけにする
    $("input[name='phone']").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });
});



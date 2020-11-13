$(function(){
    var myitem = 0;
    var youitem = 0;
    var judge = 0;
    var hantei = document.getElementById('hantei');
    var img1 = document.getElementById('img1');
    var imga = document.getElementById('imga');
    var point1 = document.getElementById('point1');
    var point2 = document.getElementById('point2');
    point1 = 0;
    point2 = 0;
    //アスキーで判定する場合、whichを使う
    $('html').keydown(function(e){
        let Array = [
            "ぐー","ちょき","ぱー"
        ]

        var random = Math.floor(Math.random()*3);
        if(e.which == 65 || e.which == 83 || e.which == 68){
            $('.imga').css('transform','translatex(300px');
            deleat1();
            youitem += 1;
            if(Array[random] == "ぐー"){
                $('.imga').append('<p>ぐー</p>');
                $('.imga').css('transform', 'translatex(-300px)');
            }else if(Array[random] == "ちょき"){
                $('.imga').append('<p>ちょき</p>');
                $('.imga').css('transform', 'translatex(-300px)');
            }else if(Array[random] == "ぱー"){
                $('.imga').append('<p>ぱー</p>');
                $('.imga').css('transform', 'translatex(-300px)');
            }else{
                return;
            }
        }else{
            imga.innerHTML = "";
        }
        

        for(var i = 0; i < 1; i++){
            $('.img1').css('transform','translatex(-300px');
            deleat2();
            if(e.which == 65){
                $('.img1').append('<p>グー</p>');
                $('.img1').css('transform', 'translatex(300px)');
                if(Array[random] == "ぐー"){
                    // $('.hantei').append('<p>あいこ</p>');
                    console.log('あいこ');
                    myitem += 0;
                }else if(Array[random] == "ちょき"){
                    // $('.hantei').append('<p>勝ち</p>');
                    console.log('勝ち');
                    myitem += 1;
                }else{
                    // $('.hantei').append('<p>負け</p>');
                    console.log('負け');
                    myitem -= 1;
                }
                continue;
            }else if(e.which == 83){
                $('.img1').append('<p>チョキ</p>');
                $('.img1').css('transform', 'translatex(300px)');
                if(Array[random] == "ぐー"){
                    // $('.hantei').append('<p>負け</p>');
                    console.log('負け');
                    myitem -= 1;
                }else if(Array[random] == "ちょき"){
                    // $('.hantei').append('<p>あいこ</p>');
                    console.log('あいこ');
                    myitem += 0;
                }else{
                    // $('.hantei').append('<p>勝ち</p>');
                    console.log('勝ち');
                    myitem += 1;
                }
                continue;
            }else if(e.which == 68){
                $('.img1').append('<p>パー</p>');
                $('.img1').css('transform', 'translatex(300px)');
                if(Array[random] == "ぐー"){
                    // $('.hantei').append('<p>勝ち</p>');
                    console.log('勝ち');
                    myitem += 1;
                }else if(Array[random] == "ちょき"){
                    // $('.hantei').append('<p>負け</p>')
                    console.log('負け');
                    myitem -= 1;
                }else{
                    // $('.hantei').append('<p>あいこ</p>');
                    console.log('あいこ');
                    myitem += 0;
                }
                continue;
            }else{
                alert('決められたキーを押してください');
                return;
            }
        }
        for(var i=0; i < myitem; i++){
            deleat3();
            if(myitem == 3){
                $(hantei).append('<p class="aaa">勝ち</p>');
                alert('あなたの勝ちです');
                return;
            }
        }
        for(var i=0; i > myitem; i--){
            deleat3();
            if(myitem == -3){
                $(hantei).append('<p class="aaa">負け</p>');
                alert('あなたの負けです');
                return;
            }
        }
        if(myitem == 0 || myitem <= 2 || myitem >= 2){
            deleat3();
            $(hantei).append('<p class="aaa">判定まち</p>');
            return;
        }
    })

    function deleat1(){
        imga.innerHTML = "";
    }
    function deleat2(){
        img1.innerHTML = "";
    }
    function deleat3(){
        hantei.innerHTML = "";
    }
});
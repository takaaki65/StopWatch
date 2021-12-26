$(function(){
    var time = 0;
    var mid = 0;
    var now;

    var minTime = 0;

    var count;

    var min = $("#min");
    var sec = $("#sec");

    var start = $("#start");
    var stop = $("#stop");
    var reset = $("#reset");

    //スタートボタン処理
    start.click(function(){
        now = new Date();//現在の時刻
        count = setInterval(counter,10);
        toggle();
        reset.css("color","#FF9194");
    });

    //ストップボタン処理
    stop.click(function(){
        mid += (new Date() - now)/1000;
        clearInterval(count);
        toggle();
        reset.css("color","#FF9194");
    });

    //resetボタン処理
    reset.click(function(){
        mid = 0;
        min.html("00");
        sec.html("00");
        reset.css("color","gray");
        reset.prop("disabled",true);
    });

    //時間計算
    function counter() {
        time = mid + ((new Date() - now)/1000);
        
        //秒から分への切り替わり
        if(time > 60){
            mid = 00;
            minTime ++;
            now = new Date();
            time = 0;
            sec.html();
        }

        //10秒までの表示
        if(time < 10){
            sec.html("0"+time.toFixed(2));
        }else{
            sec.html(time.toFixed(2));
        }
        min.html(minTime);
    };

    //ボタンの切り替え
    function toggle(){
        if(!start.prop("disabled")){
            start.prop("disabled",true);
            stop.prop("disabled",false);
            reset.prop("disabled",true);
        }else{
            start.prop("disabled",false);
            stop.prop("disabled",true);
            reset.prop("disabled",false);
        }
    }

});
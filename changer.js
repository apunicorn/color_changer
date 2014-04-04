$(function() {
    var speed = '400';
    var changed;
    var originalColor = 'green';
    var newColor = 'red';

    function switcher(color){
        $('#green').animate({
                        "opacity" : "0.5"
                    });
       setTimeout(function(){
                    $('#green').css({
                        "background-color" : color
                    });
                }, speed);
        $('#green').animate({
                            "opacity" : "1"
                        });
    };

    function colorChanger(){
        if(changed){
            switcher(originalColor)
            changed = false;
        } else {
             switcher(newColor);
            changed = true;
        }
        };

    $('#changer').click(function(){
        colorChanger();
    });
 });
// var cpuNumber = Math.floor((Math.floor() * 120) + 19);
// var gemValue = Math.floor((Math.floor() * 12) + 1);
// var yourScore = 0;
// var numberOfWins = 0;
// var numberOfLoses = 0;



var redGemValue = Math.floor((Math.floor() * 12) + 1);
 var blueGemValue = Math.floor((Math.floor() * 12) + 1);
 var greenGemValue = Math.floor((Math.floor() * 12) + 1);
 var orangeGemValue = Math.floor((Math.floor() * 12) + 1);



// };

$(document).ready(function(){

    $.fn.myFunction = function(temp){ 

        // yourScore = (temp+yourScore);
        // if (yourScore === cpuNumber) {
        //     numberOfWins++;
        // } else if (yourScore > cpuNumber) {
        //     numberOfLoses++;
        // }else

        alert(temp);
    }

    $("#blue").click(function(){

        $.fn.myFunction(blueGemValue);

    });

    $("#green").click(function(){

        $.fn.myFunction(greenGemValue);

    });

    $("#orange").click(function(){

        $.fn.myFunction(orangeGemValue);

    });

    $("#red").click(function(){

        $.fn.myFunction(redGemValue);

    });

});

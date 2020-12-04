$(document).ready(function() {
    
    var srbijaVreme = $(".srbija");
    var japanVreme = $(".japan");
    var datum = new Date();
    var sekunde = datum.getSeconds();
    var minuti = datum.getMinutes();
    var sati = datum.getHours();

    $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
    $(".japan").html(sati + 8 + ":" + minuti+ ":" + sekunde);

    setInterval(function() {
        if(sekunde < 10) {
            $(".srbija").html(sati + ":" + minuti+ ":0" + sekunde);
            $(".japan").html(sati + 8 + ":" + minuti+ ":0" + sekunde);
        }
        if(minuti < 10) {
            $(".srbija").html(sati + ":0" + minuti+ ":" + sekunde);
            $(".japan").html(sati + 8 + ":0" + minuti+ ":" + sekunde);
        }
        if(minuti < 10 && sekunde < 10) {
            $(".srbija").html(sati + ":0" + minuti+ ":0" + sekunde);
            $(".japan").html(sati + 8 + ":0" + minuti+ ":0" + sekunde);
        }
        if(sekunde === 60){
            minuti++;
            sekunde = 0;
        }
        if(minuti === 60) {
            sati++;
            minuti = 0;
            sekunde = 0;
        }
        switch (sati) {
            case 16:
                $(".japan").html("00" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 17:
                $(".japan").html("01" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 18:
                $(".japan").html("02" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 19:
                $(".japan").html("03" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 20:
                $(".japan").html("04" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 21:
                $(".japan").html("05" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 22:
                $(".japan").html("06" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 23:
                $(".japan").html("07" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            case 24:
                $(".japan").html("08" + ":" + minuti+ ":" + sekunde);
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
            break;
            default:
                $(".srbija").html(sati + ":" + minuti+ ":" + sekunde);
                $(".japan").html(sati + 8 + ":" + minuti+ ":" + sekunde);
                break;
        }
        sekunde++;
    }, 1000);

    $(window).scroll(function(){
        var visina = $(window).scrollTop();
  
        if (visina > 200) {
            $("nav").addClass("nova-nav");
        } else{
            $("nav").removeClass("nova-nav");  	
        }

    });

    $(".nav-dugme").click(function() {
        $("nav ul").slideToggle(200);
    });

    var sirina = $(window).width();
    
    if(sirina < 450)  {
        $(".srbija-div p").html("Srbija:");
        $(".japan-div p").html("Japan:");
    }

});
// Rifate (con immagini a piacere e con il vostro gusto grafico) lo slider di immagini in jQuery come l'abbiamo visto stamattina.
// Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
// BONUS: cliccando su un pallino, si attiva l'immagine corrispondente. Ad esempio: sto visualizzando la prima immagine, clicco sul quarto pallino e si attiva direttamente la quarta immagine (oltre al pallino corrispondente ovviamente!)


// Creo lo slider e mostro le immmagini nascoste dal display=none

    $(document).ready(function(){
    	$('.imageslide:first').show();
    	var current_img = 0;
    	$('.pulsanti>span:first').addClass('pink');

// Clicco sul primo pallino che cambia colore e trasparenza al click
// individuo l'indice tramite la funzione eq e lo cambio progressivamente
    	$('.pallino').click(function(){
    		$('.pallino').eq(current_img).removeClass('pink');
    		$(this).addClass("pink");
    		$('figure').eq(current_img).hide();
    		current_img =+ $(this).data('num')-1;
    		$('figure').eq(current_img).fadeIn();
    	});

    	$('.next').click(function(){
    		$('.imageslide').eq(current_img).hide();
    		$('.pallino').eq(current_img).removeClass('pink');
    		if(current_img < 4)
    			current_img++;
    		else
    			current_img = 0;
    		$('.imageslide').eq(current_img).fadeIn();
    		$('.pallino').eq(current_img).addClass('pink');
    	});
// Alterno la visualizzazione delle foto in base al click e cambio pallino
    	$('.prev').click(function(){
    		$('.imageslide').eq(current_img).hide();
    		$('.pallino').eq(current_img).removeClass('pink');
    		if(current_img > 0)
    			current_img--;
    		else
    			current_img = 4;
    		$('.imageslide').eq(current_img).fadeIn();
    		$('.pallino').eq(current_img).addClass('pink');
    	});


});

$(document).ready(function() {

	$('.getQuoteButton').click(function(e) {
		e.preventDefault();	

		var textButton = ["One more?","Click again!", "More, more, more!", "Get another one", "Another great one?"];
		var randomText = textButton[Math.floor(Math.random()*textButton.length)];		

		$.getJSON('js/quotes.json', function(data) {	
			var randomQuote =  Math.floor( Math.random() * data.quotes.length);	
			var item = data.quotes[randomQuote];
	        quote = '<p class="quote"><span class="block">"</span>' + item.quote + '<span class="block">"</span></p>';
	        titleYear = '<p class="title">' + item.title + '<span> (' + item.year + ')</span></p>';
	        character = '<p class="character"> - ' + item.character + ' - </p>';
	        $("#resultado").html('').css("border-bottom", "3px dashed #4F4F4F"); 
	        $(quote  + character + titleYear).fadeIn().appendTo("#resultado"); 
			$(".getQuoteButton").html(randomText); 	            
		});

	});

});






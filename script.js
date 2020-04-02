$(document).ready(function(){

	console.log('script loaded!');

	//If clicked true,change compress the 'type your name' text.
   //  $('.True').click(function(){
   //     $('').show();
   // });
   let count = 0;
   $('input[type=radio]').on('change', function() {
   		console.log('input changed!');
   		let value = $(this).val();

   		if (value == "True"){
   			console.log("True is selected");
   			count++;
   			
   			weightValue = count*1000;

   			let setting = "'wght'" + weightValue;

   			$('.typehere').css('font-variation-settings', setting);
   		}
   	
      // alert($('input[name=radioName]:checked', '#myForm').val()); 
   });

});
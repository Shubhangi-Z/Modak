$(document).ready(function(){
    $('#submit').click(function(){
         var number = $('#phone').val();
         //check if number
         if($.isNumeric(number)){
             console.log('Great')
         }else{
            alert("Phone no should be numeric")
         }
    });
});
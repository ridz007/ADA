

  $(document).ready(function(){
    $('.emojiButtons').click(function() { 
        $('#userName').blur();
        this.parentElement.style.backgroundColor = 'green';
        for (var i=0;i < $(this).parent().siblings().length; i++) {
            $(this).parent().siblings()[i].style.backgroundColor = '';
        }
         // alert('You have selected ' + this.alt); remove this in case the visual player dsnt say so
        
        });
    $("#email").click(function(e){
        var email = $("#email").val();
        if (email == "") {
            alert('This is a mandatory field');
            
        }
      });

      $("#userName").click(function(e){
        var userName = $("#userName").val();
        if (userName == "") {
            alert('This is a mandatory field');
            
        }
      });


      $("#submitButton").click(function(){
            alert('Thanks for the feedback');
      });
});
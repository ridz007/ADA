

  $(document).ready(function(){
    $('.emojiButtons').click(function() { 
        $('#userName').blur();        
        for (var i=0;i < this.parentNode.children.length; i++) {
            this.parentNode.children[i].style.backgroundColor = '';
            
        }
        this.style.backgroundColor = 'green';  
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
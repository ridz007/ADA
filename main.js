

  $(document).load(function(){
    $("#email").click(function(e){
        var email = $("#email").val();
        if (email == "") {
            alert('Email address is mandatory');
        }
      });

      $("#userName").click(function(e){
        var userName = $("#userName").val();
        if (userName == "") {
            alert('Username is mandatory');
        }
      });

      $("#email").blur(function(e){
        var email = $("#email").val();
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!filter.test(email)) {
        alert('Please enter a valid email address');
        }
      });

      $("#submitButton").click(function(){
            alert('Thanks for the feedback');
      });
});
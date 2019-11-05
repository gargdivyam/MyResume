<script>
  function formValidtor()
  {
    var firstname = document.getElementById("firstname");
    var emailss = document.getElementById("emails");
    var phone = document.getElementById("phone");
    if(isAlphabet(firstname, "Please enter only letters for your name"))
    {
      if(emailValidator(emailss, "Please enter a valid email address"))
      {
        if(lengthRestriction(phone, 10))
        {
          return true;
        }
      }
    }
    return false;
  }
  function isAlphabet(elem, helperMsg)
  {
     var alphaExp = /^[a-zA-Z]+$/;
      if(elem.value.match(alphaExp))
      {
          return true;
         }
         else
         {
             alert(helperMsg);
               elem.focus();
                 return false;
       }
  }
  function emailValidator(elem, helperMsg)
  {
     var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      if(elem.value.match(emailExp))
      {
          return true;
      }
      else
      {
          alert(helperMsg);
            elem.focus();
              return false;
      }
    }
    function lengthRestriction(elem, max)
    {
      var abc=/6[0-9]+$/;
       var uInput = elem.value;
        if(uInput.length == max)
        {
          if(elem.value.match(abc))
          {
            return true;
          }
        }
        else
        {
            alert("Please enter a valid phone number");
              elem.focus();
                return false;
        }
    }
</script>

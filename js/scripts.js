
// Back-end logic (Business Interface)
$(document).ready(function(event){
  $("#myform").submit(function(event){
    var total = 0;
    var ans1 = $("input:radio[name=question1]:checked").val();
    if(ans1 === "prepend()"){
      total += 10;
    }
    var ans2 = $("input:radio[name=question2]:checked").val();
    if(ans2 === "lowerCamelCase"){
      total += 10;
    }
    var ans3 = $("input:radio[name=question3]:checked").val();
    if(ans3 === "Navigator"){
      total += 10;
    }
    var ans4 = $("input:radio[name=question4]:checked").val();
    if(ans4 === "A set of characters in quotation marks"){
      total += 10;
    }
    var ans5 = $("input:radio[name=question5]:checked").val();
    if(ans5 === "-"){
      total += 10;
    }
    var ans6 = $("input:radio[name=question6]:checked").val();
    if(ans6 === "A framework used to make websites look pretty"){
      total += 10;
    }
    var ans7 = $("input:radio[name=question7]:checked").val();
    if(ans7 === "js"){
      total += 10;
    }
    var ans8 = $("input:radio[name=question8]:checked").val();
    if(ans8 === "md"){
      total += 10;
    }
    var ans9 = $("input:radio[name=question9]:checked").val();
    if(ans9 === "Container"){
      total += 10;
    }
    var ans10 = $("input:radio[name=question10]:checked").val();
    if(ans10 === "bg-success"){
      total += 10;
    }
    // Front-end (User Interface)
    alert(total);
    event.preventDefault();
  });
});

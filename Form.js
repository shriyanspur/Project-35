class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("A SURVEY - USING PLASTICS IN SCHOOLS");
      title.position(65, 0);


      var eText = createElement('text');
      eText.html("Please Enter Your Email :");
      eText.position(50, 90);
      
      var input = createInput("Email");


      var q1 = createElement('text');
      q1.html("1.	Should we stop carry belongings in plastic bags in Schools ?");
      q1.position(50, 150);

      /*var a1 = createCheckbox("Yes");
      var a2 = createCheckbox("No");*/

      //document.getElementById("radioButtonID").checked = false;
       //uncheck a radio button 
       a1.getElementById("radioButtonID").checked = true;
        //check a radio button
      

      var q2 = createElement('text');
      q2.html("2.	Should the selling of food items packed in plastic be prohibited in school canteens ?");
      q2.position(50, 250);

      //var a1 = createCheckbox("Yes");
      //var a2 = createCheckbox("No");

      
      //document.getElementById('submit');
        //var radiobox (type = 'radio');
        //radiobox.id = 'contact';
        //radiobox.value = 'email';
      
        
      
      //var radio1 = createRadioBox("Yes");

      /*var a3 = createRadio('text');
      a3.type = 'radio';
      a3.value ='Yes';
      a3 = true;*/
      //a3.setAttribute('type','radio');
      //a3.setAttribute('Yes', Yes);
      //a3.html(label)
      //var a3 = createRadio("Yes");
      //var Input = (type="radio", id="Yes");

      //var a4 = createRadio('No');
      //a3.id("Yes");
      //4.

      
      var q3 = createElement('text');
      q3.html("3.	A single plastic bag takes ____ years to degrade.");
      q3.position(50, 350);


      /*var a5 = createCheckbox("5");
      var a6 = createCheckbox("250");
      var a7 = createCheckbox("1000");*/

      /*var y2 = createCheckbox("Yes");
      var n2 = createCheckbox("No");

      var op1 = createCheckbox("100");
      var op2 = createCheckbox("500");
      var op3 = createCheckbox("1000");
      var op4 = createCheckbox("More");*/

      var button = createButton('Submit');
      

      
      input.position(220, 90);
      //a1.position();
      a5.position(70, 370);
      a6.position(70, 390);
      a7.position(70, 410);
      button.position(250, 460);
  
      button.mousePressed(function(){
        title.hide();
        eText.hide();
        q1.hide();
        q2.hide();
        q3.hide();
        input.hide();
        a5.hide();
        a6.hide();
        a7.hide();
        button.hide();
  
        var email = input.value();
        
        userCount+=1;
        user.update(email);
        user.updateCount(userCount);
        var greeting = createElement('h3');
        greeting.html("Thank You for your response");
        greeting.position(150, 160)
      });
  
    }
  }
  
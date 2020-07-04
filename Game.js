class Display {
    constructor(){}
    
    getState(){
      var formStateRef  = database.ref('formState');
        formStateRef.on("value",function(data){
          formState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        formState: state
      });
    }
  
    start(){
      if(formState === 0){
        user = new User();
        user.getCount();
        form = new Form()
        form.display();
      }
    }
  }
  
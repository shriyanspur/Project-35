class User {
    constructor(){}
  
    getCount(){
        var userCountRef = database.ref('userCount');
        userCountRef.on("value",function(data){
        userCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        userCount: count
      });
    }
  
    update(email){
      var userIndex = "user" + userCount;
      database.ref(userIndex).set({
        email:email
      });
    }
  }
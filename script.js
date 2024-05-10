
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var hellospeaker = "Hello";
    var bye = "bye "
    
    for (var i = 0; i < names.length; i++) {      
      var firstLetter = names[i].charAt(0).toLowerCase();   
       if (firstLetter=='j') {
         console.log(hellospeaker+" "+names[i]);
        } else {
         console.log(bye+" "+ names[i]);
        }
    }
    })();
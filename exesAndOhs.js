function exesAndOhs(word){
    var o = word.split("o").length -1;
    var x = word.split("x").length -1;
    var O = word.split("O").length -1;
    var X = word.split("X").length -1; 
    var totalx = X+x;
    var totalo = O+o
    if (totalx == totalo){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  //https://codepen.io/dave-torr/pen/ZEYvOXx codepen tests
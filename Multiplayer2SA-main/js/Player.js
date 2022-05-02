class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
   getCount(){
  var  playerCountref=databse.ref("playerCount")
  playerCountref.on("value",(data)=>{
    playerCount=data.val()
  })
  }
  updateCount(count){
  databse.ref("/").update({
    playerCount:count
  })
  }
 }


class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'Up';
    this.waitingList;
    this.passengers = [];
    this.timer;
  }

  start() { 
    this.timer = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
   }

// Uodate function should  display 
// The current status of the elevator by calling the log function. 
  update() {
    if (this.direction ==='Up'){
      this.floorUp();
    }
    if (this.direction === 'Down'){
      this.floorDown();
    }
    
    console.log(`direction: ${this.direction}, floor: ${this.floor}`)
   }

  _passengersEnter() {
  // When the elevator arrives to any floor, it should check the waitingList array to 
  // verify if a person is waiting there.
  this.waitingList.forEach((person, index) => {
    if(person.originFloor === this.floor) {
  // add the person into the passengers array
      this.passengers.push(person);
  // Add the destination floor of the passenger to the elevator requests
      this.requests.push(person.destinationFloor);

  //  delete the passenger from the waitingList
      this.waitingList.splice(index, 1);

   // show a message to indicate what just happens:
      console.log(`${person.name} has entered the elevator`);   
    }
  });
   }
  _passengersLeave() { }
 //////////// 
  floorUp() {
    if (this.floor !== 10){
      return this.floor++;
    } else {
      this.direction = 'Down';
    }
   }


  floorDown() {
    if (this.floor !== 0){
      return this.floor--; 
    } else {
      this.direction = 'Up'
    }
   }
  
 
   call(person) {
 // When a person calls the elevator (the call function is executed), we will add 
 // that person into the waitingList array.  
      this.waitingList.push(person)
 // Also, add the (originFloor) to the requests array to let the elevator know where 
 // it has to stop to pick the passenger up.
      this.requests.push(person.originFloor)
    }

  // log() {
  //   console.log(`direction: ${this.direction}, floor: ${this.floor}`)
  // }
}

module.exports = Elevator;

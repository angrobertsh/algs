class temperatureLog{

  constructor(){
    this.runningLog = []; // [temperature, time]
    this.maxTemp = 0;
    this.last24Avg = 0;
    this.last24Max = 0;
//     this.lastLoggedTime also keeps index of last element ejected
  }

  log(temperature, time){
    if(this.maxTemp < temperature){
      this.maxTemp = temperature;
    }

    if(this.runningLog.length < 3){
      this.last24Avg = ((this.last24Avg * this.runningLog.length) + temperature) / (this.runningLog.length + 1);
    } else {
      this.last24Avg -= this.runningLog[this.runningLog.length-(3)] / (3)
      this.last24Avg += temperature/(3);
    }

    if(temperature > this.last24Max){
      this.last24Max = temperature;
    }


    if(this.runningLog.length > 3){
      if(this.runningLog[this.runningLog.length-3] === this.last24Max){
//       find new max if we eject the max
        var newMax = 0;
        console.log("We ejected "+ this.last24Max +" and will recompute last24Max");
        var i = this.runningLog.length-2;
        while(i < this.runningLog.length){
          if(this.runningLog[i] > newMax){
            newMax = this.runningLog[i];
          }
          i += 1;
        }
        this.last24Max = newMax
        if(temperature > newMax){
          this.last24Max = temperature
        }
      }
    }

//     ejecting time values beyond 24 hours whenever log is called
//     do a calculation every hour on the side which updates last24avg and last24max
//     see how many elements you kick out, divide by new number
//     count number of elements since last log that exist within difference in last time vs this time - 24 hours
//     do calculation based on that number (by adding weighted temperature)

//     time
//     runninglog[runningLog.length-1][1]
//     window = time-24 hours, ^ - 24 hours
//


    this.runningLog.push(temperature);
  }

  getAverageLast24Hours(){
    return this.last24Avg;
// time = time.now
//     while time > time.now - 24 hours
//     get elements
//     average them
    // index lastWindowStartIndex (length - 24 * 60 * 60)

  }

  getMaxLast24Hours(){
    return this.last24Max;
  }

}

const fillIntervals = (collectedIntervals, desiredInterval) => {
  let newIntervals = [];
  // Sort collectedIntervals so we know where desiredInterval should be
  collectedIntervals.sort((a, b) => ((a[0] < b[0]) ? -1 : 1));

  // Figure out where desiredInterval starts--before the first collectedInterval greater than desiredInterval's start
  let i = 0;
  let start = 0;
  while(i < collectedIntervals.length){
    if(desiredInterval[0] > collectedIntervals[i][0]){
      start += 1;
    }
    i += 1;
  }

  // See if desiredInterval starts within a previous range, or it starts between a range
  if(collectedIntervals[start-1]){
    if(collectedIntervals[start-1][1] > desiredInterval[0]){
      // It starts within an interval
      // newIntervals.push([collectedIntervals[start-1][1], collectedIntervals[start][0]]);
    } else {
      // It starts between intervals
      newIntervals.push([desiredInterval[0], collectedIntervals[start][0]]);
    }
  } else {
    // It starts before the first interval
    newIntervals.push([desiredInterval[0], collectedIntervals[start][0]]);
  }

  // Find where the desiredInterval ends--where the desiredInterval end is less than the interval end
  let end = start;
  i = start;
  while(i < collectedIntervals.length){
    if(desiredInterval[1] > collectedIntervals[i][1]){
      end += 1;
    }
    i += 1;
  }

  // Push the missing intervals between start and end
  while(start < end-1){
    newIntervals.push([collectedIntervals[start][1], collectedIntervals[start+1][0]]);
    start += 1;
  }

  // See if desiredInterval ends within a range, or it ends between a range/outside of the array
  if(collectedIntervals[end]){
    if(collectedIntervals[end][0] < desiredInterval[1]){
      // It ends within an interval
      newIntervals.push([collectedIntervals[end-1][1], collectedIntervals[end][0]]);
    } else {
      // It ends between intervals
      newIntervals.push([collectedIntervals[end-1][1], desiredInterval[1]]);
    }
  } else {
    // It ends outside of all the intervals
    newIntervals.push([collectedIntervals[end-1][1], desiredInterval[1]]);
  }

  return newIntervals
}

//////////-- Exercise #1 

/// Part  1 

let waiting = ['Sofia','David','Juan'];
console.log(waiting);


/// Part 2 
waiting.push('Sara','Augustin')
console.log(waiting);











///////== Exercise #3 


////// Part 2 
const oddNumber = (n) => {
    let count = 1;
    while (count <= n) {
      if (count%2 !== 0) { // false
        console.log(count);
      }
      count++
    }
}
  oddNumber(100);
  

///// Part 3
const printBracket =(n) => {
    let count = 1;
    while (count <=n){
      console.log([`${count}`]);
      count++;
    }
}
printBracket(6)


//// Part 4
const sum = (x) => {
    let count = 0;
    let result = 0;
    while (count <=x) {
      result += count
      count++
    }
    return result;
  }
  
sum(100)




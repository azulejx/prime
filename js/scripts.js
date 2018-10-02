numbers = [2,3,4,5,6,7,8,9,10];
numbersPrime = [];
prime = 2;

for (var prime = 2; prime < 11; prime++) {
  if(prime % 2 === 0 && prime != 2){
    numbers.splice(numbers.indexOf(prime), 1);
  }
  console.log(numbers)

};

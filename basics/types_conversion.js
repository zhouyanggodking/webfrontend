if ([] == false) { // true  0 == 0
  console.log('[] == false')
}

if ({} == false) { // false, both converting to number:  NaN == 0
  console.log('{} != false')
}

if ([]) { // true, non object(converting to boolean) is true
  
}

if ([1] == [1]) { // false,  address comparison

}
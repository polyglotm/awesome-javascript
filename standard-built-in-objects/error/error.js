function errorTest() {
  let count1 = 0;
  let count2 = 0;
  
  try {
    count1 += 1;
    throw new Error('some error');
    count2 += 1;
  } catch (e) {
    console.log(e);
    // [Error: some error]
    
    console.log(`count1: ${count1}`);
    // count1: 1
    console.log(`count2: ${count2}`);
    // count2: 0
  }
}

errorTest();

# [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)


## Properties
- Error.prototype.columnNumber
- Error.prototype.fileName
- Error.prototype.lineNumber
  
- Error.prototype.message
- Error.prototype.name
- Error.prototype.stack

## Methods
- Error.prototype.toSource()
- Error.prototype.toString()


## Examples
```javascript
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
```

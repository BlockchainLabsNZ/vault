const obj1 = {
  a: {
    b: {
      prop: 'b'
    }
  }
}

// Create new variable, use `obj1` structure as prototype
const new1 = Object.create(obj1)

// Still empty
console.log(new1)              // {}

// but could access properties from prototype
console.log(new1.a)            // { b: { prop: 'b' } }

// let's change that prototyped props
new1.a.b = { newProp: 'overridden' }

// still empty
console.log(new1)              // {}

// but prototype has changed :(
console.log(obj1)              // { a: { b: { newProp: 'overridden' } } }


// Let's try restore our original object..
// const obj1 = { ... }        // Ops! SyntaxError: Identifier 'obj1' has already beed declared

// We have to define new variable
const obj2 = {
  a: {
    b: {
      prop: 'b'
    }
  }
}

// let's copy it to new2
const new2 = Object.assign({}, obj2)

// nice all new variable
console.log(new2)              // { a: { b: { prop: 'b' } } }

// let's change it!
new2.a.b = { newProp: 'overridden' }

// sweet!
console.log(new2)              // { a: { b: { newProp: 'overridden' } } }

// WTF? Original has also been changed. :(
console.log(obj2)              // { a: { b: { newProp: 'overridden' } } }



// JSON serialization – works well with data properties, 
// but not with functions or undefined ones. More details here:
// https://flaviocopes.com/how-to-clone-javascript-object/#json-serialization
const new3 = JSON.parse(JSON.stringify(obj2))

// and change 'b' prop
new3.a.b = { prop: 'b' }
console.log(new3)             // { a: { b: { prop: 'b' } } }

// original object's props are still unchanged
console.log(obj2)             // { a: { b: { newProp: 'overridden' } } }

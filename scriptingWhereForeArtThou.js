// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source){
//   //console.log(Object.keys(source))
//   let srcKey = Object.keys(source) //'last'
//   let src = source[srcKey] //Capulet
//   let result = collection.filter(i => {
//     if (i[srcKey] === src){
//       //filter collection so i['last'] equals Capulet
//       console.log(`Matching item from collection: ${i[srcKey]}\nSource item to match with: ${src}`)
//       return i
//     }
//   })
//   if (result.length >){
//     //return true if matches array has length
//     //console.log(result[0][srcKey])
//     return true
//   }
//   //return false if matches array has no length
//   return false
// }

// function whatIsInAName(collection, source) {
//   var srcKeys = Object.keys(source);
//   return collection.filter(function(obj) {
//     for (var i = 0; i < srcKeys.length; i++) {
//       if (
//         !obj.hasOwnProperty(srcKeys[i]) ||
//         obj[srcKeys[i]] !== source[srcKeys[i]]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// function whatIsInAName(collection, source) {
//   let srcKeys = Object.keys(source);

//   return collection.filter(function(obj) {
//     for (let i = 0; i < srcKeys.length; i++) {
//       if (
//         !obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// function whatIsInAName(collection, source) {
//   var srcKeys = Object.keys(source);

//   return collection.filter(function(obj) {
//     return srcKeys.every(function(key) {
//       return obj.hasOwnProperty(key) && obj[key] === source[key];
//     });
//   });
// }

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   
  if (Array.isArray(obj)) {
    var results = [];
  
  for(var i = 0; i < obj.length; i++) {
    if(typeof obj[i] === 'string'){
       results.push(stringifyJSON(obj[i]));  
    }
    return '[' + result.join(',') + ']'
  }

  }
   return '' + obj;
};

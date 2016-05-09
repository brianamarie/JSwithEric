describe('About Javascript Primitives, Level One Start Here', function() {

//Welcome to Introductory Functions! These are here to test your understanding of core Javascript
//principles. Specifically, those concerning Functions, Strings, and Arrays. 


//The first, Functions. Here, let's consider the rules about functions. 

  var identity = function(val){
    return val;
  }

  var concat = function(string1, string2){
    return string1 + string2;
  }

  var push = function(array, args){
    var newArr = array;
    newArr[newArr.length] = args;
    if (array === newArr){
      return array.length;
    }
  }


//Tests 
  describe('the Function: Identity', function() {
    var uniqueObject = {};
    it('This function should return whatever value is passed into it', function() {
      expect(_.identity(1)).toEqual(identity(1))
      expect(_.identity('string')).toEqual('string')
      expect(identity(false)).toEqual(false)
      expect(identity(uniqueObject)).toEqual(uniqueObject)
    })
  });

  describe('the Function: Concat', function() {
    it('This function should return whatever value is passed into it', function() {
      expect(concat("Hello", "Goodbye")).toEqual("Hello".concat("Goodbye"))
    })
  }); 

  describe('the Function: Push', function() {
    it('This function should return whatever value is passed into it', function() {
      expect(push([1, 2, 3], 4)).toEqual([1, 2, 3].push(4))
    })
  }); 

});
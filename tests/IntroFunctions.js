describe('About Introductory Functions', function() {

//Welcome to Introductory Functions! These are here to test your understanding of core Javascript
//principles. Specifically, those concerning Functions, Strings, and Arrays. 
  

//Identity should take one value as a parameter, and return that same value.
  var identity = function(){
    //Your Code Here
  }

//Concat should take 2 strings as parameters, and return one combined string. If you're stuck, ping me.
  var concat = function(){
    //Your Code Here
  }

//First should take an array as a parameter, and return the first value of the array.
  var first = function(){
    //Your Code Here
  }

//First should take an array as a parameter, and return the last value of the array. 
//Hint: Look up Javascript's Native Function, "Length", to get a sense of how to do this. 
  var last = function(){
    //Your Code Here
  }


//Tests 
  describe('the Function: Identity', function() {
    var uniqueObject = {};
    it('This function should return whatever value is passed into it', function() {
      expect(identity(1)).toEqual(_.identity(1))
      expect(identity('string')).toEqual('string')
      expect(identity(false)).toEqual(false)
      expect(identity(uniqueObject)).toEqual(uniqueObject)
    })
  });

  describe('the Function: Concat', function() {
    it('This function should return the combination of two strings', function() {
      expect(concat("Hello", "Goodbye")).toEqual("Hello".concat("Goodbye"))
    })
  }); 

  describe('the Function: First', function() {
    it('This function should return the first item from a passed in Array', function() {
      expect(first([3, 4, 5])).toEqual(_.first([3, 4, 5]));
    })
  }); 

  describe('the Function: Last', function() {
    it('This function should return the last item from any passed in Array', function() {
      expect(last([3, 4, 5])).toEqual(_.last([3, 4, 5]));
    })
  }); 

});
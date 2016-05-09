var _; //globals

describe("About Writing Higher Order Functions", function() {

var ready = "no"

//Write the Function Each. Refer to "LearningAboutHOF" for reference. 

var each = function(array, callback){
  //Your Code Here
}

//Write the Function Map. Refer to "LearningAboutHOF" for reference. 
//Huge Hint. Map can use each, to solve, but isn't necessary. 

var map = function(array, callback){
  //Your Code Here
}

//Write the Function Filter. Refer to "LearningAboutHOF" for reference. 

var filter = function(array, callback){
  //Your Code Here
}

//Write the Function All. Refer to "LearningAboutHOF" for reference. 

var all = function(array, callback){
  //Your Code Here
}

//Write the Function Reduce. Refer to "LearningAboutHOF" for reference. 

var reduce = function(array, callback, startValue){
  //Your Code Here
}


//Write the Function Any. Refer to "LearningAboutHOF" for reference. 

var any = function(array, callback){
  //Your Code Here
}

//Write the Function Flatten. Refer to "LearningAboutHOF" for reference. 

var flatten = function(array){
  //Your Code Here
}

//Write the Function Partition. 
//Return Value: Split array into two arrays: one whose elements all satisfy predicate and 
//one whose elements all do not satisfy predicate.
//_.partition([0, 1, 2, 3, 4, 5], isEven);
//=> [[1, 3, 5], [0, 2, 4]]

var partition = function(array, predicate){
  //Your Code Here
}



//Tests 
  it("Should be Ready", function() {
    expect(ready).toEqual("YES!");
  });

  it("Should Write Each", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    expect(_(numbers).forEach(isEven)).toEqual(each(numbers, isEven));
  });

  it("Should Write Map", function () {
    var numbers = [1, 2, 3];

    expect(_(numbers).map(function(x) { return x + 1 })).toEqual(map(numbers, function(x) { return x + 1 }));
  });

  it("Should Write Filter", function () {
    var numbers = [1,2,3];

    expect(_(numbers).filter(function (x) { return x % 2 !== 0 })).toEqual(filter(numbers, function (x) { return x % 2 !== 0 }));
  });


  it("Should Write All", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toEqual(all(onlyEven, isEven));
    expect(_(mixedBag).all(isEven)).toEqual(all(onlyEven, isEven));
  });

//Bonus Questions

  it("Should Write Reduce", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(_(numbers).reduce(function(memo, x) { return memo + x }, 0)).toEqual(reduce(numbers, function(memo, x) { return memo + x }, 0));
  });

  it("Should Write Any" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toEqual(any(onlyEven, isEven));
    expect(_(mixedBag).any(isEven)).toBe(any(onlyEven, isEven));
  });


  it("Should Write Flatten", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual(flatten([ [1, 2], [3, 4] ]));
  });

   it("Should Write Partition", function() {
    var array = [0, 1, 2, 3, 4, 5];
    var isOdd = function(x) { return x % 2 !== 0 };
    expect(_(array).partition(isOdd)).toEqual(partition(array, isOdd));
  });

});

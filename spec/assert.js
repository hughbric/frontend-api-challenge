let assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('%c' + "Test passed, " + assertionToCheck + " is truthy", 'color: green');
    }
  },
};

let assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('%c' + "Test passed, " + assertionToCheck + " is truthy", 'color: green');
    }
  },

  isEqual: function(firstItem, secondItem) {
    if (firstItem !== secondItem) {
      throw new Error("Assertion failed: '" + firstItem + "' & '" + secondItem + "' are not equal");
    } else {
      console.log('%c' + "Test passed, " + firstItem + " is equal to " + secondItem, 'color: green');
    }
  },
};

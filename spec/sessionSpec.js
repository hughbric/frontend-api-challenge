var sessionSpec = {
  theGetUserIdMethod: function() {
    // checks if method exists and can assign a value
    var session = new Session(1, 'valid_key');
    assert.isEqual(session.getUserId(), 1);
  },

  theGetSessionKeyMethod: function() {
    // checks if method exists and can assign a value
    var session = new Session(1, 'valid_key');
    assert.isEqual(session.getSessionKey(), 'valid_key');
  }
}

sessionSpec.theGetUserIdMethod();
sessionSpec.theGetSessionKeyMethod();

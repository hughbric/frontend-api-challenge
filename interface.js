window.onload = function() {
  let session = null;
  listPeeps();

  //  PEEPS

  function listPeeps() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps');
    request.onload = function() {
      const data = JSON.parse(this.response);

      data.forEach(peep => {
        const article = Peep.format(peep);
        $('#peep-list').append(article);
      });
    };
    request.send();
  }

  $('#post-a-peep').click(function(event) {
    event.preventDefault();
    const text = document.getElementById('peep-text').value;
    const dataString = {"peep": {"user_id": session.getUserId(), "body": `${text}`}};

    const request = new XMLHttpRequest();
    request.open('POST', 'https://chitter-backend-api.herokuapp.com/peeps');
    request.setRequestHeader('Authorization', `Token token=${session.getSessionKey()}`);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      listPeeps();
      document.getElementById('peep-text').value = '';
    };
    request.send(JSON.stringify(dataString));
  });

  // BUTTONS

  $('#sign-up-button').click(function() {
    $('#home-page').hide();
    $('#sign-up-page').show();
  });

  $('#sign-in-button').click(function() {
    $('#home-page').hide();
    $('#sign-in-page').show();
  });

  // SESSION - SIGN-IN

  function newSession(response) {
    // The response from the API has two properties that can be called
    session = new Session(response.user_id, response.session_key);
  }

  $('#sign-in-submit').click(function(event) {
    event.preventDefault();
    // Below, you pull the data from the form on the index.html
    const handle = document.getElementById('sign-in-handle').value;
    const password = document.getElementById('sign-in-password').value;
    const dataString = {"session": {"handle": handle, "password": password}};

    // You construct the request (specific to the API you're using)
    const request = new XMLHttpRequest();
    request.open('POST', 'https://chitter-backend-api.herokuapp.com/sessions');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      newSession(JSON.parse(this.response));
      $('#post-a-peep-section').show();
      alert('You have signed in!');
    };
    request.send(JSON.stringify(dataString));
    $('#sign-in-page').hide();
    $('#home-page').show();
  });

  // SIGN-UP

  $('#sign-up-submit').click(function(event) {
    event.preventDefault();
    const handle = document.getElementById('sign-up-handle').value;
    const password = document.getElementById('sign-up-password').value;
    const dataString = {"user": {"handle": handle, "password": password}};
    const request = new XMLHttpRequest();
    request.open('POST', 'https://chitter-backend-api.herokuapp.com/users');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      if (JSON.parse(this.response).handle == "has already been taken") {
        alert('That username has already been taken. Try again');
      } else {
        alert('You signed up!');
      }     
    };
    request.send(JSON.stringify(dataString));
    $('#sign-up-page').hide();
    $('#home-page').show();
  });
};

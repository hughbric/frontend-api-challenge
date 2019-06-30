window.onload = function() {
  (function listPeeps() {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps')
    request.onload = function() {
      const data = JSON.parse(this.response)

      data.forEach(peep => {
        const article = Peep.format(peep);
        $('#peep-list').append(article);
      });
    }
    request.send();
  }());
};

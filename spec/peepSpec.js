var peepSpec = {
  format: function() {
    var peep = mockPeeps[0];
    assert.isEqual(Peep.format(peep), `<article>
    <p class='peep-handle'>kay</p>
    <p class='peep-body'>my first peep :)</p>
    <p class='peep-date'>23/06/2018</p>
    </article>`);
  }
};

peepSpec.format();

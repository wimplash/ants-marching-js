describe('the AntsMarching object\'s', function() {
  describe('init function', function() {
    it('throws an exception if you forget "new"', function() {
      var thrown;
      try {
        var oops = AntsMarching();
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('Remember to use new on constructors!');
    });
  });
  describe('march function', function() {
    beforeEach(function() {
      var target = document.createElement('div');
      target.setAttribute('id', 'target');
      document.body.appendChild(target);
    });
    it('throws an exception when no argument hash is passed', function() {
      var thrown;
      try {
        var oops = new AntsMarching().march();
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('an argument hash is required');
    });
    it('throws an exception when a null-valued argument hash is passed', function() {
      var thrown;
      try {
        var oops = new AntsMarching().march(null);
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('an argument hash is required');
    });
    it('throws an exception when "target" is undefined', function() {
      var thrown;
      try {
        var oops = new AntsMarching().march({});
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('expecting "target" parameter, either of type Node or String (jQuery selector)');
    });
    it('throws an exception when "target" is null-valued', function() {
      var thrown;
      try {
        var oops = new AntsMarching().march({ target: null });
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('expecting "target" parameter, either of type Node or String (jQuery selector)');
    });
    it('throws an exception when "text" is undefined', function() {
      var thrown;
      try {
        var oops = new AntsMarching().march({ target: target });
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('expecting "text" parameter of type String');
    });
    it('throws an exception when "text" is null-valued', function() {
      var thrown;
      try {
        var oops = new AntsMarching().march({ target: target });
      } catch(e) {
        thrown = e;
      }
      expect(thrown).toBe('expecting "text" parameter of type String');
    });
    it('does nothing when "text" is empty', function() {
      var am = new AntsMarching().march({ target: target, text: '' });
      expect($('#target').hasClass('marching')).toBe(false);
    });
    it('does nothing when "text" contains only whitespace', function() {
      var am = new AntsMarching().march({ target: target, text: ' ' });
      expect($('#target').hasClass('marching')).toBe(false);
    });
    it('decorates "target" (Node) with a "marching" class', function() {
      new AntsMarching().march({ target: target, text: 'blah' });
      expect($(target).hasClass('marching')).toBe(true);
    });
    it('decorates "target" (sizzle selector) with a "marching" class', function() {
      new AntsMarching().march({ target: '#target', text: 'blah' });
      expect($('#target').hasClass('marching')).toBe(true);
    });
    //it('creates a div for each letter in "text"', function() {
    //});
  });
});

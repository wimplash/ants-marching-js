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
    beforeEach(function() { $('body').append($('<div id="target"/>')); });
    afterEach(function() { $('#target').remove(); });
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
    describe('applies a "marching" class to "target" when it is of type:', function() {
      it('String (sizzle selector)', function() {
        new AntsMarching().march({ target: '#target', text: 'blah' });
        expect($('#target').hasClass('marching')).toBe(true);
      });
      it('Node', function() {
        var target = $('#target');
        new AntsMarching().march({ target: target, text: 'blah' });
        expect(target.hasClass('marching')).toBe(true);
      });
    });
    it('applies "overflow: hidden" to "target"', function() {
      new AntsMarching().march({ target: '#target', text: 'blah' });
      expect($('#target').css('overflow')).toBe('hidden');
    });
    it('creates a child div in "target" for each letter in "text"', function() {
      new AntsMarching().march({ target: '#target', text: 'blah' });
      expect($('#target').children().length).toBe(4);
    });
    describe('each child div', function() {
      it('should have "position: relative" applied', function() {
        new AntsMarching().march({ target: '#target', text: 'blah' });
        $('#target').children().each(function() {
          expect($(this).css('position')).toBe('relative');
        });
      });
      it('should have "display: inline" applied', function() {
        new AntsMarching().march({ target: '#target', text: 'blah' });
        $('#target').children().each(function() {
          expect($(this).css('display')).toBe('inline');
        });
      });
      it('should have "top: 0" applied', function() {
        new AntsMarching().march({ target: '#target', text: 'blah' });
        $('#target').children().each(function() {
          expect($(this).css('top')).toBe('0px');
        });
      });
      it('should have "left: 0" applied', function() {
        new AntsMarching().march({ target: '#target', text: 'blah' });
        $('#target').children().each(function() {
          expect($(this).css('left')).toBe('0px');
        });
      });
    });
  });
});

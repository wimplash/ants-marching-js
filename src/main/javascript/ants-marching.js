var AntsMarching = function() {
  if (!(this instanceof AntsMarching)) {
    throw 'Remember to use new on constructors!';
  }
};
AntsMarching.prototype.march = function(p) {
  if (typeof p === 'undefined' || p === null) {
    throw 'an argument hash is required';
  }
  if (typeof p.target === 'undefined' || p.target === null) {
    throw 'expecting "target" parameter, either of type Node or String (jQuery selector)';
  }
  if (typeof p.text === 'undefined' || p.text === null) {
    throw 'expecting "text" parameter of type String';
  }
  var text = $.trim(p.text);
  var target = $(p.target);
  if (text === '') {
    return;
  }
  for (var i = 0; i < text.length; i++) {
    var node = $('<div>' + text[i] + '</div>');
    node.css({
      'position': 'relative',
      'display': 'inline',
      'top': 0,
      'left': 0
    });
    target.append(node);
  }
  target.addClass('marching');
  target.css('overflow', 'hidden');
};
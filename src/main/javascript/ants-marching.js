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
  if ($.trim(p.text) === '') {
    return;
  }
  $(p.target).addClass('marching');
};

var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 */
//@@SONG: changed classname
H5P.TextSheridan = function (params) {
  this.text = params.text === undefined ? '<em>New text</em>' : params.text;
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 */
H5P.TextSheridan.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-text').html(this.text);
};

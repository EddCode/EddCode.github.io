const postcss  = require('postcss-preset-env');

module.exports = {
  plugins: [
	postcss({
	  stage: 3,
	  features: {
		'nesting-rules': true,
        'overflow-property': true,
        'color-mod-function': true,
	  }
	})
  ]
}

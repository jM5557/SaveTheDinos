const path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
 	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'docs')
	},
	module: {
		rules: [
			{
		      test: /\.vue$/,
		      loader: 'vue-loader',
		      options: {
		        loaders: {
		          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
		          // the "scss" and "sass" values for the lang attribute to the right configs here.
		          // other preprocessors should work out of the box, no loader config like this necessary.
		          'scss': [
		            'vue-style-loader',
		            'css-loader',
		            'sass-loader'
		          ],
		          'sass': [
		            'vue-style-loader',
		            'css-loader',
		            'sass-loader?indentedSyntax'
		          ]
		        }
		        // other vue-loader options go here
		      }
		    },
		    {
		      test: /\.js$/,
		      loader: 'babel-loader'
		    },
		    {
		      test: /\.css$/,
		      use: [
		        'vue-style-loader',
		        'css-loader'
		      ],
		    },
		    {
		      test: /\.scss$/,
		      use: [
		        'vue-style-loader',
		        'css-loader',
		        'sass-loader'
		      ],
		    },
		    {
		      test: /\.sass$/,
		      use: [
		        'vue-style-loader',
		        'css-loader',
		        'sass-loader?indentedSyntax'
		      ],
		    },
		    {
		      test: /\.(png|svg|jpg|gif)$/,
		      use: [
		        'file-loader'
		      ]
		    },
		    {
			  test: /\.(ttf|eot|woff|woff2)$/,
			  use: {
			    loader: "file-loader",
			    options: {
			      name: "fonts/[name].[ext]",
			    },
			  },
			},
		]
	}
}
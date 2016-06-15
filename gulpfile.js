var gulp 		= require('gulp');
var header 		= require('gulp-header');
var jbb_profile	= require('gulp-jbb-profile');
var webpack 	= require('webpack-stream');
var PROD 		= JSON.parse(process.env.PROD_DEV || "0");

//
// Compile the sources 
//
gulp.task('dist/jbb-profile-iconeezin', ['generate'], function() {
	return gulp.src('profile-decode.js')
		.pipe(webpack({
		    node: {
		    	'fs': 'empty'
		    },
		    output: {
		    	// The output filename
		    	filename: PROD ? 'jbb-profile-iconeezin.min.js' : 'jbb-profile-iconeezin.js',
				// Export itself to a global var
				libraryTarget: 'var',
				// Name of the global var: 'JBB.Profile.Iconeezin'
				library: [ 'JBB', 'Profile', 'iconeezin' ]
			},
			externals: {
				'iconeezin': 'Iconeezin',
			},
		    plugins: PROD ? [
		    	new webpack.webpack.optimize.DedupePlugin(),
			    new webpack.webpack.optimize.UglifyJsPlugin({
			    	minimize: true
			    })
		    ] : [
		    	new webpack.webpack.optimize.DedupePlugin(),
		    ]
		}))
		.pipe(header("/* Iconeezin profile for JBB - https://github.com/wavesoft/jbb-profile-iconeezin */\n"))
		.pipe(gulp.dest('dist'));
});

//
// Compile the sources 
//
gulp.task('dist/jbb-profile-iconeezin-loader', ['generate'], function() {
	return gulp.src('profile-loader.js')
		.pipe(webpack({
			module: {
				loaders: [
					{ test: /\.json$/, loader: 'json' },
				],
		    },
		    node: {
		    	'fs': 'empty'
		    },
		    output: {
		    	// The output filename
		    	filename: PROD ? 'jbb-profile-iconeezin-loader.min.js' : 'jbb-profile-iconeezin-loader.js',
				// Export itself to a global var
				libraryTarget: 'var',
				// Name of the global var: 'Foo'
				library: [ 'JBB', 'Loader', 'iconeezin' ]
			},
			externals: {
				'iconeezin/api': 'Iconeezin.API',
			},
		    plugins: PROD ? [
		    	new webpack.webpack.optimize.DedupePlugin(),
			    new webpack.webpack.optimize.UglifyJsPlugin({
			    	minimize: true
			    })
		    ] : [
		    	new webpack.webpack.optimize.DedupePlugin(),
		    ]
		}))
		.pipe(header("/* Iconeezin profile loader for JBB - https://github.com/wavesoft/jbb-profile-iconeezin */\n"))
		.pipe(gulp.dest('dist'));
});

gulp.task('generate', function() {
    return gulp
        .src([ './specs.yaml' ])
        .pipe(jbb_profile({
        	'name': 'profile'
        }))
        .pipe(gulp.dest('.'));
});

// The files to pack on dist release
gulp.task('dist', [
	'dist/jbb-profile-iconeezin',
	'dist/jbb-profile-iconeezin-loader'
]);


// By default run only script
gulp.task('default', ['dist']);


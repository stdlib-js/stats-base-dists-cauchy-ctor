/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-cauchy-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-cauchy-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-cauchy-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-cauchy-cdf' );
var pdf = require( '@stdlib/stats-base-dists-cauchy-pdf' );
var entropy = require( '@stdlib/stats-base-dists-cauchy-entropy' );
var median = require( '@stdlib/stats-base-dists-cauchy-median' );
var mode = require( '@stdlib/stats-base-dists-cauchy-mode' );
var Cauchy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Cauchy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `x0` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Cauchy( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `gamma` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Cauchy( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `x0` and `gamma`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Cauchy( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var cauchy = new Cauchy();
	t.strictEqual( cauchy instanceof Cauchy, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var cauchy = new Cauchy( 2.0, 4.0 );
	t.strictEqual( cauchy instanceof Cauchy, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var cauchy = Cauchy();
	t.strictEqual( cauchy instanceof Cauchy, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	cauchy = Cauchy( 2.0, 4.0 );
	t.strictEqual( cauchy instanceof Cauchy, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `x0`', function test( t ) {
	var cauchy;

	cauchy = new Cauchy( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( cauchy, 'x0' ), true, 'has property' );
	t.strictEqual( cauchy.x0, 2.0, 'returns expected value' );

	cauchy.x0 = 3.0;
	t.strictEqual( cauchy.x0, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `x0` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var cauchy = new Cauchy();
			cauchy.x0 = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `gamma`', function test( t ) {
	var cauchy;

	cauchy = new Cauchy( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( cauchy, 'gamma' ), true, 'has property' );
	t.strictEqual( cauchy.gamma, 4.0, 'returns expected value' );

	cauchy.gamma = 3.0;
	t.strictEqual( cauchy.gamma, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `gamma` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var cauchy = new Cauchy();
			cauchy.gamma = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var cauchy;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'entropy' ), true, 'has property' );

	cauchy = new Cauchy();
	t.strictEqual( cauchy.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var cauchy;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'median' ), true, 'has property' );

	cauchy = new Cauchy( 5.0, 2.0 );
	t.strictEqual( cauchy.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var cauchy;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'mode' ), true, 'has property' );

	cauchy = new Cauchy( 2.0, 3.0 );
	t.strictEqual( cauchy.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var cauchy;
	var y;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cauchy.prototype.cdf ), true, 'has method' );

	cauchy = new Cauchy();
	y = cauchy.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var cauchy;
	var y;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cauchy.prototype.logcdf ), true, 'has method' );

	cauchy = new Cauchy();
	y = cauchy.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var cauchy;
	var y;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cauchy.prototype.logpdf ), true, 'has method' );

	cauchy = new Cauchy();
	y = cauchy.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var cauchy;
	var y;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cauchy.prototype.pdf ), true, 'has method' );

	cauchy = new Cauchy();
	y = cauchy.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var cauchy;
	var y;

	t.strictEqual( hasOwnProp( Cauchy.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Cauchy.prototype.quantile ), true, 'has method' );

	cauchy = new Cauchy();
	y = cauchy.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

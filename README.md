<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cauchy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Cauchy distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-cauchy-ctor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var Cauchy = require( '@stdlib/stats-base-dists-cauchy-ctor' );
```

#### Cauchy( \[x0, gamma] )

Returns a [Cauchy][cauchy-distribution] distribution object.

```javascript
var cauchy = new Cauchy();

var median = cauchy.median;
// returns 0.0
```

By default, `x0 = 0.0` and `gamma = 1.0`. To create a distribution having a different `x0` (location parameter) and `gamma` (scale parameter), provide the corresponding arguments.

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var median = cauchy.median;
// returns 2.0
```

* * *

## cauchy

A [Cauchy][cauchy-distribution] distribution object has the following properties and methods...

### Writable Properties

#### cauchy.x0

Location parameter of the distribution.

```javascript
var cauchy = new Cauchy();

var x0 = cauchy.x0;
// returns 0.0

cauchy.x0 = 3.0;

x0 = cauchy.x0;
// returns 3.0
```

#### cauchy.gamma

Scale parameter of the distribution. `gamma` **must** be a positive number.

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var gamma = cauchy.gamma;
// returns 4.0

cauchy.gamma = 3.0;

gamma = cauchy.gamma;
// returns 3.0
```

* * *

### Computed Properties

#### Cauchy.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var cauchy = new Cauchy( 4.0, 12.0 );

var entropy = cauchy.entropy;
// returns ~5.016
```

#### Cauchy.prototype.median

Returns the [median][median].

```javascript
var cauchy = new Cauchy( 4.0, 12.0 );

var median = cauchy.median;
// returns 4.0
```

#### Cauchy.prototype.mode

Returns the [mode][mode].

```javascript
var cauchy = new Cauchy( 4.0, 12.0 );

var mode = cauchy.mode;
// returns 4.0
```

* * *

### Methods

#### Cauchy.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var y = cauchy.cdf( 0.5 );
// returns ~0.386
```

#### Cauchy.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var y = cauchy.logcdf( 0.5 );
// returns ~-0.952
```

#### Cauchy.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var y = cauchy.logpdf( 0.8 );
// returns ~-2.617
```

#### Cauchy.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var y = cauchy.pdf( 0.8 );
// returns ~0.073
```

#### Cauchy.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var cauchy = new Cauchy( 2.0, 4.0 );

var y = cauchy.quantile( 0.5 );
// returns 2.0

y = cauchy.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Cauchy = require( '@stdlib/stats-base-dists-cauchy-ctor' );

var cauchy = new Cauchy( 2.0, 4.0 );

var entropy = cauchy.entropy;
// returns ~3.917

var median = cauchy.median;
// returns 2.0

var mode = cauchy.mode;
// returns 2.0

var y = cauchy.cdf( 0.8 );
// returns ~0.407
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-cauchy-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-cauchy-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-cauchy-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-cauchy-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-cauchy-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-cauchy-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-cauchy-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-cauchy-ctor/main/LICENSE

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->

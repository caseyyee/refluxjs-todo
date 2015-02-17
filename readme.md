# ReactJS w. RefluxJS TodoMVC Example

> A simple library for uni-directional dataflow application architecture inspired by ReactJS [Flux](http://facebook.github.io/react/blog/2014/05/06/flux.html)

> _[RefluxJS](https://github.com/spoike/refluxjs)_

## Differences

This is a fork of the original example which changes a few things:

- Use Gulp instead of Grunt
- Use browserify to compile JS
- Break components out into individual files

## Implementation

TODO

## Running

Install dependencies with npm. You should also have browser-sync installed globally.

```
npm install
```

This project comes with a gulp task to compile less and JS files (using browserify), as well as a watch task to rebundle and update via browser-sync.

To bundle JS and compile LESS:
```
gulp build
```

For watch & browser-sync just use the default task:
```
gulp
```

## Credit

The original TodoMVC application was created by [Mikael Brassman](https://github.com/spoike/refluxjs).

Modifications (gulp workflow, fixes) by [Alex Ciarlillo](https://github.com/alexciarlillo).
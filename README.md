# Ladr [![Build Status](https://travis-ci.org/defucamedia/ladr.svg?branch=master)](https://travis-ci.org/defucamedia/ladr)

This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

### Windows
Install prereqs via [Chocolatey](https://chocolatey.org/)

* `cinst git`
* `cinst nodejs.install`

## Installation

* `git clone https://github.com/defucamedia/ladr.git`
* `cd` into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Copy files from `dist` folder to host

####nginx

```
server {
	if ($request_uri = /index.html) {
		return 301 localhost:8080;
	}
  	location / {
		try_files $uri $uri/ /index.html?/$request_uri;
	}
}
```

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


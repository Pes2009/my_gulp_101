## My Gulp 101

Zainstaluj [node](https://nodejs.org/en/), a następnie zainstaluj program _gulp_.

```sh
npm install -g gulp
npm install -g livereload # opcjonalnie
```

- Konfiguracja środowiska do pracy z HTML5+CSS3+JavaScript.
  * [Atom](https://atom.io) – a hackable text editor for the 21st Century.
    - [Atom Flight Manual](https://atom.io/docs/latest/) – the latest version
    - [Keyboard shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts)
  * [Gulp](http://gulpjs.com) – a toolkit for automating painful or
    time-consuming tasks in your development workflow, so you can stop
    messing around and build something.
    - Callum Macrae, [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
    - Mark Goodyear, [Getting started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
  * [Slack](https://slack.com) – where work happens.
    - [Getting Started](https://get.slack.help/hc/en-us/categories/202622877-Slack-Guides)
  * [Git](https://git-scm.com/book/en/v2).
    - [GitHub Account Setup and Configuration](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)
    - M. Hartl, [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial)

----

W katalogu głównym repozytorium wykonaj:

```sh
npm install # https://docs.npmjs.com/getting-started/using-a-package.json
gulp docs

gulp # starts LiveReload on port 35729 and localhost:8080
```

Uruchamiamy edytor Atom i zmieniamy kolor w pliku
_style.scss_ (**format SASS**).


### Nowy projekt H5C3J

Utwórz nowe repozytorium i wykonaj te polecenia w głównym katalogu repozytorium.

```sh
npm init # tworzy plik package.json
npm install --save-dev gulp # npm i -D gulp
# dodaj swój plik gulpfile.js
```

Nie zapomnij dodać do pliku **.gitignore** katalog **_node_modules_**.


### HTML5 + CSS3 + ES6

TODO 1:

- [x] [gulp-server-livereload](https://www.npmjs.com/package/gulp-server-livereload)
  lub gulp-connect (serwer _localhost:8080_) & gulp-livereload
- [x] [delete generated folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
- [ ] images management
- [ ] concat and minify assets (CSS -> _style.css_)
- [ ] [gulp-markdown](https://www.npmjs.com/package/gulp-markdown)
- [ ] [gulp-asciidoctor](https://github.com/asciidoctor/gulp-asciidoctor)
- [ ] szablony HTML
- [ ] copy only changed files

TODO 2:

- [ ] [Setup a new project with Phenomic](https://phenomic.io/docs/setup/)


### Uruchamiamy stronę na Firebase

TODO


### Handlebars templates

* [Try Handlebars in a browser](http://tryhandlebarsjs.com/)


### AJAX

Eloquent JavaScript:

* http://eloquentjavascript.net/10_modules.html
* http://eloquentjavascript.net/12_browser.html
* http://eloquentjavascript.net/13_dom.html
* http://eloquentjavascript.net/14_event.html

CORS:

* [Using CORS](https://www.html5rocks.com/en/tutorials/cors/)
* [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

The code below is copied from http://www.test-cors.org/.

```js
var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  console.log('CORS is enabled');
};
xhr.onerror = function() {
  console.log('CORS requests are not available');
};
xhr.send();
```

Promises…

```js
get(url2).then(
  function(text) {
    console.log(JSON.parse(text).articles[1].title);
  },
  function(error) {
    console.log('Failed to fetch data: ' + error);
  }
);
```

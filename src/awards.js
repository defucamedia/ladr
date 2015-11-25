import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Awards {
  heading = 'Awards.';
  awards = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration();
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('data/awards.json')
      .then(response => response.json())
      .then(awards => {
          this.awards = awards.groupBy(function(a) { return a.name; })
                                .map(function(a) {
                                    return {
                                        name: a.key.name,
                                        sortGroup: a.key.sortGroup,
                                        values: a.group.map(function(b) { return b.desc })
                                    };
                                })
                                .sort(firstBy(function(a, b) { return a.sortGroup - b.sortGroup; })
                                        .thenBy(function(a, b) { return b.name - a.name }));
      });
  }
}

// http://stackoverflow.com/a/19586022/182821
Array.prototype.groupBy = function(hash){
  var _hash = hash ? hash : function(o){return o;};

  var _map = {};
  var put = function(map, key, value){
    if (!map[_hash(key)]) {
        map[_hash(key)] = {};
        map[_hash(key)].group = [];
        map[_hash(key)].key = key;

    }
    map[_hash(key)].group.push(value);
  }

  this.map(function(obj){
    put(_map, obj, obj);
  });

  return Object.keys(_map).map(function(key){
    return {key: _map[key].key, group: _map[key].group};
  });
}

var firstBy=function(){function n(n,t){if("function"!=typeof n){var r=n;n=function(n,t){return n[r]<t[r]?-1:n[r]>t[r]?1:0}}return-1===t?function(t,r){return-n(t,r)}:n}function t(t,u){return t=n(t,u),t.thenBy=r,t}function r(r,u){var f=this;return r=n(r,u),t(function(n,t){return f(n,t)||r(n,t)})}return t}();

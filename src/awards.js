import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Awards {
  heading = 'The accolades.';
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
          this.awards = awards.groupBy(function(a) { return a.year; })
                                .map(function(a) {
                                    return {
                                        year: a.key.year,
                                        values: a.group.map(function(b) { return b.desc })
                                    };
                                })
                                .sort(function(a, b) { return b.year - a.year; });
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

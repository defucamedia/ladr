import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import {DialogService} from 'aurelia-dialog';
import {Project} from './project';
import {Base} from './base';
import 'fetch';

@inject(HttpClient, Router, DialogService)
export class Projects {
    projects = [];
    allProjects = [];
    categories = [];
    query = "";

    constructor(http, router, dialogService) {
        http.configure(config => {
          config
            .useStandardConfiguration();
        });

        this.http = http;
        this.dialogService = dialogService;
    }

    changeCat(cat) {
        if (!cat) {
            this.projects = this.allProjects;
            return;
        }

        cat = cat.toLowerCase();
        this.projects = this.allProjects.filter(function(p) {
            return p.categories.some(function(c) { return c.toLowerCase().indexOf(cat) !== -1 });
        });
    }

    search(q) {
      this.query = q || this.query;
      var q = this.query.toLowerCase();
      this.projects = this.allProjects.filter(function(p) {
          return p.categories.some(function(c) { return c.toLowerCase().indexOf(q) !== -1 }) ||
                 p.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1 }) ||
                 p.name.toLowerCase().indexOf(q) !== -1;
      });
    }
    project(slug) {
        var project = this.allProjects.find(function(p) {
            return p.slug && p.slug.toLowerCase() === slug.toLowerCase();
        });

        if (project !== undefined) {
            this.dialogService.open({ viewModel: Project, model: project });
        }
    }

    activate(params) {
        return this.http.fetch('data/projects.json')
            .then(response => response.json())
            .then(projects => {
                this.allProjects = this.projects = projects;
                this.categories = projects.reduce(function(l, c) {
                        return l.concat(c.categories.map(function(e) { return { key: e.toLowerCase(), value: e }; }));
                    }, [])
                    .unique()
                    .sort(function(a,b) {
                        return a.localeCompare(b);
                    });
                    console.log(this.categories);

                if (params.cat) {
                    this.changeCat(params.cat);
                }
                if (params.q) {
                    this.search(params.q);
                }
            });
    }
}

Array.prototype.unique = function() {
    var arr = this.map(function(kvp) { return kvp.key });
      return arr.filter(function(x, i) {
        return arr.indexOf(x) === i;
    });
}

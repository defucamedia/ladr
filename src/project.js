import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(DialogController, EventAggregator)
export class Project {
  project = {};

  constructor(controller, eventAggregator){
    this.controller = controller;
    controller.settings.lock = false;
    this.eventAggregator = eventAggregator;
    this.eventAggregator.subscribe("router:navigation:success", () => {
        this.controller.ok();
    })
  }

  activate(project) {
      this.project = project;
  }
}

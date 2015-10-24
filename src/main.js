import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog');

    aurelia.use.plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot());
}

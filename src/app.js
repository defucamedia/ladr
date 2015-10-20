export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.map([
      { route: ['','profile'],                  name: 'profile',      moduleId: 'profile',      nav: true, title:'Profile' },
      { route: 'about',                         name: 'about',        moduleId: 'about',        nav: true, title:'About' },
      { route: 'awards',                        name: 'awards',       moduleId: 'awards',       nav: true, title:'Awards' },
      { route: 'projects',  name: 'projects',     moduleId: 'projects',     nav: true, title:'Projects' },
      { route: 'contact',                       name: 'contact',      moduleId: 'contact',      nav: true, title:'Contact' }
    ]);

    this.router = router;
  }
}

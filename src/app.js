export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','profile'],  name: 'profile',      moduleId: 'profile',      nav: true, title:'Profile' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' }
    ]);

    this.router = router;
  }
}

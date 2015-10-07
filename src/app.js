export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','profile'],  name: 'profile',      moduleId: 'profile',      nav: true, title:'Profile' },
      { route: 'about',         name: 'about',        moduleId: 'about',        nav: true, title:'About' }
    ]);

    this.router = router;
  }
}

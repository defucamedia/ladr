export class App {
    configureRouter(config, router) {
        config.title = 'LADR';
        config.options.pushState = true;
        config.map([
        {
            route: ['','profile'],
                name: 'profile',
                viewPorts: {
                    default: {
                        moduleId: 'profile',
                        nav: true,
                        title: 'Profile'
                    },
                    heading: {
                        moduleId: 'profile',
                        view: 'testimonials.html',
                        nav: false
                    }
                },
                nav: true,
                title: 'Profile'
        },
        {
            route: 'about',
            name: 'about',
            viewPorts: {
                default: {
                    moduleId: 'about',
                    nav: true,
                    title: 'About'
                },
                heading: {
                    moduleId: 'about',
                    view: 'heading.html',
                    nav: false
                }
            },
            nav: true,
            title:'About'
        },
        {
            route: 'awards',
            name: 'awards',
            viewPorts: {
                default: {
                    moduleId: 'awards',
                    nav: true,
                    title: 'Awards'
                },
                heading: {
                    moduleId: 'awards',
                    view: 'heading.html',
                    nav: false
                }
            },
            nav: true,
            title:'Awards'
        },
        {
            route: 'projects',
            name: 'projects',
            viewPorts: {
                default: {
                    moduleId: 'projects',
                    nav: true,
                    title: 'Projects'
                },
                heading: {
                    moduleId: 'projects',
                    view: 'heading.html',
                    nav: false
                }
            },
            nav: true,
            title:'Projects' },
        {
            route: 'contact',
            name: 'contact',
            viewPorts: {
                default: {
                    moduleId: 'contact',
                    nav: true,
                    title: 'Contact'
                },
                heading: {
                    moduleId: 'contact',
                    view: 'heading.html',
                    nav: false
                }
            },
            nav: true,
            title:'Contact'
        }]);

        this.router = router;
    }
}

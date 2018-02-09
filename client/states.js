angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.myapprovals', {
        views: {
            app: {
                controller: 'app_myapprovals',
                templateProvider: function (app) {
                    return app.templateProvider('app.myapprovals');
                }
            }
        }
    }).state('app.mytrips', {
        views: {
            app: {
                controller: 'app_mytrips',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytrips');
                }
            }
        }
    }).state('app.popup', {
        views: {
            app: {
                controller: 'app_popup',
                templateProvider: function (app) {
                    return app.templateProvider('app.popup');
                }
            }
        }
    }).state('app.alertwin', {
        views: {
            app: {
                controller: 'app_alertwin',
                templateProvider: function (app) {
                    return app.templateProvider('app.alertwin');
                }
            }
        }
    }).state('app.adhocrequest', {
        views: {
            app: {
                controller: 'app_adhocrequest',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhocrequest');
                }
            }
        }
    }).state('app.alertmsg', {
        views: {
            app: {
                controller: 'app_alertmsg',
                templateProvider: function (app) {
                    return app.templateProvider('app.alertmsg');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.home', {
        views: {
            app: {
                controller: 'app_home',
                templateProvider: function (app) {
                    return app.templateProvider('app.home');
                }
            }
        }
    }).state('app.sidemenu', {
        views: {
            app: {
                controller: 'app_sidemenu',
                templateProvider: function (app) {
                    return app.templateProvider('app.sidemenu');
                }
            }
        }
    }).state('app.testadhocscreen', {
        views: {
            app: {
                controller: 'app_testadhocscreen',
                templateProvider: function (app) {
                    return app.templateProvider('app.testadhocscreen');
                }
            }
        }
    }).state('app.tripcancellation', {
        views: {
            app: {
                controller: 'app_tripcancellation',
                templateProvider: function (app) {
                    return app.templateProvider('app.tripcancellation');
                }
            }
        }
    }).state('app.adhoctripcancellation', {
        views: {
            app: {
                controller: 'app_adhoctripcancellation',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhoctripcancellation');
                }
            }
        }
    }).state('app.adhocpopup', {
        views: {
            app: {
                controller: 'app_adhocpopup',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhocpopup');
                }
            }
        }
    }).state('app.approvalvalidation', {
        views: {
            app: {
                controller: 'app_approvalvalidation',
                templateProvider: function (app) {
                    return app.templateProvider('app.approvalvalidation');
                }
            }
        }
    }).state('app.adhocfieldalerts', {
        views: {
            app: {
                controller: 'app_adhocfieldalerts',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhocfieldalerts');
                }
            }
        }
    }).state('app.privacyalertwin', {
        views: {
            app: {
                controller: 'app_privacyalertwin',
                templateProvider: function (app) {
                    return app.templateProvider('app.privacyalertwin');
                }
            }
        }
    });
});
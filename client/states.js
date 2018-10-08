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
    }).state('app.alertwin', {
        views: {
            app: {
                controller: 'app_alertwin',
                templateProvider: function (app) {
                    return app.templateProvider('app.alertwin');
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
    }).state('app.adhocrequest', {
        views: {
            app: {
                controller: 'app_adhocrequest',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhocrequest');
                }
            }
        }
    }).state('app.mytripsmsg', {
        views: {
            app: {
                controller: 'app_mytripsmsg',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytripsmsg');
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
    }).state('app.adhocmsg', {
        views: {
            app: {
                controller: 'app_adhocmsg',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhocmsg');
                }
            }
        }
    }).state('app.approvalmsg', {
        views: {
            app: {
                controller: 'app_approvalmsg',
                templateProvider: function (app) {
                    return app.templateProvider('app.approvalmsg');
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
    }).state('app.homesuccess', {
        views: {
            app: {
                controller: 'app_homesuccess',
                templateProvider: function (app) {
                    return app.templateProvider('app.homesuccess');
                }
            }
        }
    }).state('app.feedback', {
        views: {
            app: {
                controller: 'app_feedback',
                templateProvider: function (app) {
                    return app.templateProvider('app.feedback');
                }
            }
        }
    }).state('app.usercheckin', {
        views: {
            app: {
                controller: 'app_usercheckin',
                templateProvider: function (app) {
                    return app.templateProvider('app.usercheckin');
                }
            }
        }
    }).state('app.drivercheckin', {
        views: {
            app: {
                controller: 'app_drivercheckin',
                templateProvider: function (app) {
                    return app.templateProvider('app.drivercheckin');
                }
            }
        }
    }).state('app.feedbackmsg', {
        views: {
            app: {
                controller: 'app_feedbackmsg',
                templateProvider: function (app) {
                    return app.templateProvider('app.feedbackmsg');
                }
            }
        }
    }).state('app.approvaldashboard', {
        views: {
            app: {
                controller: 'app_approvaldashboard',
                templateProvider: function (app) {
                    return app.templateProvider('app.approvaldashboard');
                }
            }
        }
    }).state('app.specialcabapproval', {
        views: {
            app: {
                controller: 'app_specialcabapproval',
                templateProvider: function (app) {
                    return app.templateProvider('app.specialcabapproval');
                }
            }
        }
    }).state('app.specialcabcomments', {
        views: {
            app: {
                controller: 'app_specialcabcomments',
                templateProvider: function (app) {
                    return app.templateProvider('app.specialcabcomments');
                }
            }
        }
    });
});
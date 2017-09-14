[![Npm version](https://img.shields.io/npm/v/angular-fullcalendar.svg?style=flat-square)](https://www.npmjs.com/package/angular-fullcalendar)
[![Bower](https://img.shields.io/bower/v/angular-fullcalendar.svg?style=flat-square)]()
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JavyMB/angular-fullcalendar/develop/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/JavyMB/angular-fullcalendar.svg)](https://github.com/JavyMB/angular-fullcalendar/issues)
[](https://img.shields.io/badge/Coverage-70%25-green.svg)
# angular-fullcalendar directive

A simple and lite directive for quickly include Fullcalendar (v.3) in your AngularJS projects.
Perfomed for AngularJS 1.6.x

You can view [DEMO](https://javymb.github.io/angular-fullcalendar/).

#### How to use
Installing package with bower:
```
    bower install angular-fullcalendar --save
```
Installing pacakge with npm:
```
    npm i  angular-fullcalendar --save
```
Use directive as an attribute and you can pass the fullcalendar options and the list of events in ngModel.

```html
  <div fc fc-options="optionsObj" ng-model="eventsObj" ></div>
```
You can use the [Arshaw Fullcalendar options in official docs](https://fullcalendar.io/docs/).
```js
    //  <div fc fc-options="calendarOptions" ng-model="events" ></div>
    var app = angular.module('demo', ['angular-fullcalendar']);
    app.controller('CalendarCtrl', function($scope) {
        $scope.calendarOptions = {

        };
        $scope.events = [
            {
                title: 'My Event',
                start: new Date(),
                description: 'This is a cool event',
                color:'#5f6dd0'
            },
            {
                title: 'My Event',
                start: new moment().add(1,'days'),
                description: 'This is a cool event',
                color:'#af6dd0'
            }
        ]
    });
```
#### Requirements
- AngularJS (1.6.x)
- Fullcalendar.js 3.0 and its dependencies
- gcal-plugin (optional)

[![Twitter Follow](https://img.shields.io/twitter/follow/javymb.svg?style=social&label=Follow)](https://twitter.com/JavyMB)

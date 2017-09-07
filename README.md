# angular-fullcalendar directive

A simple and lite directive for quickly include Fullcalendar (v.3) in your AngularJS projects.
Perfomed for AngularJS 1.6.x

#### Requirements
- AngularJS (1.6.x)
- Fullcalendar.js 3.0 and its dependencies
- gcal-plugin (optional)

#### How to use
Installing package with bower:
```
    bower install angular-fullcalendar --save
```
Installing pacakge with npm:
```
    npm i  angular-fullcalendar --save
```
#### Options

You can use the Arshaw Fullcalendar options.
```js
  angular.module('app')
  .controller('MyController', function($scope) {
          $scope.calendarOptions = {
            header:{
              left: 'month basicWeek basicDay agendaWeek agendaDay',
              center: 'title',
              right: 'today prev,next'
            },
            eventClick: function(){

            }
          };
      })
```

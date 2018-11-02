[![Npm version](https://img.shields.io/npm/v/angular-fullcalendar.svg?style=flat-square)](https://www.npmjs.com/package/angular-fullcalendar)
[![Bower](https://img.shields.io/bower/v/angular-fullcalendar.svg?style=flat-square)]()
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JavyMB/angular-fullcalendar/develop/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/JavyMB/angular-fullcalendar.svg)](https://github.com/JavyMB/angular-fullcalendar/issues)
[](https://img.shields.io/badge/Coverage-70%25-green.svg)
# angular-fullcalendar directive

A simple and light directive to quickly include Fullcalendar (v.3) in your AngularJS projects.

Developed for AngularJS 1.6.x.

You can check out a [DEMO](https://javymb.github.io/angular-fullcalendar/) of this directive in use.

## Requirements
- AngularJS (1.6.x)
- Fullcalendar.js 3.0 and its dependencies
- gcal-plugin (optional)

## Installation
You can install this package using a package-manager like bower or npm.

To install via bower:

```
    bower install angular-fullcalendar --save
```
To install via npm:

```
    npm i  angular-fullcalendar --save
```

Then, add 'angular-fullcalendar' to your AngularJS dependencies:

```js
var app = angular.module('demo', ['angular-fullcalendar']);
```

## Usage
You can use this directive as an attribute on a div, passing additional fullcalendar options as an object and the list of events as an array using ngModel.

In your HTML:

```html
  <div fc fc-options="options" ng-model="events" ></div>
```
And in your controller:
```js
var app = angular.module('demo', ['angular-fullcalendar']);
		
app.controller('CalendarCtrl', function($scope) {
				
	$scope.options = {
		// Specify any fullcalendar options here
	};
				
	$scope.events = [
		{
			title: 'My 1st Event',
			start: new Date(),
			description: 'This is a cool event',
			color:'#5f6dd0' // You can specify event options directly in the event object
		},
		{
			title: 'My 2nd Event',
			start: new moment().add(1,'days'),
			description: 'This is a cool event',
			color:'#af6dd0'
		}
	];
});
```


## Multiple event sources
Instead of an array of events, you can pass an array of objects specifying different event sources in the ngModel attribute. Fullcalendar will display the events from the different sources specified in the array. For detailed information on the types of event sources that Fullcalendar admits, please refer to [their documentation](https://fullcalendar.io/docs/).

Below is an example of how to pass multiple event sources to angular-fullcalendar directive.

```html
<!-- HTML -->
<div fc fc-options="calendarOptions" ng-model="eventSources" ></div>
```

```js
// AngularJS Controller
var app = angular.module('demo', ['angular-fullcalendar']);
		
app.controller('CalendarCtrl', function($scope) {
				
	$scope.calendarOptions = {
		// Specify your options here...
	};
				
	//Specify the different event sources. You can specify event source options too.
	$scope.eventSources = [
		// First event source
		{
			events: [ // put the events array in the `events` property
				{
					title  : 'My Event',
					start  : new Date(),
					allDay: true

				},
				{
					title:  'My Event',
					start:  '2018-07-16T14:30:00',
					allDay: false
				},
				{
					title  : 'My Event',
					start  : new Date(),
					allDay: false
				}
			],			  
			color: 'rgb(217,56,54)', // This is a eventSource specific option!
			textColor: 'rgb(0,0,0)'	// And this is another one!	  
		},
		// Second event source   
		{
			events: [
				{
					title  : 'My Event',
					start  : new moment().add(2,'days')
				},
				{
					title  : 'My Event',
					start  : new moment().add(3,'days')
				},
				{
					title  : 'My Event',
					start  : new moment().add(4,'days')
				}
			],
			color: "rgb(242,170,68)",
			textColor: "rgb(0,0,0)"
		},
		// Third event source
		{
			events: [
				{
					title  : 'My Event',
					start  : new moment().add(2,'days')
				},
				{
					title  : 'My Event',
					start  : new moment().add(3,'days')
				},
				{
					title  : 'My Event',
					start  : new moment().add(4,'days')
				}
			],
			color: "rgb(22,173,55)",
			textColor: "rgb(0,0,0)"
		}
	];
});
```
## Additional options

The options object is passed to Fullcalendar, so you can use any of the options defined in [Arshaw's Fullcalendar official docs](https://fullcalendar.io/docs/).

Below is an example that uses options to change fullcalendar header and specify a couple of event listeners:

```js
var app = angular.module('demo', ['angular-fullcalendar']);
		
app.controller('CalendarCtrl', function($scope) {
	
	$scope.alertOnClick = function(event) {
		console.log('Clicked event ' + event.title);
	}

	$scope.calendarOptions = {
		defaultView: "week",
		nowIndicator: true,
		locale: "en",
		titleFormat: "D MMM, YYYY",
		header: {
			left: "prev,next",
			center: "title",
			right: "week,day"
		},
		// eventSources: [], // You can also specify the eventSources here
		// events: $scope.events, // You can also specify the events array here
		eventClick: $scope.alertOnClick, // Event callback fn
		// eventDrop: $scope.alertOnDrop, // Event callback fn
		// eventResize: $scope.alertOnResize, // Event callback fn
		// eventRender: $scope.eventRender // Event callback fn
	};

	$scope.events = [
		{
			title: 'My 1st Event',
			start: new Date(),
			description: 'This is a cool event',
			color:'#5f6dd0'
		},
		{
			title: 'My 2nd Event',
			start: new moment().add(1,'days'),
			description: 'This is a cool event',
			color:'#af6dd0'
		}
	];
});
```


[![Twitter Follow](https://img.shields.io/twitter/follow/javymb.svg?style=social&label=Follow)](https://twitter.com/JavyMB)

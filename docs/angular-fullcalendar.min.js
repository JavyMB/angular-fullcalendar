/*!
 * angular-fullcalendar
 * https://github.com/JavyMB/angular-fullcalendar#readme
 * Version: 1.0.1 - 2017-10-06T14:28:29.825Z
 * License: ISC
 */
!function(){"use strict";function n(n){return{restrict:"A",scope:{eventSource:"=ngModel",options:"=fcOptions"},link:function(e,t){function o(){a||(a=$(t).html("")),a.fullCalendar(l(e.options))}function u(){a&&a.fullCalendar&&a.fullCalendar("destroy")}function l(t){return angular.extend(n,{events:e.eventSource},t)}function r(n,e){n!==e?(u(),o()):n&&angular.isUndefined(a)&&o()}var a;o(),e.$watch("eventSource",r,!0),e.$watch("options",r,!0),e.$on("$destroy",function(){u()})}}}angular.module("angular-fullcalendar",[]).value("CALENDAR_DEFAULTS",{locale:"en"}).directive("fc",["CALENDAR_DEFAULTS",n])}();
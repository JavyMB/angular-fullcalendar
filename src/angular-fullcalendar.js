angular.module('angular-fullcalendar',[])
    .value('CALENDAR_DEFAULTS',{
        locale:'en'
    })
    .directive('gcoCalendar',['CALENDAR_DEFAULTS',gcoCalendarDirectiveFn]);

function gcoCalendarDirectiveFn(CALENDAR_DEFAULTS) {
    return {
        restrict : 'A',
        scope : {
            eventSource : '=ngModel',
            options : '='
        },
        link:function (scope, elm, attrs, controller) {
            var calendar;
            init();
            scope.$watch('gcoOptions', function(newOptions,oldOptions) {
                if (newOptions !== oldOptions) {
                    destroy();
                    init();
                } else if ((newOptions && angular.isUndefined(calendar))) {
                    init();
                }
            },true);
            scope.$on('$destroy', function () {
                destroy()
            });

            function init() {
                if (!calendar) {
                    calendar = $(elm).html('');
                }
                calendar.fullCalendar(getOptions(scope.options));
            }
            function destroy() {
              if(calendar && calendar.fullCalendar){
                  calendar.fullCalendar('destroy');
              }
            }
            function getOptions(options) {
                return angular.extend(CALENDAR_DEFAULTS,{
                    events:scope.eventSource
                },options)
            }
        }
    };

}

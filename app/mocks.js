var mocks = (function () {
    var instance = {};

    instance.blogEntries = function () {
        return {
            98:
            {
                date: "November 9, 2015",
                text: "Disabled Angular debugInfo to improve performance!"
            },
            99:
            {
                date: "October 29, 2015",
                text: "<span class='one'>Wrote my first LESS, and compiled it with Gulp!</span>" +
                "<br />Vetted it with JSCS and JSHint, all thanks to " +
                "<a href=\"http://www.johnpapa.net\" target='blank' title=\"John Papa's blog\">John Papa&rsquo;s</a> course on " +
                "<a title='JavaScript Build Automation with Gulp.js' target='blank' " +
                "href=\"https://app.pluralsight.com/library/courses/javascript-build-automation-gulpjs/table-of-contents\">" + 
                "JavaScript Build Automation with Gulp.js</a>!"
            },
            100:
            {
                date: "August 27, 2015",
                text: "<div>Upgraded to Angular 1.4.4! " +
                "<br />Added a Bootstrap stylesheet from Bootswatch as well.</div>" +
                "Mocked out this backend using ngMock."
            },
            101:
            {
                date: "April 10, 2015",
                text: "<div>Wrote my first AngularJS plugin module! Find " +
                "<a href=\"https://github.com/joehoppe/angular-errors-on-toast\" " +
                "title=\"Angular Errors on Toast\" target=\"blank\">Angular Errors on Toast</a> on Github" +
                ".</div>"
            },
            102:
            {
                date: "November 20, 2014",
                text: "I&rsquo;ve been looking long and hard for great resources for application " +
                "architects. There appears to be a great shortage. But I did find one good one: " +
                "<a href=\"http://highscalability.com\" target=\"blank\" " +
                "title=\"High Scalability\">highscalability.com</a>." +
                " I recommend checking it out. They seem to have great articles on improving" +
                " performance and designing software."
            },
            103:
            {
                date: "November 7, 2014",
                text: "Earned <a href=\"http://stackoverflow.com/users/846844/hoppe?tab=profile\" " +
                "target=\"blank\" title=\"My profile on StackOverflow\">1,000+ reputation on StackOverflow</a> today! Until someone on the internet " +
                "finds this and thinks it's funny to downvote me."
            },
            104:
            {
                date: "October 14, 2014",
                text: "Redid the site using Bower 1.3 as a package manager! <br />" +
                "Implemented a rough Angular CDN failback mechanism. <br />" +
                "Loving the <a href=\"http://sidewaffle.com/\" target=\"blank\" " +
                "title=\"SideWaffle templates\">Visual Studio SideWaffle templates!"
            },
            105:
            {
                date: "May 22, 2014",
                text: "I told my manager that I was learning AngularJS. He asked me to demo what I " +
                "had done to him " +
                "and my teammates. Bored them to death! :)"
            },
            106:
            {
                date: "May, 21, 2014",
                text: "Launched an AngularJS 1.2 site! Also built on:" +
                "<ul>" +
                " <li>MVC 5.1 (MVC was later dropped)</li>" +
                " <li>Bootstrap 3</li>" +
                " <li>Google Analytics</li>" +
                "</ul>"
            }
        };
    };

    return instance;
} ());
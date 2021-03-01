// Espresso
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);


var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("espresso-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [{
    "name": "Espresso",
    "value": 100,

}];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker.cornerRadius(20, 20, 20, 20);




// Red Eye

am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("redeye-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [{
    "name": "Coffee",
    "value": 90,
  
}, {
    "name": "Espresso",
    "value": 10,
}];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker2 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker2.cornerRadius(20, 20, 20, 20);


// Americano
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("americano-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [{
    "name": "Water",
    "value": 80,

}, {
    "name": "Espresso",
    "value": 20,
}];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker3 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker3.cornerRadius(20, 20, 20, 20);

//Macchiato
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("macchiato-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [{
    "name": "Cold milk",
    "value": 50,
}, {
    "name": "Espresso",
    "value": 50,
}];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker4 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker4.cornerRadius(20, 20, 20, 20);

//Cappuccino
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("cappuccino-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [{
    "name": "Foam",
    "value": 33.33
},
{
    "name": "Steamed Milk",
    "value": 33.33
},
{
    "name": "Espresso",
    "value": 33.33
}
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker5 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker5.cornerRadius(20, 20, 20, 20);

//Flat White
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("flatwhite-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
{
    "name": "Espresso",
    "value": 33.33
},
{
    "name": "Milk",
    "value": 66.66
}
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker6 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker6.cornerRadius(20, 20, 20, 20);

//Cafe Latte
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("cafelatte-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
    {
        "name": "Steamed Milk",
        "value": 75,
        "Fill": 'white'
    },
    {
        "name": "Espresso",
        "value": 25
    }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker7 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker7.cornerRadius(20, 20, 20, 20);

//Mocha
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("mocha-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
    {
        "name": "Chocolate",
        "value": 5,
        "Fill": 'white'
    },
    {
        "name": "Steamed Milk",
        "value": 55
    },
    {
        "name": "Coffee",
        "value": 30
    }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker8 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker8.cornerRadius(20, 20, 20, 20);


//Vienna
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("vienna-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
    {
        "name": "Cream",
        "value": 50,
        "Fill": 'white'
    },
    {
        "name": "Espresso",
        "value": 50
    }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker9 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker9.cornerRadius(20, 20, 20, 20);


//Afogato
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("affogato-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
    {
        "name": "Espresso",
        "value": 20,
        "Fill": 'white'
    },
    {
        "name": "Ice Cream",
        "value": 80
    }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker10 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker10.cornerRadius(20, 20, 20, 20);


//Cafeaulait
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("cafeaulait-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
    {
        "name": "Drip Coffee",
        "value": 50,
        "Fill": 'white'
    },
    {
        "name": "Steamed Milk",
        "value": 50
    }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker11 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker11.cornerRadius(20, 20, 20, 20);


//Cold brew
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

var chart = am4core.create("coldbrew-chart", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.paddingLeft = 150;

chart.data = [
    {
        "name": "Cold Water",
        "value": 55
    },
    {
        "name": "Beans",
        "value": 30
    }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.propertyFields.disabled = "disabled";
series.ticks.template.propertyFields.disabled = "disabled";


series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0;

series.labelsContainer.width = 100;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.paddingRight = 160;
chart.legend.paddingBottom = 40;
let marker12 = chart.legend.markers.template.children.getIndex(0);
chart.legend.markers.template.width = 40;
chart.legend.markers.template.height = 40;
marker12.cornerRadius(20, 20, 20, 20);

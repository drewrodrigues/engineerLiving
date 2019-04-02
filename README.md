# Engineer Living

Check out the live app [here](https://thesimpledev.github.io/engineer-living)

Engineer living analyzes the best places to live for software engineers using multiple sources of data.

## Technologies
* D3.js
* JavaScript
* Webpack
* HTML5
* CSS3

## Code Examples
```javascript
document.addEventListener("DOMContentLoaded", () => {
  new SunnyDays
  new Salary
  new MedianHomeCost
  new Diversity
  new Happiness
  new Map
  new JobMarket
  new Filtering
})
```
Clean and modular code through the use of classes for each chart.

```javascript
class Chart {
  constructor(selector, options) {
    this.setChart(selector, options)
    this.setData()
  }
  
  xAxis(domain, xScale, ticks = 5) {
    // ..
  }
  
  yAxis(domain, yScale, ticks = 5) {
    // ...
  }
  
  gridLines(scale, position, ticks = 5) {
    // ...
  }
  
  // .. etc
}

class Salary extends Chart {
  constructor(selector) {
    super(selector)
    this.xAxis([75, 125], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.gridLines(this.xScale, 'axisBottom')
    // ..etc
  }
}
```
Each chart shares similar functionality so I use a parent class to keep everything dry. The Chart class provides helper methods that are commonly used between charts and initializes the chart's state with all city data neccessary to render.

## Screen Shots
>##### Unfilted Data
![Project Show Empty](https://github.com/thesimpledev/engineerLiving/blob/master/readme/screenshot.png)

>##### Filtered Data
![Project Show Empty](https://github.com/thesimpledev/engineerLiving/blob/master/readme/filtered.png)

>##### Filtering Interation
![Project Show Empty](https://github.com/thesimpledev/engineerLiving/blob/master/readme/interaction.gif)
class Map {
  constructor() {

    this.render()
  }

  render() {
    var width = 900;
    var height = 500;
    
    var svg = d3.select("body").append("svg")
    
    var projection = d3.geoMercator();
    
    var path = d3.geoPath().projection(projection);
      
    var url = "http://enjalot.github.io/wwsd/data/world/world-110m.geojson";
    
    d3.json(url, function(err, geojson) {
      svg.append("path").attr("d", path(geojson));
    })


  }
}

export default Map
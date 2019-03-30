class Filtering {
  constructor() {
    this.filterTicks()
    this.filterData()
  }

  filterTicks() {
    d3.selectAll('.tick text')
      .attr('class', function(d) {
        let city = this.textContent
        if (parseInt(city) || ["White", "Asian", "Hispanic", "Black"].includes(city)) return ""
        let cityClass = this.textContent.split(' ').join('-')
        return `city city-${cityClass}`
      })
  }

  filterData() {
    d3.selectAll('.city')
      .on('mouseover', (d, i) => {
        let className
        if (typeof d === "string") {
          className = `city-${d.split(' ').join('-')}`
        } else if (d.data) {
          className = d.data.class
        } else {
          className = d.class
        }
        const allOtherCityData = document.querySelectorAll(`.city:not(.${className})`)
        allOtherCityData.forEach(data => {
          data.classList.add("filter")
        })
      })
      .on('mouseleave', () => {
        const allCityData = document.querySelectorAll('.city')
        allCityData.forEach(data => {
          data.classList.remove("filter")
        })
      })
  }
}

export default Filtering
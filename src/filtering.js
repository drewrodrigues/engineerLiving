class Filtering {
  constructor() {
    this.filterData()
    this.colorTitle()
  }

  filterData() {
    d3.selectAll('.city')
      .on('mouseover', (d, i) => {
        let className
        if (d.data) {
          className = d.data.class
        } else {
          className = d.class
        }
        const allOtherCityData = document.querySelectorAll(`.city:not(.${className})`)
        allOtherCityData.forEach(data => {
          data.classList.add("filter")
        })

        // show toggleable data
        const toggleableData = document.querySelectorAll(`.${className}.city-data-toggle`)
        toggleableData.forEach(data => {
          data.classList.add("show")
        })
      })
      .on('mouseleave', () => {
        const allCityData = document.querySelectorAll('.city')
        allCityData.forEach(data => {
          data.classList.remove("filter")
        })
        
        // hide toggleable data
        const toggleableData = document.querySelectorAll(`.city-data-toggle`)
        toggleableData.forEach(data => {
          data.classList.remove("show")
        })
      })
  }

  colorTitle() {
    const title = d3.select('h1')
    d3.selectAll('.city')
      .on('mouseenter', d => {
        let color
        if (d.data) {
          color = d.data.color
        } else {
          color = d.color
        }
        title.style('color', color)
      })
      .on('mouseout', d => {
        title.style('color', '#ccc')
      })
  }
}

export default Filtering
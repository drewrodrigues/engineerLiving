export const SAN_FRANCISCO = "SAN_FRANCISCO"
const SAN_FRANCISCO_CITY = "San Francisco"
const SAN_FRANCISCO_CLASS = "city-San-Francisco"
const SAN_FRANCISCO_COLOR = "#f1c40f"

export const NEW_YORK = "NEW_YORK"
const NEW_YORK_CITY = "New York"
const NEW_YORK_CLASS = "city-New-York"
const NEW_YORK_COLOR = "#2980b9"

export const BOSTON = "BOSTON"
const BOSTON_CITY = "Boston"
const BOSTON_CLASS = "city-Boston"
const BOSTON_COLOR = "#e74c3c"

export const PORTLAND = "PORTLAND"
const PORTLAND_CITY = "Portland"
const PORTLAND_CLASS = "city-Portland"
const PORTLAND_COLOR = "#e67e22"

export const SEATTLE = "SEATTLE"
const SEATTLE_CITY = "Seattle"
const SEATTLE_CLASS = "city-Seattle"
const SEATTLE_COLOR = "#1abc9c"

export const AUSTIN = "AUSTIN"
const AUSTIN_CITY = "Austin"
const AUSTIN_CLASS = "city-Austin"
const AUSTIN_COLOR = "#34495e"

export const SAN_JOSE = "SAN_JOSE"
const SAN_JOSE_CITY = "San Jose"
const SAN_JOSE_CLASS = "city-San-Jose"
const SAN_JOSE_COLOR = "#9b59b6"

export const RALEIGN = "RALEIGN"
const RALEIGN_CITY = "Raleign"
const RALEIGN_CLASS = "city-Raleign"
const RALEIGN_COLOR = "#f39c12"

export const DENVER = "DENVER"
const DENVER_CITY = "Denver"
const DENVER_CLASS = "city-Denver"
const DENVER_COLOR = "#2980b9"

export const PHOENIX = "PHOENIX"
const PHOENIX_CITY = "Phoenix"
const PHOENIX_CLASS = "city-Phoenix"
const PHOENIX_COLOR = "#c0392b"

// happinessRank: https://wallethub.com/edu/happiest-places-to-live/32619/
// jobs: indeed search - software engineer w/ exact location only 3/24/2019
// salary: https://www.glassdoor.com/blog/25-best-paying-cities-software-engineers/

export const CITIES = {
  SAN_FRANCISCO: {
    adjustedSalary: 99751,
    city: SAN_FRANCISCO_CITY,
    color: SAN_FRANCISCO_COLOR,
    class: SAN_FRANCISCO_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 41.4 },
      { ethnicity: "Asian", percentage: 33.3 },
      { ethnicity: "Hispanic", percentage: 15.3 },
      { ethnicity: "Black", percentage: 5.5 }
    ],
    happinessRank: 10,
    medianHomePrice: 1331100,
    medianSalary: 120000,
    jobs: 7947,
    position: { x: 20, y: 160 },
    ranking: 1,
    sunnyDays: 256
  },
  NEW_YORK: {
    adjustedSalary: 100000, 
    city: NEW_YORK_CITY,
    color: NEW_YORK_COLOR,
    class: NEW_YORK_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 32.7 },
      { ethnicity: "Asian", percentage: 13.2 },
      { ethnicity: "Hispanic", percentage: 28.8 },
      { ethnicity: "Black", percentage: 22.6 }
    ],
    happinessRank: 110000,
    medianHomePrice: 662100,
    medianSalary: 110000,
    jobs: 8364,
    position: { x: 625, y: 135 },
    ranking: 2,
    sunnyDays: 224
  },
  BOSTON: {
    adjustedSalary: 90171, 
    city: BOSTON_CITY,
    color: BOSTON_COLOR,
    class: BOSTON_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 46 },
      { ethnicity: "Asian", percentage: 9.1 },
      { ethnicity: "Hispanic", percentage: 18.4 },
      { ethnicity: "Black", percentage: 22.7 }
    ],
    happinessRank: 58,
    medianHomePrice: 587000,
    medianSalary: 100000,
    jobs: 3630,
    position: { x: 650, y: 100 },
    ranking: 3,
    sunnyDays: 200
  },
  PORTLAND: {
    adjustedSalary: 89374, 
    city: PORTLAND_CITY,
    color: PORTLAND_COLOR,
    class: PORTLAND_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 71.8 },
      { ethnicity: "Asian", percentage: 7.4 },
      { ethnicity: "Hispanic", percentage: 9.6 },
      { ethnicity: "Black", percentage: 5.9 }
    ],
    happinessRank: 84,
    medianHomePrice: 427500,
    medianSalary: 90000,
    jobs: 2359,
    position: { x: 45, y: 90 },
    ranking: 3,
    sunnyDays: 144
  },
  SEATTLE: {
    adjustedSalary: 105735, 
    city: SEATTLE_CITY,
    color: SEATTLE_COLOR,
    class: SEATTLE_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 66.2 },
      { ethnicity: "Asian", percentage: 14.2 },
      { ethnicity: "Hispanic", percentage: 6.4 },
      { ethnicity: "Black", percentage: 7.2 }
    ],
    happinessRank: 54,
    medianHomePrice: 761800,
    medianSalary: 113242,
    jobs: 10417,
    position: { x: 45, y: 40 },
    ranking: 5,
    sunnyDays: 152
  },
  AUSTIN: {
    adjustedSalary: 90171, 
    city: AUSTIN_CITY,
    color: AUSTIN_COLOR,
    class: AUSTIN_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 48.7 },
      { ethnicity: "Asian", percentage: 6.5 },
      { ethnicity: "Hispanic", percentage: 34.8 },
      { ethnicity: "Black", percentage: 7.5 }
    ],
    happinessRank: 14,
    medianHomePrice: 346500,
    medianSalary: 100000,
    jobs: 4308,
    position: { x: 320, y: 350 },
    ranking: 6,
    sunnyDays: 228
  },
  SAN_JOSE: {
    adjustedSalary: 100989, 
    city: SAN_JOSE_CITY,
    color: SAN_JOSE_COLOR,
    class: SAN_JOSE_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 27.5 },
      { ethnicity: "Asian", percentage: 32.9 },
      { ethnicity: "Hispanic", percentage: 33.1 },
      { ethnicity: "Black", percentage: 2.9 }
    ],
    happinessRank: 8,
    medianHomePrice: 1083000,
    medianSalary: 122500,
    jobs: 3023,
    position: { x: 35, y: 190 },
    ranking: 7,
    sunnyDays: 204
  },
  RALEIGN: {
    adjustedSalary: 90000, 
    city: RALEIGN_CITY,
    color: RALEIGN_COLOR,
    class: RALEIGN_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 54 },
      { ethnicity: "Asian", percentage: 4.3 },
      { ethnicity: "Hispanic", percentage: 10.9 },
      { ethnicity: "Black", percentage: 28.5 }
    ],
    happinessRank: 23,
    medianHomePrice: 260100,
    medianSalary: 94142,
    jobs: 1377,
    position: { x: 600, y: 210 },
    ranking: 8,
    sunnyDays: 213
  },
  DENVER: {
    adjustedSalary: 85878, 
    city: DENVER_CITY,
    color: DENVER_COLOR,
    class: DENVER_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 52.9 },
      { ethnicity: "Asian", percentage: 3.4 },
      { ethnicity: "Hispanic", percentage: 31.2 },
      { ethnicity: "Black", percentage: 9.5 }
    ],
    happinessRank: 41,
    medianHomePrice: 421900,
    medianSalary: 90000,
    jobs: 1973,
    position: { x: 250, y: 170 },
    ranking: 9,
    sunnyDays: 245
  },
  PHOENIX: {
    adjustedSalary: 86765, 
    city: PHOENIX_CITY,
    color: PHOENIX_COLOR,
    class: PHOENIX_CLASS,
    diversity: [
      { ethnicity: "White", percentage: 46 },
      { ethnicity: "Asian", percentage: 3.3 },
      { ethnicity: "Hispanic", percentage: 40.5 },
      { ethnicity: "Black", percentage: 6.5 }
    ],
    happinessRank: 127,
    medianHomePrice: 229300,
    medianSalary: 87997,
    jobs: 1491,
    position: { x: 150, y: 255 },
    ranking: 10,
    sunnyDays: 299
  }
}

export const ANIMATION_DURATION = 1000
export const ANIMATION_DELAY = 0
export const ANIMATION_EASING = d3.easePoly

export const WIDTH = 200
export const HEIGHT = 200
export const MARGINS = 100
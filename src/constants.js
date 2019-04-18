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

export const RALEIGH = "RALEIGH"
const RALEIGH_CITY = "Raleigh"
const RALEIGH_CLASS = "city-Raleigh"
const RALEIGH_COLOR = "#f39c12"

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

const calculateRanking = cities => {
  return 0
}

export const CITIES = {
  SAN_FRANCISCO: {
    adjustedSalary: 99751,
    city: SAN_FRANCISCO_CITY,
    color: SAN_FRANCISCO_COLOR,
    constant: SAN_FRANCISCO,
    class: SAN_FRANCISCO_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .41 },
      { ethnicity: "Asian", percentage: .33 },
      { ethnicity: "Hispanic", percentage: .15 },
      { ethnicity: "Black", percentage: .05 }
    ],
    rentalCosts: [
      { type: "Studio", price: 2130 },
      { type: "1BR", price: 2639 },
      { type: "2BR", price: 3286 },
      { type: "3BR", price: 4291 },
      { type: "4BR", price: 4567 }
    ],
    happinessRank: 10,
    medianHomePrice: 1331100,
    medianSalary: 120000,
    jobs: 7947,
    position: { x: 20, y: 160 },
    sunnyDays: 256,
    points: 0
  },
  NEW_YORK: {
    adjustedSalary: 100000, 
    city: NEW_YORK_CITY,
    color: NEW_YORK_COLOR,
    constant: NEW_YORK,
    class: NEW_YORK_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .32 },
      { ethnicity: "Asian", percentage: .13 },
      { ethnicity: "Hispanic", percentage: .28 },
      { ethnicity: "Black", percentage: .22 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1743 },
      { type: "1BR", price: 1788 },
      { type: "2BR", price: 2049 },
      { type: "3BR", price: 2600 },
      { type: "4BR", price: 2771 }
    ],
    happinessRank: 90,
    medianHomePrice: 662100,
    medianSalary: 110000,
    jobs: 8364,
    position: { x: 625, y: 135 },
    sunnyDays: 224,
    points: 0
  },
  BOSTON: {
    adjustedSalary: 90171, 
    city: BOSTON_CITY,
    color: BOSTON_COLOR,
    constant: BOSTON,
    class: BOSTON_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .46 },
      { ethnicity: "Asian", percentage: .09 },
      { ethnicity: "Hispanic", percentage: .18 },
      { ethnicity: "Black", percentage: .22 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1639 },
      { type: "1BR", price: 1836 },
      { type: "2BR", price: 2238 },
      { type: "3BR", price: 2805 },
      { type: "4BR", price: 3027 }
    ],
    happinessRank: 58,
    medianHomePrice: 587000,
    medianSalary: 100000,
    jobs: 3630,
    position: { x: 650, y: 100 },
    sunnyDays: 200,
    points: 0
  },
  PORTLAND: {
    adjustedSalary: 89374, 
    city: PORTLAND_CITY,
    color: PORTLAND_COLOR,
    constant: PORTLAND,
    class: PORTLAND_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .71 },
      { ethnicity: "Asian", percentage: .07 },
      { ethnicity: "Hispanic", percentage: .09 },
      { ethnicity: "Black", percentage: .05 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1123 },
      { type: "1BR", price: 1225 },
      { type: "2BR", price: 1432 },
      { type: "3BR", price: 2073 },
      { type: "4BR", price: 2516 }
    ],
    happinessRank: 84,
    medianHomePrice: 427500,
    medianSalary: 90000,
    jobs: 2359,
    position: { x: 45, y: 90 },
    sunnyDays: 144,
    points: 0
  },
  SEATTLE: {
    adjustedSalary: 105735, 
    city: SEATTLE_CITY,
    color: SEATTLE_COLOR,
    constant: SEATTLE,
    class: SEATTLE_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .66 },
      { ethnicity: "Asian", percentage: .14 },
      { ethnicity: "Hispanic", percentage: .06 },
      { ethnicity: "Black", percentage: .07 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1570 },
      { type: "1BR", price: 1728 },
      { type: "2BR", price: 2108 },
      { type: "3BR", price: 3033 },
      { type: "4BR", price: 3583 }
    ],
    happinessRank: 54,
    medianHomePrice: 761800,
    medianSalary: 113242,
    jobs: 10417,
    position: { x: 45, y: 40 },
    sunnyDays: 152,
    points: 0
  },
  AUSTIN: {
    adjustedSalary: 90171, 
    city: AUSTIN_CITY,
    color: AUSTIN_COLOR,
    constant: AUSTIN,
    class: AUSTIN_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .48 },
      { ethnicity: "Asian", percentage: .06 },
      { ethnicity: "Hispanic", percentage: .34 },
      { ethnicity: "Black", percentage: .07 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1017 },
      { type: "1BR", price: 1186 },
      { type: "2BR", price: 1437 },
      { type: "3BR", price: 1897 },
      { type: "4BR", price: 2294 }
    ],
    happinessRank: 14,
    medianHomePrice: 346500,
    medianSalary: 100000,
    jobs: 4308,
    position: { x: 320, y: 350 },
    sunnyDays: 228,
    points: 0
  },
  SAN_JOSE: {
    adjustedSalary: 100989, 
    city: SAN_JOSE_CITY,
    color: SAN_JOSE_COLOR,
    constant: SAN_JOSE,
    class: SAN_JOSE_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .27 },
      { ethnicity: "Asian", percentage: .32 },
      { ethnicity: "Hispanic", percentage: .33 },
      { ethnicity: "Black", percentage: .02 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1927 },
      { type: "1BR", price: 2286 },
      { type: "2BR", price: 2807 },
      { type: "3BR", price: 3797 },
      { type: "4BR", price: 4350 }
    ],
    happinessRank: 8,
    medianHomePrice: 1083000,
    medianSalary: 122500,
    jobs: 3023,
    position: { x: 35, y: 190 },
    sunnyDays: 204,
    points: 0
  },
  RALEIGH: {
    adjustedSalary: 90000, 
    city: RALEIGH_CITY,
    color: RALEIGH_COLOR,
    constant: RALEIGH,
    class: RALEIGH_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .54 },
      { ethnicity: "Asian", percentage: .04 },
      { ethnicity: "Hispanic", percentage: .10 },
      { ethnicity: "Black", percentage: .28 }
    ],
    rentalCosts: [
      { type: "Studio", price: 868 },
      { type: "1BR", price: 975 },
      { type: "2BR", price: 1115 },
      { type: "3BR", price: 1435 },
      { type: "4BR", price: 1811 }
    ],
    happinessRank: 23,
    medianHomePrice: 260100,
    medianSalary: 94142,
    jobs: 1377,
    position: { x: 600, y: 210 },
    sunnyDays: 213,
    points: 0
  },
  DENVER: {
    adjustedSalary: 85878, 
    city: DENVER_CITY,
    color: DENVER_COLOR,
    constant: DENVER,
    class: DENVER_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .52 },
      { ethnicity: "Asian", percentage: .03 },
      { ethnicity: "Hispanic", percentage: .31 },
      { ethnicity: "Black", percentage: .09 }
    ],
    rentalCosts: [
      { type: "Studio", price: 1083 },
      { type: "1BR", price: 1265 },
      { type: "2BR", price: 1585 },
      { type: "3BR", price: 2231 },
      { type: "4BR", price: 2588 }
    ],
    happinessRank: 41,
    medianHomePrice: 421900,
    medianSalary: 90000,
    jobs: 1973,
    position: { x: 250, y: 170 },
    sunnyDays: 245,
    points: 0
  },
  PHOENIX: {
    adjustedSalary: 86765, 
    city: PHOENIX_CITY,
    color: PHOENIX_COLOR,
    constant: PHOENIX,
    class: PHOENIX_CLASS,
    diversity: [
      { ethnicity: "White", percentage: .46 },
      { ethnicity: "Asian", percentage: .03 },
      { ethnicity: "Hispanic", percentage: .40 },
      { ethnicity: "Black", percentage: .06 }
    ],
    rentalCosts: [
      { type: "Studio", price: 793 },
      { type: "1BR", price: 928 },
      { type: "2BR", price: 1147 },
      { type: "3BR", price: 1659 },
      { type: "4BR", price: 1900 }
    ],
    happinessRank: 127,
    medianHomePrice: 229300,
    medianSalary: 87997,
    jobs: 1491,
    position: { x: 150, y: 255 },
    sunnyDays: 299,
    points: 0
  }
}

export const ANIMATION_DURATION = 1000
export const ANIMATION_DELAY = 0
export const ANIMATION_EASING = d3.easePoly

export const WIDTH = 200
export const HEIGHT = 200
export const MARGINS = 100
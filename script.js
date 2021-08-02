const countryName = document.getElementsByClassName('countryname');
const population = document.getElementsByClassName('population');
const region = document.getElementsByClassName('region');
const capital = document.getElementsByClassName('capital');
const flagImage = document.getElementsByClassName('flagImage');
const countriesContainer = document.getElementsByClassName('countries-container');
const searchBox = document.getElementById('search');


fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => { makeCards(data); displayCountryData(data); } )
.catch(err => {console.log('Error: Cannot fetch data from this URL', err)})


let countriesData;

function makeCards(countries) {
  countriesData = countries;
  for (let i=0; i<countriesData.length; i++) {
    const carddiv = document.createElement('div');
    const flagdiv = document.createElement('div');
    const imgtag = document.createElement('img');
    const countryinfodiv = document.createElement('div');
    const countrynametag = document.createElement('p');
    const populationtag = document.createElement('p');
    const regiontag = document.createElement('p');
    const capitaltag = document.createElement('p');

    carddiv.appendChild(flagdiv);
    carddiv.appendChild(countryinfodiv);
    flagdiv.appendChild(imgtag);
    countryinfodiv.appendChild(countrynametag);
    countryinfodiv.appendChild(populationtag);
    countryinfodiv.appendChild(regiontag);
    countryinfodiv.appendChild(capitaltag);

    carddiv.setAttribute('class', 'card');
    flagdiv.setAttribute('class', 'flag');
    imgtag.setAttribute('class', 'flagImage');
    countryinfodiv.setAttribute('class', 'countryinfo');
    countrynametag.setAttribute('class', 'countryname');
    populationtag.setAttribute('class', 'population');
    regiontag.setAttribute('class', 'region');
    capitaltag.setAttribute('class', 'capital');

    const currentDiv = document.countriesContainer;
    document.body.insertBefore(carddiv, currentDiv);
  }
}


function displayCountryData(countries) {
  countriesData = countries;

  for (let i=0; i<countriesData.length; i++) {

    countryName[i].textContent = countriesData[i].name;
    population[i].textContent = `Population : ${countriesData[i].population}`;
    region[i].textContent = `Region : ${countriesData[i].region}`;
    capital[i].textContent = `Capital : ${countriesData[i].capital}`;
    flagImage[i].setAttribute('src', countriesData[i].flag); 
  }
}

const filteredCountries = [];

function searchCountry(e) {
  

}

searchBox.addEventListener('keyup', searchCountry);
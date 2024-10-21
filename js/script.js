"use strict";

document.getElementById('btn').addEventListener('click', displayCars);

function displayCars() {
    fetch('json/cars.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(cars => {
            const outputSection = document.querySelector('.outputCars');
            outputSection.innerHTML = ''; // Clear any existing content

            cars.forEach(car => {
                // Create list item for each car
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${car.img}" alt="${car.brandname} ${car.model}">
                    <h2>${car.brandname} ${car.model}</h2>
                    <p>Color: ${car.color}</p>
                    <p>Engine: ${car.engine}</p>
                `;
                outputSection.appendChild(li); // Append each car to the section
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

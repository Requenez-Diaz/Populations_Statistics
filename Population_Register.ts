import { populations } from "./data";
import { populationCensus } from "./data";

function higherPopulation() {
  const array: number[] = populationCensus.map(
    (value: populations) => value[2022]
  );
  const max: number = Math.max(...array);
  const result: populations[] = populationCensus.filter(
    (value: populations) => value[2022] === max
  );
  return result;
}

function LessPopulation() {
  const array: number[] = populationCensus.map(
    (value: populations) => value[2022]
  );
  const min: number = Math.min(...array);
  const result: populations[] = populationCensus.filter(
    (value: populations) => value[2022] === min
  );
  return result;
}

function OrderofPopulations() {
  const array: string[] = populationCensus.map(
    (value: populations) => value.name
  );
  const result = array.sort();
  return result;
}

function Highesttolowest() {
  const result = populationCensus.sort((a, b) => b[2022] - a[2022]);
  return result;
}

console.log(" Populations Register ");
console.log(" The cities with the largest population are: ", higherPopulation());
console.log(" Cities with less population: ", LessPopulation());
console.log(" The cities in alphabetical order are: ", OrderofPopulations());
console.log(" The cities from largest to smallest: => ", Highesttolowest());

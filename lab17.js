let nameInput = document.querySelector(`#name`);
let speciesInput = document.querySelector(`#species`);
let ageInput = document.querySelector(`#age`);
let output = document.querySelector(`#output`);

let objectArray = [];

class Animals {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
}

const makeListItems = (arrayList) => {
  let output = ``;
  for (let x of arrayList) {
    output += `<li>`;
    output += `${x.name}, ${x.species}, ${x.age}`;
    output += `</li>`;
  }
  return output;
};

const display = () => {
  nameInput.value = "";
  speciesInput.value = "";
  ageInput.value = "";
  output.innerHTML = `${makeListItems(objectArray)}`;
};

const addAnimal = () => {
  let newObject = new Animals(
    nameInput.value,
    speciesInput.value,
    +ageInput.value
  );
  objectArray.push(newObject);
  console.log(objectArray);
  display();
};

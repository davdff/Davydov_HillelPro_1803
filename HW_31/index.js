const container = document.createElement('div');
container.className = 'container';


const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';
firstNameInput.className = 'firstName_input';
firstNameInput.placeholder = 'Your name';


const secondNameInput = document.createElement('input');
secondNameInput.type = 'text';
secondNameInput.className = 'secondName_input';
secondNameInput.placeholder = 'Your surname';


const birthdayInput = document.createElement('input');
birthdayInput.type = 'text';
birthdayInput.className = 'birthday_input';
birthdayInput.placeholder = 'xx/xx/xxxx';


const genderMaleCheckbox = document.createElement('input');
genderMaleCheckbox.type = 'radio';
genderMaleCheckbox.className = 'genderMale_checkbox';
genderMaleCheckbox.name = 'gender';
genderMaleCheckbox.value = 'Male';

const labelForMaleCheckbox = document.createElement('label');
labelForMaleCheckbox.textContent = 'Male';
labelForMaleCheckbox.className = 'label_for_male';
labelForMaleCheckbox.prepend(genderMaleCheckbox);



const genderFemaleCheckbox = document.createElement('input');
genderFemaleCheckbox.type = 'radio';
genderFemaleCheckbox.className = 'genderFemale_checkbox';
genderFemaleCheckbox.name = 'gender';
genderFemaleCheckbox.value = 'Female';

const labelForFemaleCheckbox = document.createElement('label');
labelForFemaleCheckbox.textContent = 'Female';
labelForFemaleCheckbox.className = 'label_for_female';
labelForFemaleCheckbox.prepend(genderFemaleCheckbox);




const citySelect = document.createElement('select');
citySelect.className = 'city_select'

const option1 = document.createElement('option');
option1.text = 'Choose a city';
citySelect.add(option1);

const option2 = document.createElement('option');
option2.text = 'Kyiv';
citySelect.add(option2);

const option3 = document.createElement('option');
option3.text = 'Dnipro';
citySelect.add(option3);

const option4 = document.createElement('option');
option4.text = 'Lviv';
citySelect.add(option4);



const addressArea = document.createElement('textarea');
addressArea.className = 'address_textarea';
addressArea.rows = '3';
addressArea.placeholder = 'Your address';



const languageContainer = document.createElement('div');
languageContainer.className = 'language_container';

const languages = [
    { id: 'en', text: 'English' },
    { id: 'ua', text: 'Ukrainian' },
    { id: 'ge', text: 'German' }
];

languages.forEach(language => {
    const languageInput = document.createElement('input');
    languageInput.type = 'checkbox';
    languageInput.name = 'language1'
    languageInput.id = language.id;
    languageInput.value = language.id;
    const labelForLanguage = document.createElement('label');
    labelForLanguage.textContent = language.text;
    labelForLanguage.htmlFor = language.id;
    languageContainer.appendChild(languageInput);
    languageContainer.appendChild(labelForLanguage);
});



const submitBtn = document.createElement('button');
submitBtn.className = 'submit_button';
submitBtn.addEventListener('click', () => {
    const firstName = document.querySelector(".firstName_input").value;
    const secondName = document.querySelector(".secondName_input").value
    const birthday = document.querySelector(".birthday_input").value;
    const gender = document.querySelector(".genderMale_checkbox, .genderFemale_checkbox").value;
    const city = document.querySelector(".city_select").value;
    const address = document.querySelector(".address_textarea").value
    const selectedLanguages = [...document.querySelectorAll('input[name="language1"]:checked')].map(el => el.value);

    const table = document.createElement("table");
    const row1 = document.createElement('tr');
    const row2 = document.createElement('tr');
    const row3 = document.createElement('tr');
    const row4 = document.createElement('tr');
    const row5 = document.createElement('tr');
    const row6 = document.createElement('tr');
    const row7 = document.createElement('tr');

    if (
        firstName === "" ||
        secondName === "" ||
        birthday === "" ||
        gender === "" ||
        city === option1 ||
        address === "" ||
        selectedLanguages === ""
    ) {
        alert("Fill in all the fields")
    } else {
        row1.innerHTML = firstName;
        row2.innerHTML = secondName;
        row3.innerHTML = birthday;
        row4.innerHTML = gender;
        row5.innerHTML = city;
        row6.innerHTML = address;
        row7.innerHTML = selectedLanguages.join(', ');;

        const cell = document.createElement("td");

        row1.appendChild(cell);
        row2.appendChild(cell);
        row3.appendChild(cell);
        row4.appendChild(cell);
        row5.appendChild(cell);
        row6.appendChild(cell);
        row7.appendChild(cell);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);
        table.appendChild(row5);
        table.appendChild(row6);
        table.appendChild(row7);

        container.appendChild(table)
    }

})




document.body.append(container);
container.appendChild(firstNameInput);
container.appendChild(secondNameInput);
container.appendChild(birthdayInput);
container.appendChild(labelForMaleCheckbox);
container.appendChild(labelForFemaleCheckbox);
container.appendChild(citySelect);
container.appendChild(addressArea);
container.appendChild(languageContainer);
container.appendChild(submitBtn);

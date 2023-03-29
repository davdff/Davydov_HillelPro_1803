let yearOfBirth = prompt("Введіть ваш рік народження");
let city = prompt("Введіть ваше місто");
let favouriteSport = prompt("Введіть ваш улюблений вид спорту");

if (yearOfBirth === null || city === null || favouriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свію інформацію");
} else {
    let age = Number(2023 - yearOfBirth);
    let message = `Тобі ${age} років.\n`;

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        switch (city) {
            case "Київ":
                message += "Ти живеш у столиці України.\n";
                break;
            case "Вашингтон":
                message += "Ти живеш у столиці США.\n";
                break;
            case "Лондон":
                message += "Ти живеш у столиці Великобританії.\n";
                break;
        }
    } else {
        message += `Ти живеш у місті ${city}.\n`;
    }

    if (favouriteSport === "футбол") {
        message += "Круто! Хочеш стати як Ліонель Мессі?";
    } else if (favouriteSport === "баскетбол") {
        message += "Круто! Хочеш стати як Майкл Джордан?";
    } else if (favouriteSport === "теніс") {
        message += "Круто! Хочеш стати як Роджер Федерер?";
    } else {
        message += `Твій улюблений вид спорту - ${favouriteSport}.\n`;
        message += "Можливо ти станеш найкращим у цьому виді спорту";
    }

    alert(message);
}
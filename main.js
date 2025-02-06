/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/pageLoad.js
function loadPage() {
    const content = document.querySelector("#content");

    const welcome = document.createElement("h1");
    welcome.textContent = "We welcome you to the world of healthy delights.";

    const description = document.createElement("p");
    description.textContent = "Since 2015 our mission is to prove that a healthy lifestyle and hedonistic pleasure don't exclude each other but can go hand in hand.";

    content.appendChild(welcome);
    content.appendChild(description);
}

;// ./src/menuLoad.js
function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const welcome = document.createElement("h2");
    welcome.textContent = "Menu";

    const iframe = document.createElement("iframe");
    iframe.src = "menu.pdf";
    iframe.style.width="100%";
    iframe.style.height="1000px";
    
    content.appendChild(welcome);
    content.appendChild(iframe);
}
;// ./src/aboutLoad.js
function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const about = document.createElement("h2");
    about.textContent = "About Us";
    
    const text = document.createElement("p");
    text.textContent = "Our restaurant was founded in 2015 with the goal of serving healthy, delicious meals.";

    content.appendChild(about);
    content.appendChild(text);


    const form = document.createElement("form");

    const fields = [
        {label: "User Name", type: "text", id: "userName", required: true},
        {label: "Password", type: "password", id: "password", required: true},
        {label: "Stay logged in", type: "checkbox", id: "stayLoggedIn", required: false}
    ]

    fields.forEach(field => {
        const label = document.createElement("label");
        label.textContent = field.label;
        label.setAttribute("for", field.id)

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.required = field.required;

        form.appendChild(label);
        form.appendChild(input);

    })

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit"
    form.appendChild(button);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const stayLoggedIn = document.querySelector("#stayLoggedIn").checked;

        alert(`Login successful! Stay logged in: ${stayLoggedIn ? "Yes" : "No"}`);

    })

    content.appendChild(form);

}
;// ./src/reservationLoad.js
function loadReservation() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const reservation = document.createElement("h2");
    reservation.textContent = "Reservation";
    content.appendChild(reservation);

    const form = document.createElement("form");

    // Erstelle ein Hilfsobjekt mit den Feldern
    const fields = [
        { label: "Tag:", type: "date", id: "date" },
        { label: "Uhrzeit:", type: "time", id: "time" },
        { label: "Anzahl Personen:", type: "number", id: "people", min: "1" },
        { label: "E-Mail:", type: "email", id: "email" }
    ];

    // Erstelle die Input-Felder mit Labels
    fields.forEach(field => {
        const label = document.createElement("label");
        label.textContent = field.label;
        label.setAttribute("for", field.id);

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.required = true;
        if (field.min) input.min = field.min;

        form.appendChild(label);
        form.appendChild(input);
    });

    // Absenden-Button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Anfrage senden";
    submitButton.type = "submit";

    form.appendChild(submitButton);

    // Event-Listener für das Formular
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Reservierung eingereicht:");
        console.log("Tag:", document.getElementById("date").value);
        console.log("Uhrzeit:", document.getElementById("time").value);
        console.log("Anzahl Personen:", document.getElementById("people").value);
        console.log("E-Mail:", document.getElementById("email").value);
        alert("Ihre Reservierungsanfrage wurde gesendet!");
    });

    // Formular in den Inhalt einfügen
    content.appendChild(form);
}

;// ./src/index.js
// index.js






document.addEventListener("DOMContentLoaded", () => {
    loadPage();
})

document.querySelector("#btn-menu").addEventListener("click", () => {
    loadMenu();
})

document.querySelector("#btn-about").addEventListener("click", () => {
    loadAbout();
})

document.querySelector("#btn-reservation").addEventListener("click", () => {
    loadReservation();
})
/******/ })()
;
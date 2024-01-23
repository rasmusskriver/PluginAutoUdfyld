// content.js

console.log("Content script loaded");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Message received:", request);

  function fillForm() {
    console.log("Filling the form");

    // Indtast dine ønskede værdier her
    var data = {
      brugernavn: 'DitBrugernavn',
      adgangskode: 'DinAdgangskode',
      email: 'DinEmail@example.com',
      alder: '25',
      køn: 'mand',
      foretrukketSprog: ['dansk', 'engelsk'],
      kommentar: 'Din kommentar her'
    };

    // Fyld brugernavn
    $('#brugernavn').val(data.brugernavn);

    // Fyld adgangskode
    $('#adgangskode').val(data.adgangskode);

    // Fyld e-mail
    $('#email').val(data.email);

    // Fyld alder
    $('#alder').val(data.alder);

    // Fyld køn
    $('#køn').val(data.køn);

    // Fyld foretrukne sprog
    $('input[name="foretrukketSprog"]').each(function () {
      if (data.foretrukketSprog.includes($(this).val())) {
        $(this).prop('checked', true);
      }
    });

    // Fyld kommentar
    $('#kommentar').val(data.kommentar);
  }

  // Kald fillForm når besked 'autofill' modtages
  if (request.action === 'autofill') {
    console.log("Autofill action triggered");
    fillForm();
  } else {
    console.log("Unknown action:", request.action);
  }
});

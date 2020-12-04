$(document).ready(function () {
  const sakrijForme = () => $(".forma").hide();
  var anketa = [];
  $("#ulaznaForm").submit(function (e) {
    e.preventDefault();
    prikaziPersonalForma();
  });

  $("#personalForm").submit(function (e) {
    e.preventDefault();
    prikaziPorekloForma();
    anketa.push(validacijaFormPersonal());
  });

  $("#porekloForm").submit(function (e) {
    e.preventDefault();
    prikaziFeedbackForma();
    anketa.push(validacijaFormPoreklo());
  });

  $("#feedbackForm").submit(function (e) {
    e.preventDefault();
    anketa.push(validacijaFormFeedback());
    firestoreUpis(anketa);
  });

  $("#nazadPersonalBtn").click(function (e) {
    e.preventDefault();
    prikaziUlaznaForma();
  });

  $("#nazadPorekloBtn").click(function (e) {
    e.preventDefault();
    prikaziPersonalForma();
  });

  $("#nazadFeedbackBtn").click(function (e) {
    e.preventDefault();
    prikaziPorekloForma();
  });

  // Funkcije ************************************************************************************************************************************************
  // Funkcije ************************************************************************************************************************************************

  function prikaziUlaznaForma() {
    sakrijForme();

    $("#ulaznaDiv").css("display", "flex");
  }

  function prikaziPersonalForma() {
    sakrijForme();
    $("#personalDiv").css("display", "flex");
  }
  function prikaziPorekloForma() {
    sakrijForme();
    $("#porekloDiv").css("display", "flex");
  }
  function prikaziFeedbackForma() {
    sakrijForme();
    $("#feedbackDiv").css("display", "flex");
  }

  $("#ocenaRange").change(function (e) {
    e.preventDefault();
    $("prikaziOcena").html($("#ocenaRange").val());
  });

  function validacijaFormPersonal() {
    const ime = $("#imeTxt").val();
    const prezime = $("#prezimeTxt").val();
    const email = $("#emailTxt").val();
    var personalObj = {
      ime: ime,
      prezime: prezime,
      email: email,
    };
    return personalObj;
  }
  function validacijaFormPoreklo() {
    const poreklo = $("input[name=porekloRadio]:checked", "#porekloForm").val();
    const naucili = $("input[name=nauciliNovo]:checked", "#porekloForm").val();
    var porekloObj = {
      poreklo: poreklo,
      naucili: naucili,
    };
    return porekloObj;
  }
  function validacijaFormFeedback() {
    const ocena = $("#ocenaRange").val();
    const poruka = $("#messageTxt").val();
    var feedbackObj = {
      ocena: ocena,
      feedback: poruka,
    };
    return feedbackObj;
  }

  function firestoreUpis(anketa) {
    let personal = anketa[0];
    let poreklo = anketa[1];
    let feedback = anketa[2];

    var db = firebase.firestore();

    db.collection("feedback").doc(`${new Date().valueOf()}`).set({
      ime: personal.ime,
      prezime: personal.prezime,
      email: personal.email,
      poreklo: poreklo.poreklo,
      naucili: poreklo.naucili,
      ocena: feedback.ocena,
      feedback: feedback.feedback,
    });
    alert("Hvala na slanju poruke!");
  }
});

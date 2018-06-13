var jsonEncuesta;
var encuesta = [];
var saved = localStorage.getItem("encuesta");

if (saved == null) {
  encuesta = [];
  var none = `<span>No hay ninguna respouesta guardada</span>`;
  $("#none").append(none);
} else {
  encuesta = JSON.parse(saved).encuesta;
}

function cargarPaises() {
  var paises = [
    { nombre: "Argentina", codigo: "AR" },
    { nombre: "Bolivia", codigo: "BO" },
    { nombre: "Brasil", codigo: "BR" },
    { nombre: "Chile", codigo: "CL" },
    { nombre: "Paraguay", codigo: "PY" },
    { nombre: "Uruguay", codigo: "UY" }
  ];

  for (var i = 0; i < paises.length; i++) {
    var option = `<option>` + paises[i].nombre + `</option>`;
    $("#pais").append(option);
  }
}
cargarPaises();

function createJSON() {
  var data = {
    origen: $("#pais").val(),
    lenguaje: $('input[name="lenguaje"]:checked').val(),
    sistema: $('input[name="sistema"]:checked').val(),
    editor: $('input[name="editor"]:checked').val(),
    antiguedad: $('input[name="antiguedad"]:checked').val()
  };

  encuesta.push(data);

  jsonEncuesta = {
    encuesta: encuesta,
    total: encuesta.length
  };
  let string = JSON.stringify(jsonEncuesta);

  localStorage.setItem("encuesta", string);
}

function cargarResultados() {
  $.each(encuesta, function(index, elem) {
    let htmlToAppend;

    htmlToAppend = `<section class="bottom"><label class="option first" id="country"><p>${
      elem.origen
    }</p></label>`;
    htmlToAppend += `<label class="option" id="leng"><p>${
      elem.lenguaje
    }</p></label>`;
    htmlToAppend += `<label class="option" id="so"><p>${
      elem.sistema
    }</p></label>`;
    htmlToAppend += `<label class="option mobile" id="edit"><p>${
      elem.editor
    }</p></label>`;
    htmlToAppend += `<label class="option" id="ant"><p>${
      elem.antiguedad
    }</p></label></section>`;
    $("#result").append(htmlToAppend);
  });
}

$("#send").on("click", e => {
  e.preventDefault();
  let pais = $("#pais").val();
  let radio = $(".validar-radio").filter(":checked");
  if (!pais || !radio) {
    $("#alert").html(" *Todos los campos son requeridos.");
    setTimeout(function() {
      $("#alert").addClass("none");
    }, 2000);
  } else {
    createJSON();

    var input = $("input"); //vaciar input
    $.each(input, function(indice, elemento) {
      if (elemento.type != "button") {
        $("#pais").val("-1");
      }
      window.location.reload(true);
    });

    for (var i = 0; i < input.length; ++i) {
      input[i].checked = false; // deseleccionar checks
    }
  }
});

var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var resultados = JSON.parse(localStorage.getItem("encuesta"));

var argentina = 0;
var bolivia = 0;
var brasil = 0;
var chile = 0;
var paraguay = 0;
var uruguay = 0;

for (var i = 0; i < resultados.encuesta.length; i++) {
  var resultadosOrigen = resultados.encuesta[i].origen;
  if (resultadosOrigen == "Argentina") {
    argentina++;
  } else if (resultadosOrigen == "Bolivia") {
    bolivia++;
  } else if (resultadosOrigen == "Brasil") {
    brasil++;
  } else if (resultadosOrigen == "Chile") {
    chile++;
  } else if (resultadosOrigen == "Paraguay") {
    paraguay++;
  } else if (resultadosOrigen == "Uruguay") {
    uruguay++;
  }
}

var oilData = {
  labels: ["Argentina", "Bolivia", "Brasil", "Chile", "Paraguay", "Uruguay"],
  datasets: [
    {
      data: [argentina, bolivia, brasil, chile, paraguay, uruguay],
      backgroundColor: [
        "#F5B7B1",
        "#D7BDE2",
        "#D2B4DE",
        "#A9CCE3",
        "#AED6F1",
        "#A3E4D7"
      ]
    }
  ]
};

var pieChart = new Chart(oilCanvas, {
  type: "pie",
  data: oilData
});


// chart lenguajes

var oilCanvas = document.getElementById("lenguajeChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var resultados = JSON.parse(localStorage.getItem("encuesta"));

var javascript = 0;
var java = 0;
var c = 0;

for (var i = 0; i < resultados.encuesta.length; i++) {
  var resultadosLeng = resultados.encuesta[i].lenguaje;
  if (resultadosLeng == "JavaScript") {
    javascript++;
  } else if (resultadosLeng == "Java") {
    java++;
  } else if (resultadosLeng == "C#") {
    c++;
  } 
}

var lenguajeData = {
  labels: ["JavaScript", "Java", "C#"],
  datasets: [
    {
      data: [javascript, java, c],
      backgroundColor: [
        "#F5B7B1",
        "#D7BDE2",
        "#A3E4D7"
      ]
    }
  ]
};

var lenguajeData = new Chart(oilCanvas, {
  type: "pie",
  data: lenguajeData
});

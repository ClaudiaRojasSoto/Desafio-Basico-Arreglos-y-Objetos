/*
1. Crear la estructura de datos mediante arreglos y objetos. 
Debe crear 1 arreglo por cada listado (Radiología, Traumatología y 
Dental) y 1 objeto por cada fila de información que contengan los 
listados, considerando las propiedades establecidas en la descripción.*/

// Arreglo 1
let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];

console.log(radiologia);

// Arreglo 2
let traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
]

console.log(traumatologia);

// Arreglo 3
let dental = [
    {
        hora: "08:30",
        especialista: "IANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

console.log(radiologia);

/* 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando
el nombre del paciente junto con la previsión, separados por un guión (utilizar índices de 
arreglos para esto).
Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre. */

document.getElementById("mensaje-radio").innerText = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.`;

document.getElementById("mensaje-trauma").innerText = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.`;

document.getElementById("mensaje-den").innerText = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.`;


/*
3. Recorrer el arreglo y mostrar su contenido en una tabla.*/

var datos =
    "<tr><td><strong>Hora</strong></td><td><strong>Especialista</strong></td><td><strong>Paciente</strong></td><td><strong>Rut</strong></td><td><strong>Previsión</strong></td></tr>";
for (var i = 0; i < radiologia.length; i++) {
    datos += `<tr>
      <td>${radiologia[i].hora}</td>
      <td>${radiologia[i].especialista}</td>
      <td>${radiologia[i].paciente}</td>
      <td>${radiologia[i].rut}</td>
      <td>${radiologia[i].prevision}</td>
  </tr>`;
}
document.getElementById("cuerpo-tablaradio").innerHTML = datos;


var datos =
    "<tr><td><strong>Hora</strong></td><td><strong>Especialista</strong></td><td><strong>Paciente</strong></td><td><strong>Rut</strong></td><td><strong>Previsión</strong></td></tr>";
for (var i = 0; i < traumatologia.length; i++) {
    datos += `<tr>
      <td>${traumatologia[i].hora}</td>
      <td>${traumatologia[i].especialista}</td>
      <td>${traumatologia[i].paciente}</td>
      <td>${traumatologia[i].rut}</td>
      <td>${traumatologia[i].prevision}</td>
  </tr>`;
}
document.getElementById("cuerpo-tablatraum").innerHTML = datos;


var datos =
    "<tr><td><strong>Hora</strong></td><td><strong>Especialista</strong></td><td><strong>Paciente</strong></td><td><strong>Rut</strong></td><td><strong>Previsión</strong></td></tr>";
for (var i = 0; i < dental.length; i++) {
    datos += `<tr>
      <td>${dental[i].hora}</td>
      <td>${dental[i].especialista}</td>
      <td>${dental[i].paciente}</td>
      <td>${dental[i].rut}</td>
      <td>${dental[i].prevision}</td>
  </tr>`;
}
document.getElementById("cuerpo-tabladen").innerHTML = datos;




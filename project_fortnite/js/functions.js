window.onload = function() {
    ExtendedDate();
};

function ExtendedDate() {
 
 var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
 var month =  ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
 var date = new Date();
        document.getElementById("day").innerHTML = week[date.getDay()] + " , " + String(date.getDate()).padStart(2, '0') + " " + month[date.getMonth()] + " " + date.getFullYear();

 }


var map1Element = document.getElementById('map1');
var map2Element = document.getElementById('map2');
var map3Element = document.getElementById('map3');
var map4Element = document.getElementById('map4');
var map1copyElement = document.getElementById('map1copy');
var map2copyElement = document.getElementById('map2copy');
var map3copyElement = document.getElementById('map3copy');
var map4copyElement = document.getElementById('map4copy');


// Cria o mapa e o adiciona ao elemento de mapa

//map1
var map1 = L.map(map1Element).setView([51.505, -0.09], 13);
map1.invalidateSize();

//map2
var map2 = L.map(map2Element).setView([51.505, -0.09], 13);
map2.invalidateSize();

//map3
var map3 = L.map(map3Element).setView([51.505, -0.09], 13);
map3.invalidateSize();

//map4
var map4 = L.map(map4Element).setView([51.505, -0.09], 13);
map4.invalidateSize();

//map1copy
var map1copy = L.map(map1copyElement).setView([51.505, -0.09], 13);
$('#Modal1').on('shown.bs.modal', function() {
  map1copy.invalidateSize();
});

//map2copy
var map2copy = L.map(map2copyElement).setView([51.505, -0.09], 13);
$('#Modal3').on('shown.bs.modal', function() {
  map2copy.invalidateSize();
});

//map3copy
var map3copy = L.map(map3copyElement).setView([51.505, -0.09], 13);
$('#Modal4').on('shown.bs.modal', function() {
  map3copy.invalidateSize();
});

//map4copy
var map4copy = L.map(map4copyElement).setView([51.505, -0.09], 13);
$('#Modal2').on('shown.bs.modal', function() {
  map4copy.invalidateSize();
});






L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map1copy);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map2copy);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map3copy);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map4copy);



// Adiciona uma camada de mapa base



  // Define os ícones de marcador personalizados
  var redMarkerIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var greenMarkerIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });





function ViewModel({localRecolha, localEntrega, diaRecolha, horaRecolha, prioridade, coordsRecolha, coordsEntrega, bagagens}) {
  self = this

  
  self.alerta = ko.observable();
  self.clearAlerta = function() {
    self.alerta('');
  }
  self.localRecolha = ko.observableArray(localRecolha);
  self.localEntrega = ko.observableArray(localEntrega);
  self.diaRecolha = ko.observableArray(diaRecolha);
  self.horaRecolha = ko.observableArray(horaRecolha);
  self.prioridade = ko.observableArray(prioridade);
  self.coordsRecolha = ko.observableArray(coordsRecolha);
  self.coordsEntrega = ko.observableArray(coordsEntrega);
  self.bagagens = ko.observableArray(bagagens);


    //map1
    var markerRecolha1 = L.layerGroup().addTo(map1);
    var markerEntrega1 = L.layerGroup().addTo(map1);

    //map2
    var markerRecolha2 = L.layerGroup().addTo(map2);
    var markerEntrega2 = L.layerGroup().addTo(map2);


    //map3
    var markerRecolha3 = L.layerGroup().addTo(map3);
    var markerEntrega3 = L.layerGroup().addTo(map3);

    
    //map4
    var markerRecolha4 = L.layerGroup().addTo(map4);
    var markerEntrega4 = L.layerGroup().addTo(map4);

    //map1copy
    var markerRecolha1copy = L.layerGroup().addTo(map1copy);
    var markerEntrega1copy = L.layerGroup().addTo(map1copy);  

    //map2copy
    var markerRecolha2copy = L.layerGroup().addTo(map2copy);
    var markerEntrega2copy = L.layerGroup().addTo(map2copy);

    //map3copy
    var markerRecolha3copy = L.layerGroup().addTo(map3copy);
    var markerEntrega3copy = L.layerGroup().addTo(map3copy);

    //map4copy
    var markerRecolha4copy = L.layerGroup().addTo(map4copy);
    var markerEntrega4copy = L.layerGroup().addTo(map4copy);

    // Adiciona um marcador para o local de colheita quando a posição é definida


      // Cria um controlador de rota
      //map1
    var router1 = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[0]),
        L.latLng(self.coordsEntrega()[0])
      ],
      lineOptions: {
        styles: [{color: 'green', opacity: 0.8, weight: 6}]
      }
    });
    router1.addTo(map1);

    //map2
    var router2 = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[1]),
        L.latLng(self.coordsEntrega()[1])
      ],
      lineOptions: {
        styles: [{color: 'red', opacity: 0.6, weight: 6}]
      }
    });
    router2.addTo(map2);

    //map3
    var router3 = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[2]),
        L.latLng(self.coordsEntrega()[2])
      ],
      lineOptions: {
        styles: [{color: 'blue', opacity: 0.7, weight: 6}]
      }
    });
    router3.addTo(map3);

    //map4
    var router4 = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[3]),
        L.latLng(self.coordsEntrega()[3])
      ],
      lineOptions: {
        styles: [{color: 'green', opacity: 0.7, weight: 6}]
      }
    });
    router4.addTo(map4);

    //map1copy
    var router1copy = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[0]),
        L.latLng(self.coordsEntrega()[0])
      ],
      lineOptions: {
        styles: [{color: 'green', opacity: 0.8, weight: 6}]
      }
    });
    router1copy.addTo(map1copy);

    //map2copy
    var router2copy = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[1]),
        L.latLng(self.coordsEntrega()[1])
      ],
      lineOptions: {
        styles: [{color: 'red', opacity: 0.6, weight: 6}]
      }
    });
    router2copy.addTo(map2copy);

    //map3copy
    var router3copy = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[2]),
        L.latLng(self.coordsEntrega()[2])
      ],
      lineOptions: {
        styles: [{color: 'blue', opacity: 0.7, weight: 6}]
      }
    });
    router3copy.addTo(map3copy);

    //map4copy
    var router4copy = L.Routing.control({
      waypoints: [
        L.latLng(self.coordsRecolha()[3]),
        L.latLng(self.coordsEntrega()[3])
      ],
      lineOptions: {
        styles: [{color: 'green', opacity: 0.7, weight: 6}]
      }
    });
    router4copy.addTo(map4copy);

    
    //Adiciona um marcador para o local de entrega quando a posição é definida

    //map1
    L.marker(self.coordsRecolha()[0], {title: self.localRecolha()[0], icon: greenMarkerIcon}).addTo(markerRecolha1);
    L.marker(self.coordsEntrega()[0], {title: self.localEntrega()[0], icon: redMarkerIcon}).addTo(markerEntrega1);

    //map2
    L.marker(self.coordsRecolha()[1], {title: self.localRecolha()[1], icon: greenMarkerIcon}).addTo(markerRecolha2);
    L.marker(self.coordsEntrega()[1], {title: self.localEntrega()[1], icon: redMarkerIcon}).addTo(markerEntrega2);

    //map3
    L.marker(self.coordsRecolha()[2], {title: self.localRecolha()[2]+" - "+" Local de Recolha", icon: greenMarkerIcon}).addTo(markerRecolha3);
    L.marker(self.coordsEntrega()[2], {title: self.localEntrega()[2]+" - "+" Local de Entrega", icon: redMarkerIcon}).addTo(markerEntrega3);

    //map4
    L.marker(self.coordsRecolha()[3], {title: self.localRecolha()[3]+" - "+" Local de Recolha", icon: greenMarkerIcon}).addTo(markerRecolha4);
    L.marker(self.coordsEntrega()[3], {title: self.localEntrega()[3]+" - "+" Local de Entrega", icon: redMarkerIcon}).addTo(markerEntrega4);

    //map1copy
    var e1 = L.marker(self.coordsRecolha()[0], {title: self.localRecolha()[0], icon: greenMarkerIcon}).addTo(markerRecolha1copy)
    var m1 = L.marker(self.coordsEntrega()[0], {title: self.localEntrega()[0], icon: redMarkerIcon}).addTo(markerEntrega1copy)
    
    //map2copy
    var e2 = L.marker(self.coordsRecolha()[1], {title: self.localRecolha()[1], icon: greenMarkerIcon}).addTo(markerRecolha2copy)
    var m2 = L.marker(self.coordsEntrega()[1], {title: self.localEntrega()[1], icon: redMarkerIcon}).addTo(markerEntrega2copy)

    //map3copy
    var e3 = L.marker(self.coordsRecolha()[2], {title: self.localRecolha()[2], icon: greenMarkerIcon}).addTo(markerRecolha3copy)
    var m3 = L.marker(self.coordsEntrega()[2], {title: self.localEntrega()[2], icon: redMarkerIcon}).addTo(markerEntrega3copy)

    //map4copy
    var e4 = L.marker(self.coordsRecolha()[3], {title: self.localRecolha()[3], icon: greenMarkerIcon}).addTo(markerRecolha4copy)
    var m4 = L.marker(self.coordsEntrega()[3], {title: self.localEntrega()[3], icon: redMarkerIcon}).addTo(markerEntrega4copy)





     // Converte os nomes de localidades em coordenadas geográficas usando a API de geocodificação do OpenStreetMap
     function geocodeLocation(locationName, positionObservable) {
        var apiUrl = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(locationName) + '&countrycodes=PT';;
        $.ajax({
          url: apiUrl,
          dataType: 'json',
          success: function(data) {
            if (data.length > 0) {
              var location = data[0];
              positionObservable([location.lat, location.lon]);
            }
          }
        });
      }
      
        // Ajusta o mapa de forma a incluir os dois marcadores

    //map1
    function adjustMapToFitMarkers1() {
    if (self.coordsRecolha()[0] && self.coordsEntrega()[0]) {
      var bounds = L.latLngBounds(self.coordsRecolha()[0], self.coordsEntrega()[0]);
      map1.fitBounds(bounds);
      map1.setZoom(map1.getBoundsZoom(bounds)-0.45);
    }}
    adjustMapToFitMarkers1();

    //map2
    function adjustMapToFitMarkers2() {
    if (self.coordsRecolha()[1] && self.coordsEntrega()[1]) {
      var bounds = L.latLngBounds(self.coordsRecolha()[1], self.coordsEntrega()[1]);
      map2.fitBounds(bounds);
      map2.setZoom(map2.getBoundsZoom(bounds)-0.45);
    }}
    adjustMapToFitMarkers2();
    
    //map3
    function adjustMapToFitMarkers3() {
    if (self.coordsRecolha()[2] && self.coordsEntrega()[2]) {
      var bounds = L.latLngBounds(self.coordsRecolha()[2], self.coordsEntrega()[2]);
      map3.fitBounds(bounds);
      map3.setZoom(map3.getBoundsZoom(bounds)-0.50);
    }}
    adjustMapToFitMarkers3();    

    //map4
    function adjustMapToFitMarkers4() {
    if (self.coordsRecolha()[3] && self.coordsEntrega()[3]) {
      var bounds = L.latLngBounds(self.coordsRecolha()[3], self.coordsEntrega()[3]);
      map4.fitBounds(bounds);
      map4.setZoom(map4.getBoundsZoom(bounds)-0.45);
    }}
    adjustMapToFitMarkers4();

    
    

    $('#Modal1').on('shown.bs.modal', function() {
      //map1copy
      function adjustMapToFitMarkers1copy() {
        if (self.coordsRecolha()[0] && self.coordsEntrega()[0]) {
          var bounds = L.latLngBounds(self.coordsRecolha()[0], self.coordsEntrega()[0]);
          map1copy.fitBounds(bounds);    
          map1copy.setZoom(map1.getBoundsZoom(bounds)-0.55);
        }}
        adjustMapToFitMarkers1copy();
        e1.bindPopup(self.localRecolha()[0]+" - "+" Local de Recolha").openPopup();
        m1.bindPopup(self.localEntrega()[0]+" - "+" Local de Entrega").openPopup();
    });
    
    $('#Modal2').on('shown.bs.modal', function() {
      //map2copy
      function adjustMapToFitMarkers4copy() {
        if (self.coordsRecolha()[3] && self.coordsEntrega()[3]) {
          var bounds = L.latLngBounds(self.coordsRecolha()[3], self.coordsEntrega()[3]);
          map4copy.fitBounds(bounds);
          map4copy.setZoom(map4.getBoundsZoom(bounds)-0.55);
        }}
        adjustMapToFitMarkers4copy();
        e4.bindPopup(self.localRecolha()[3]+" - "+" Local de Recolha").openPopup();
        m4.bindPopup(self.localEntrega()[3]+" - "+" Local de Entrega").openPopup();
    
    
    });

    $('#Modal3').on('shown.bs.modal', function() {
      //map3copy
      
      function adjustMapToFitMarkers2copy() {
        if (self.coordsRecolha()[1] && self.coordsEntrega()[1]) {
          var bounds = L.latLngBounds(self.coordsRecolha()[1], self.coordsEntrega()[1]);
          map2copy.fitBounds(bounds);
          map2copy.setZoom(map2.getBoundsZoom(bounds)-0.55);
        }}
        adjustMapToFitMarkers2copy();
        e2.bindPopup(self.localRecolha()[1]+" - "+" Local de Recolha").openPopup();
        m2.bindPopup(self.localEntrega()[1]+" - "+" Local de Entrega").openPopup();  
    });

    $('#Modal4').on('shown.bs.modal', function() {
      //map4copy
      function adjustMapToFitMarkers3copy() {
        if (self.coordsRecolha()[2] && self.coordsEntrega()[2]) {
          var bounds = L.latLngBounds(self.coordsRecolha()[2], self.coordsEntrega()[2]);
          map3copy.fitBounds(bounds);
          map3copy.setZoom(map3.getBoundsZoom(bounds)-0.45);
        }}
        adjustMapToFitMarkers3copy();
        e3.bindPopup(self.localRecolha()[2]+" - "+" Local de Recolha").openPopup();
        m3.bindPopup(self.localEntrega()[2]+" - "+" Local de Entrega").openPopup();
      }); 


    
}




$("document").ready(function () {
    
  ko.applyBindings(new ViewModel({
    "localRecolha":["Sintra","Porches","Aeroporto do Porto","Aeroporto de Faro"],
    "localEntrega":["Aeroporto de Lisboa","Aeroporto de Faro","Aveiro","Porches"],
    "diaRecolha":["02/01/2023","03/01/2023","04/01/2023","04/01/2023"],
    "horaRecolha":["23:30","10:30","9:00","20:30"],
    "prioridade":[true,false,false,true],
    "coordsRecolha":[["38.83554455","-9.352237113314317"],["37.1255179","-8.3994888"],["41.248830350000006","-8.681037254488"],["37.0210744","-7.9674497"]],
    "coordsEntrega":[["38.768620850000005","-9.128247856220423"],["37.0210744","-7.9674497"],["40.640496","-8.6537841"],["37.1255179","-8.3994888"]],
    // Add for dictionary bagagens 2 keys "Dim" for first string and "Peso" for second string like: ["Dim":"50/50/100","Peso":"10"]
    "bagagens": [[{"Dim":"50/50/100","Peso":"10"}, {"Dim":"43/20/90","Peso":"20"}, {"Dim":"30/30/100","Peso":"30"}],[{"Dim":"20/20/100","Peso":"12"}],[{"Dim":"50/50/100","Peso":"10"}, {"Dim":"43/20/90","Peso":"20"}],[{"Dim":"50/50/100","Peso":"10"}, {"Dim":"43/20/90","Peso":"20"}, {"Dim":"30/30/100","Peso":"25"}]],
  }));



  var cardHeight = $('#myCard').outerHeight(true);
  $("#divControl").css("height",cardHeight - 100)
  const card = document.querySelector('.map-card ');
  const cardBody = card.querySelector('.card-body')
  const card2 = document.querySelector('#cimaBaixo1 ');

  card2.addEventListener('click', () => {
    cardBody.classList.toggle('closed')
    cardBody2.classList.add('closed')
    cardBody3.classList.add('closed')
    cardBody4.classList.add('closed')
  })

  const card3 = document.querySelector('.map-card.do2');
  const cardBody2 = card3.querySelector('.card-body')
  const card4 = document.querySelector('#cimaBaixo2 ');

  card4.addEventListener('click', () => {
    cardBody2.classList.toggle('closed')
    cardBody.classList.add('closed')
    cardBody3.classList.add('closed')	
    cardBody4.classList.add('closed')
  })

  const card5 = document.querySelector('.map-card.do3');
  const cardBody3 = card5.querySelector('.card-body')
  const card6 = document.querySelector('#cimaBaixo3 ');

  card6.addEventListener('click', () => {
    cardBody3.classList.toggle('closed')
    cardBody.classList.add('closed')
    cardBody2.classList.add('closed')
    cardBody4.classList.add('closed')
  })

  const card7 = document.querySelector('.map-card.do4');
  const cardBody4 = card7.querySelector('.card-body')
  const card8 = document.querySelector('#cimaBaixo4 ');
  
  card8.addEventListener('click', () => {
    cardBody4.classList.toggle('closed')
    cardBody.classList.add('closed')
    cardBody2.classList.add('closed')
    cardBody3.classList.add('closed')
  })

  //For select id="filtro"
  $("#filtro").change(function(){
    var selected = $(this).children("option:selected").val();
    if(selected == "0"){
      $(".mapa1").removeClass("d-none");
      $(".mapa2").removeClass("d-none");
      $(".mapa3").removeClass("d-none");
      $(".mapa4").removeClass("d-none");
    }
    else if(selected == "1"){
      //remove 1 and 2 and 4
      $(".mapa1").addClass("d-none");
      $(".mapa2").addClass("d-none");
      $(".mapa3").removeClass("d-none");
      $(".mapa4").addClass("d-none");
    }
    else if(selected == "2"){
      //remove 1 and 2 and 3
      $(".mapa1").addClass("d-none");
      $(".mapa2").addClass("d-none");
      $(".mapa3").addClass("d-none");
      $(".mapa4").removeClass("d-none");
    }
    else if(selected == "3"){
      $(".mapa1").removeClass("d-none");
      $(".mapa2").removeClass("d-none");
      $(".mapa3").addClass("d-none");
      $(".mapa4").addClass("d-none");
    }
  
  });

  
  
  $(".leaflet-routing-container.leaflet-bar.leaflet-routing-collapsible.leaflet-control").addClass("leaflet-routing-container-hide");




  // Obtém as opções do mapa original

  
    
});

const printBtn = document.getElementById("print");

printBtn.addEventListener("click", function () {
  var iframe = document.createElement("iframe");

  // Make it hidden
  iframe.style.height = 0;
  iframe.style.visibility = "hidden";
  iframe.style.width = 0;

  // Set the iframe's source
  iframe.setAttribute("srcdoc", "<html><body></body></html>");

  document.body.appendChild(iframe);

  var iframe = document.createElement("iframe");

  // Make it hidden
  iframe.style.height = 0;
  iframe.style.visibility = "hidden";
  iframe.style.width = 0;

  // Set the iframe's source
  iframe.setAttribute("srcdoc", "<html><body></body></html>");

  document.body.appendChild(iframe);

  iframe.addEventListener("load", function () {
    // Clone the image
    const image = document.getElementById("image").cloneNode();
    image.style.height = "250px";
    image.style.width = "250px";
    image.style.maxWidth = "100%";

    // Append the image to the iframe's body
    const body = iframe.contentDocument.body;
    body.style.textAlign = "center";
    body.appendChild(image);
    image.addEventListener("load", function () {
      // Invoke the print when the image is ready
      iframe.contentWindow.print();
    });
  });
  iframe.contentWindow.addEventListener("afterprint", function () {
    iframe.parentNode.removeChild(iframe);
  });
});

var markerRecolha = 0;
var markerEntrega = 0;

var mapElement = document.getElementById("map");

// Cria o mapa e o adiciona ao elemento de mapa
var map = L.map(mapElement).setView([51.505, -0.09], 13);

$("#Modal3").on("shown.bs.modal", function () {
  map.invalidateSize();
});

// Adiciona uma camada de mapa base
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 18,
}).addTo(map);

// Define os ícones de marcador personalizados
var redMarkerIcon = L.icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
var greenMarkerIcon = L.icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Control.Watermark = L.Control.extend({
  onAdd: function (map) {
    var img = L.DomUtil.create("img");

    img.src = "images/Logo.png";
    img.style.width = "200px";

    return img;
  },

  onRemove: function (map) {
    // Nothing to do here
  },
});

L.control.watermark = function (opts) {
  return new L.Control.Watermark(opts);
};

L.control.watermark({ position: "bottomleft" }).addTo(map);

function ViewModel() {
  var self = this;

  self.totalBagagens = ko.observableArray([]);

  self.clearALL = function () {
    console.log(ko.toJSON(self).replace(/,/g, ",\r\n"));
    self.buttonText1("Preencha o formulário de forma correta...");
    self.buttonText2("Preencha o formulário de forma correta...");
    self.termosCondicoes(false);
    self.localRecolha("");
    self.localEntrega("");
    self.confirmRecolha("");
    self.confirmEntrega("");
    self.distancia("");
    self.precoBagagens(0);
    self.precoPeso(0);
    self.precoDistancia(0);
    self.diaRecolha("");
    self.horaRecolha("");
    self.number(0);
    self.bagagens([]);
    self.prioridade(false);
    self.precoPrioridade(0);
    self.coordsRecolha();
    self.coordsEntrega();
    markerEntrega.clearLayers();
    markerRecolha.clearLayers();
  };

  self.buttonText1 = ko.observable("Preencha o formulário de forma correta...");
  self.buttonText2 = ko.observable("Preencha o formulário de forma correta...");

  self.termosCondicoes = ko.observable(false);

  self.localRecolha = ko.observable("");
  self.localEntrega = ko.observable("");
  self.confirmRecolha = ko.observable();
  self.confirmEntrega = ko.observable();
  self.distancia = ko.observable();
  self.precoBagagens = ko.observable(0);
  self.precoPeso = ko.observable(0);
  self.precoDistancia = ko.observable(0);

  self.diaRecolha = ko.observable("");
  self.horaRecolha = ko.observable("");

  self.checkRecolha = function () {
    if (self.localRecolha().length < 3) {
      return false;
    } else {
      return true;
    }
  };
  self.checkEntrega = function () {
    if (self.localEntrega().length < 3) {
      return false;
    } else {
      return true;
    }
  };

  self.isValidDay = function () {
    if (
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(202[3-9]|20[3-9][0-9]|21[0-9][0-9])$/.test(
        self.diaRecolha()
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  self.isValidTime = function () {
    if (/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(self.horaRecolha())) {
      return true;
    } else {
      return false;
    }
  };

  self.number = ko.observable(0);
  self.bagagens = ko.observableArray([]);
  self.prioridade = ko.observable(false);
  self.precoPrioridade = ko.observable(0);

  self.checkNumber = function () {
    if (self.number() == 0) {
      return false;
    } else {
      return true;
    }
  };

  self.isValidPeso = function (peso) {
    if (/^(3[0-1]|[1-2][0-9]|[1-9])$/.test(peso)) {
      return true;
    } else {
      return false;
    }
  };

  self.isValidDim = function (dim) {
    if (/^[1-9][0-9]{0,2}\/[1-9][0-9]{0,2}\/[1-9][0-9]{0,2}$/.test(dim)) {
      return true;
    } else {
      return false;
    }
  };

  self.checkBagagens = ko.computed(function () {
    for (i = 0; i < self.bagagens().length; i++) {
      if (self.bagagens()[i].Peso() == "" || self.bagagens()[i].Dim() == "") {
        return false;
      } else if (
        !self.isValidPeso(self.bagagens()[i].Peso()) ||
        !self.isValidDim(self.bagagens()[i].Dim())
      ) {
        return false;
      }
    }
    return true;
  });

  self.number.subscribe(function (newValue) {
    if (newValue == 0) {
      if (!$("#ac1").hasClass("d-none")) {
        $("#ac1").addClass("d-none");
      }
      if (!$("#thing1").hasClass("d-none")) {
        $("#thing1").addClass("d-none");
      }
      if (!$("#ac2").hasClass("d-none")) {
        $("#ac2").addClass("d-none");
      }
      if (!$("#thing2").hasClass("d-none")) {
        $("#thing2").addClass("d-none");
      }
      if (!$("#ac3").hasClass("d-none")) {
        $("#ac3").addClass("d-none");
      }
      if (!$("#thing3").hasClass("d-none")) {
        $("#thing3").addClass("d-none");
      }
    }
    if (newValue == 1) {
      //toggle class to #ac1
      if ($("#ac1").hasClass("d-none")) {
        $("#ac1").removeClass("d-none");
      }
      if ($("#thing1").hasClass("d-none")) {
        $("#thing1").removeClass("d-none");
      }

      if (!$("#ac2").hasClass("d-none")) {
        $("#ac2").addClass("d-none");
      }
      if (!$("#thing2").hasClass("d-none")) {
        $("#thing2").addClass("d-none");
      }
      if (!$("#ac3").hasClass("d-none")) {
        $("#ac3").addClass("d-none");
      }
      if (!$("#thing3").hasClass("d-none")) {
        $("#thing3").addClass("d-none");
      }
    }
    if (newValue == 2) {
      if ($("#ac1").hasClass("d-none")) {
        $("#ac1").removeClass("d-none");
      }
      if ($("#thing1").hasClass("d-none")) {
        $("#thing1").removeClass("d-none");
      }
      if ($("#ac2").hasClass("d-none")) {
        $("#ac2").removeClass("d-none");
      }
      if ($("#thing2").hasClass("d-none")) {
        $("#thing2").removeClass("d-none");
      }
      if (!$("#ac3").hasClass("d-none")) {
        $("#ac3").addClass("d-none");
      }
      if (!$("#thing3").hasClass("d-none")) {
        $("#thing3").addClass("d-none");
      }
    }
    if (newValue == 3) {
      if ($("#ac1").hasClass("d-none")) {
        $("#ac1").removeClass("d-none");
      }
      if ($("#thing1").hasClass("d-none")) {
        $("#thing1").removeClass("d-none");
      }
      if ($("#ac2").hasClass("d-none")) {
        $("#ac2").removeClass("d-none");
      }
      if ($("#thing2").hasClass("d-none")) {
        $("#thing2").removeClass("d-none");
      }
      if ($("#ac3").hasClass("d-none")) {
        $("#ac3").removeClass("d-none");
      }
      if ($("#thing3").hasClass("d-none")) {
        $("#thing3").removeClass("d-none");
      }
    }

    // criar uma cópia da lista atual
    let currentList = self.bagagens().slice();

    // limpar a lista
    while (self.bagagens().length > 0) {
      self.bagagens.pop();
    }

    // adicionar os elementos da cópia à lista novamente, até atingir o novo tamanho desejado
    let i = 0;
    while (self.bagagens().length < newValue && i < currentList.length) {
      self.bagagens.push(currentList[i]);
      i++;
    }

    // adicionar novos elementos vazios se ainda houver espaço na lista
    while (self.bagagens().length < newValue) {
      self.bagagens.push({ Dim: ko.observable(""), Peso: ko.observable("") });
    }
  });

  self.confirmPlaces = function () {
    if (self.number() == 1) {
      self.precoBagagens(1);
    }
    if (self.number() == 2) {
      self.precoBagagens(1.2);
    }
    if (self.number() == 3) {
      self.precoBagagens(1.3);
    }
    var pesoTotal = 0;

    for (i = 0; i < self.bagagens().length; i++) {
      pesoTotal += parseInt(self.bagagens()[i].Peso());
    }
    self.precoPrioridade(1);
    if (self.prioridade() == true) {
      self.precoPrioridade(1.5);
    }
    self.precoPeso(1 + pesoTotal / 200);

    self.confirmEntrega(self.localEntrega());
    self.confirmRecolha(self.localRecolha());
    console.log(self.confirmEntrega());
    console.log(self.confirmRecolha());
  };
  self.coordsRecolha = ko.observable();
  self.coordsEntrega = ko.observable();

  var markerRecolha = L.layerGroup().addTo(map);
  var markerEntrega = L.layerGroup().addTo(map);

  // Adiciona um marcador para o local de colheita quando a posição é definida
  self.coordsRecolha.subscribe(function (newPosition) {
    markerRecolha.clearLayers();
    L.marker(newPosition, {
      title: self.confirmRecolha(),
      icon: greenMarkerIcon,
    })
      .addTo(markerRecolha)
      .bindPopup(self.confirmRecolha() + " - " + " Local de Recolha")
      .openPopup();
  });

  // Adiciona um marcador para o local de entrega quando a posição é definida
  self.coordsEntrega.subscribe(function (newPosition) {
    markerEntrega.clearLayers();
    L.marker(newPosition, { title: self.confirmEntrega(), icon: redMarkerIcon })
      .addTo(markerEntrega)
      .bindPopup(self.confirmEntrega() + " - " + " Local de Entrega")
      .openPopup();
  });

  // Converte os nomes de localidades em coordenadas geográficas usando a API de geocodificação do OpenStreetMap
  function geocodeLocation(locationName, positionObservable) {
    var apiUrl =
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
      encodeURIComponent(locationName) +
      "&countrycodes=PT";
    $.ajax({
      url: apiUrl,
      dataType: "json",
      success: function (data) {
        if (data.length > 0) {
          var location = data[0];
          positionObservable([location.lat, location.lon]);
        }
      },
    });
  }

  // Ajusta o mapa de forma a incluir os dois marcadores
  function adjustMapToFitMarkers() {
    if (self.coordsRecolha() && self.coordsEntrega()) {
      var bounds = L.latLngBounds(self.coordsRecolha(), self.coordsEntrega());
      map.fitBounds(bounds, { padding: [20, 20] });
      map.setZoom(9);
    }
  }
  self.coordsRecolha.subscribe(function () {
    adjustMapToFitMarkers();

    var latlng1 = L.latLng(self.coordsRecolha());
    var latlng2 = L.latLng(self.coordsEntrega());
    // Calcula a distância entre os objetos LatLng em metros
    self.distancia(latlng1.distanceTo(latlng2));
    self.precoDistancia((self.distancia() * 0.0004).toFixed(2));

    console.log("Bagagens: ", self.precoBagagens(), "x");
    console.log("Prioridade: ", self.precoPrioridade(), "x");
    console.log("Peso: ", self.precoPeso(), "x");
    console.log("Distancia: ", self.precoDistancia(), "x");

    console.log("Preço final:", self.precofinal());
  });
  self.precofinal = ko.computed(function () {
    return (
      self.precoBagagens() *
      self.precoPeso() *
      self.precoDistancia() *
      self.precoPrioridade()
    ).toFixed(2);
  });

  self.coordsEntrega.subscribe(function () {
    adjustMapToFitMarkers();
  });

  // Atualiza as coordenadas de cada localidade quando os nomes são alterados
  self.confirmRecolha.subscribe(function (newName) {
    geocodeLocation(newName, self.coordsRecolha);
  });
  self.confirmEntrega.subscribe(function (newName) {
    geocodeLocation(newName, self.coordsEntrega);
  });

  self.checkForm1 = ko.computed(function () {
    //return true; // Ativar 1 modal
    recolha = self.localRecolha();
    entrega = self.localEntrega();
    dia = self.diaRecolha();
    hora = self.horaRecolha();

    if (
      self.localEntrega == "" ||
      self.localRecolha == "" ||
      self.diaRecolha == "" ||
      self.horaRecolha == ""
    ) {
      return false;
    } else if (
      !self.checkRecolha() ||
      !self.checkEntrega() ||
      !self.isValidDay() ||
      !self.isValidTime()
    ) {
      return false;
    } else if (recolha == entrega) {
      return false;
    } else {
      return true;
    }
  });

  self.checkForm1.subscribe(function (isFormValid) {
    if (isFormValid) {
      self.buttonText1("Avançar");
    } else {
      self.buttonText1("Preencha o formulário de forma correta...");
    }
  });
  self.checkForm2 = ko.computed(function () {
    //return true;  // Ativar 2 modal
    if (self.checkNumber() && self.checkBagagens()) {
      return true;
    } else {
      return false;
    }
  });

  self.checkForm2.subscribe(function (isFormValid) {
    if (isFormValid) {
      self.buttonText2("Finalizar encomenda");
    } else {
      self.buttonText2("Preencha o formulário de forma correta...");
    }
  });

  self.checkForm3 = ko.computed(function () {
    //return true; // Ativar 3 modal
    console.log(self.termosCondicoes());
    if (self.termosCondicoes() == true) {
      return true;
    } else {
      return false;
    }
  });
}

$("document").ready(function () {
  ko.applyBindings(new ViewModel());
  var cardHeight = $("#myCard").outerHeight(true);
  $("#divControl").css("height", cardHeight - 100);
});
$(document).keypress(function (event) {
  if (event.which == "13") {
    event.preventDefault();
  }
});

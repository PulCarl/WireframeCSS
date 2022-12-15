/**
*--------------------- scripts ------------------------
*/

  //1. Création de la carte
  createMap("_map");

  //2. Ajout d'un layer openstreetmap (fond de carte)
  var layerOSM = addTilesLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
  _controlLayers.addOverlay(layerOSM, "IGN SCAN25 ");

  //3. Ajout d'un deuxieme fond de carte
  var layerMMM = addTilesLayer('http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png');
  _controlLayers.addOverlay(layerMMM, "IGN Orthos-photos");

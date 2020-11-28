require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer"
], function(Map, MapView, Graphic, GraphicsLayer) {
  
  var map = new Map({
    basemap: "topo-vector"
  });
  
   var view = new MapView({
     container: "viewDiv",
     map: map,
     center: [-111.79094, 43.81339], // longitude, latitude
   zoom: 19
   });

   var graphicsLayer = new GraphicsLayer();
   map.add(graphicsLayer);

   // Biggest variable declaration ever--
   var locations = [
    {
       ID : 1,
       Longitude : -111.79067,
       Latitude : 43.81390,
       Color : [59, 65, 255]
    },
    {
       ID : 2,
       Longitude : -111.79067,
       Latitude : 43.81386,
       Color : [59, 65, 255]
    },
    {
       ID : 3,
       Longitude : -111.79068,
       Latitude : 43.81382,
       Color : [59, 65, 255] 
    },
    {
       ID : 4,
       Longitude : -111.79067,
       Latitude : 43.81377,
       Color : [59, 65, 255]
    },
    {
       ID : 5,
       Longitude : -111.79067,
       Latitude : 43.81373,
       Color : [59, 65, 255]
    },
    {
       ID : 6,
       Longitude : -111.7909,
       Latitude : 43.81372,
       Color : [59, 65, 255]
    },
    {
       ID : 7,
       Longitude : -111.7909,
       Latitude : 43.81377,
       Color : [59, 65, 255]
    },
    {
       ID : 8,
       Longitude : -111.7909,
       Latitude : 43.81382,
       Color : [59, 65, 255]
    },
    {
       ID : 9,
       Longitude : -111.7909,
       Latitude : 43.81386,
       Color : [59, 65, 255]
    },
    {
       ID : 10,
       Longitude : -111.7909,
       Latitude : 43.81390,
       Color : [59, 65, 255]
    },
    {
       ID : 11,
       Longitude : -111.79107,
       Latitude : 43.81390,
       Color : [59, 65, 255]
    },
    {
       ID : 12,
       Longitude : -111.79107,
       Latitude : 43.81386,
       Color : [59, 65, 255]
    },
    {
       ID : 13,
       Longitude : -111.79107,
       Latitude : 43.81381,
       Color : [59, 65, 255]
    },
    {
       ID : 14,
       Longitude : -111.79107,
       Latitude : 43.81376,
       Color : [59, 65, 255]
    },
    {
       ID : 15,
       Longitude : -111.79107,
       Latitude : 43.81372,
       Color : [59, 65, 255]
    },
    {
       ID : 16,
       Longitude : -111.7917,
       Latitude : 43.81390,
       Color : [255, 94, 207]
    },
    {
       ID : 17,
       Longitude : -111.7917,
       Latitude : 43.81385,
       Color : [255, 94, 207]
    },
    {
       ID : 18,
       Longitude : -111.7917,
       Latitude : 43.81381,
       Color : [255, 94, 207]
    },
    {
       ID : 19,
       Longitude : -111.7917,
       Latitude : 43.81376,
       Color : [255, 94, 207]
    },
    {
       ID : 20,
       Longitude : -111.7917,
       Latitude : 43.81371,
       Color : [255, 94, 207]
    },
    {
       ID : 21,
       Longitude : -111.79193,
       Latitude : 43.81391,
       Color : [255, 94, 207]
    },
    {
       ID : 22,
       Longitude : -111.79193,
       Latitude : 43.81385,
       Color : [255, 94, 207]
    },
    {
       ID : 23,
       Longitude : -111.79193,
       Latitude : 43.81381,
       Color : [255, 94, 207]
    },
    {
       ID : 24,
       Longitude : -111.79193,
       Latitude : 43.81376,
       Color : [255, 94, 207]
    },
    {
       ID : 25,
       Longitude : -111.79193,
       Latitude : 43.81371,
       Color : [255, 94, 207]
    },
    {
       ID : 26,
       Longitude : -111.79211,
       Latitude : 43.81391,
       Color : [255, 94, 207]
    },
    {
       ID : 27,
       Longitude : -111.79211,
       Latitude : 43.81385,
       Color : [255, 94, 207]
    },
    {
       ID : 28,
       Longitude : -111.79211,
       Latitude : 43.81381,
       Color : [255, 94, 207]
    },
    {
       ID : 29,
       Longitude : -111.79211,
       Latitude : 43.81376,
       Color : [255, 94, 207]
    },
    {
       ID : 30,
       Longitude : -111.79211,
       Latitude : 43.81371,
       Color : [255, 94, 207]
    },
    {
       ID : 31,
       Longitude : -111.79033,
       Latitude : 43.81308,
       Color : [59, 65, 255]
    },
    {
       ID : 32,
       Longitude : -111.79021,
       Latitude : 43.81308,
       Color : [59, 65, 255]
    },
    {
       ID : 33,
       Longitude : -111.79008,
       Latitude : 43.81308,
       Color : [59, 65, 255]
    },
    {
       ID : 34,
       Longitude : -111.78993,
       Latitude : 43.81308,
       Color : [59, 65, 255]
    },
    {
       ID : 35,
       Longitude : -111.79033,
       Latitude : 43.81312,
       Color : [46, 219, 66]
    },
    {
       ID : 36,
       Longitude : -111.79021,
       Latitude : 43.81312,
       Color : [46, 219, 66]
    },
    {
       ID : 37,
       Longitude : -111.79008,
       Latitude : 43.81312,
       Color : [46, 219, 66]
    },
    {
       ID : 38,
       Longitude : -111.78993,
       Latitude : 43.81312,
       Color : [46, 219, 66]
    },
    {
       ID : 39,
       Longitude : -111.79044,
       Latitude : 43.81310,
       Color : [229, 255, 0]
    }
 ]

    var residents = [
    {
        ID : 1,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 2,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 3,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 4,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 5,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 6,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 7,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 8,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 9,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 10,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 11,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 12,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 13,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 14,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 15,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe"
    },
    {
        ID : 16,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 17,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 18,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 19,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 20,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 21,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 22,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 23,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 24,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 25,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 26,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 27,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 28,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 29,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 30,
        First : "Jane Doe",
        Second : "Joy Doe",
        Third : "Jean Doe",
        Fourth : "Jay-quelinne Doe"
    },
    {
        ID : 31,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 32,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 33,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 34,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 35,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 36,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 37,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 38,
        First : "John Doe",
        Second : "Jake Doe",
        Third : "Jimmy Doe",
        Fourth : "Jasquarius Doe",
        Fifth : "Jorge Doe",
        Sixth : "Jedidiah Doe"
    },
    {
        ID : 39,
        First : "Isaiah Adams-Hart",
        Second : "Avery Adams-Hart"
    }
    ]
  var i; 
  var j;

  for (i = 0; i < locations.length; i++) { 
    var ManagerRes = {
        type: "point",
        longitude: [locations[i].Longitude],
        latitude: [locations[i].Latitude]
    };

    var ManagerMarker = {
        type: "simple-marker",
        color: locations[i].Color,
        outline: {
          color: [225, 225, 225],
          width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: ManagerRes,
        symbol: ManagerMarker
    });

    if (residents[i].ID < 31) {
    pointGraphic.popupTemplate = {
      "title" : "Apt #" + (i+1) + "; Residents",
      "content" : residents[i].First + "<br>" + residents[i].Second + "<br>" + residents[i].Third + "<br>" + residents[i].Fourth + "<br>"
      }
    }
    else if (residents[i].ID == 39) {
    pointGraphic.popupTemplate = {
      "title" : "Apt #" + (i+1) + "; Residents",
      "content" : residents[i].First + "<br>" + residents[i].Second + "<br>"
      }
    }
    else {
      pointGraphic.popupTemplate = {
        "title" : "Apt #" + (i+1) + "; Residents",
        "content" : residents[i].First + "<br>" + residents[i].Second + "<br>" + residents[i].Third + "<br>" + residents[i].Fourth + "<br>" + residents[i].Fifth + "<br>" + residents[i].Sixth + "<br>"
    }
  }
    
    graphicsLayer.add(pointGraphic);
  
  }
 });
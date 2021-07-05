let markerInfo;

fetch("../Data/portfolioItems.json")
.then(function(response){
    return response.json();
})
.then(function(data) {
    markerInfo = data;

    CreateMap();
})
.catch(e => {
    console.log(e);
});


let markerTest = [];


const CreateMap = () => {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBjjXnKQ1Dn1GCx_wy6-tjSIWBluyY-Kkk&callback=initMap';
    script.async = true;
    document.head.appendChild(script);
    
    let map;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10, lng: 10 },
    zoom: 1,
    mapId: 'c496c89062b65873',
  });

for (i = 0; i < markerInfo.length;i++){
    addMarker(markerInfo[i]);
}




  function addMarker(markerInfo){
    let marker = new google.maps.Marker({
        position: markerInfo.map.pos,
        map:map,
        icon: {url:markerInfo.map.icon, scaledSize: new google.maps.Size(75, 75)},
        url: markerInfo.portfolioLocation
        });

    markerTest.push(marker);


    const windowInfo = new google.maps.InfoWindow({
        content: '<a href="' + '/WSOA3028A_1894979/' + markerInfo.portfolioLocation + '" ><h2 class="map-title">' + markerInfo.title + '</h2>'
                + '<h3 class="map-sub-title">Click Here To View</h3>'
                + '<p class="map-description">' + markerInfo.portfolioDescription + '</p> </a>'
    });
    


    marker.addListener('click', function() {
        windowInfo.open(map, marker);
    });


    
  }

}




let markerInfo;

fetch("../Scripts/portfolioItems.json")
.then(function(response){
    return response.json();
})
.then(function(data) {
    //console.log(data);
    markerInfo = data;

    CreateMap();
})
.catch(e => {
    console.log(e);
});


let markerTest = [];


const CreateMap = () => {
    // Create the script tag, set the appropriate attributes
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBjjXnKQ1Dn1GCx_wy6-tjSIWBluyY-Kkk&callback=initMap&libraries=geometry';
    script.async = true;
    
    // Append the 'script' element to 'head'
    document.head.appendChild(script);
    
    let map;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10, lng: 10 },
    zoom: 2,
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

    /*
    let bound = new google.maps.LatLngBounds();

    bound.extend( markerTest[0].position);
    bound.extend( markerTest[3].position );
    bound.extend( markerTest[1].position );
  
    console.log( bound.getCenter() );
  
        let marker = new google.maps.Marker({
          position: bound.getCenter(),
          map:map,
  
        });

*/

    markerTest.push(marker);


    const windowInfo = new google.maps.InfoWindow({
        content: '<a href="' + '/WSOA3028A_1894979/' + markerInfo.portfolioLocation + '" ><h2 class="map-title">' + markerInfo.title + '</h2>'
                + '<h3 class="map-sub-title">Click Here To View</h3>'
                + '<p class="map-description">' + markerInfo.portfolioDescription + '</p> </a>'
    });
    
    marker.addListener("mouseover",() =>{
        //windowInfo.open(map, marker);
    });

    marker.addListener("mouseout",() =>{
        //windowInfo.close(map, marker);
    });

    marker.addListener('click', function() {
        //window.location.href = marker.url;

        windowInfo.open(map, marker);
    });


    
  }

  //console.log(markerTest[0].getPosition());

/*
  google.maps.event.addListener(map, 'zoom_changed', function() {
    if (map.getZoom() >= 4) {
        map.setMapTypeId('satellite');
        console.log(markerTest[0]);
        markerTest[0].setIcon("../Images/Logo.png");
    }
    else {
        map.setMapTypeId('roadmap');
        console.log("SMALL");
        markerTest[0].setIcon(icon);
        markerTest[0].setLabel("1");
    }
});
*/

/*
google.maps.event.addListener(map, 'zoom_changed', function() {
    console.log(map.getZoom());
    console.log(calcDistance(markerTest[0].getPosition(), markerTest[1].getPosition())/map.getZoom());


    for (i = 0; i < markerTest.length;i++){
        for (j = 0; j < markerTest.length; j++){
            if (calcDistance(markerTest[i].getPosition(), markerTest[j].getPosition())/map.getZoom() >= 4){
                if (markerTest[i].icon.url != "../Images/Logo.png"
                || markerTest[j].icon.url != "../Images/Logo.png")
                {
                    markerTest[i].visible = false;
                    markerTest[j].visible = false;
                    for (i = 0; i < markerTest.length;i++){
                        for (j = 0; j < markerTest.length; j++)
                        {
                            if (markerTest[i].position == markerTest[j].position){
                            if (markerTest[i].icon.url == "../Images/Logo.png")
                            {
                                markerTest[i].visible = true;
                            }
                            if (markerTest[j].icon.url == "../Images/Logo.png")
                            {
                                markerTest[j].visible = true;
                            }
                        }
                        }
                    }
                    
                }


                if (markerTest[i].position == markerTest[j].position){
                    if (markerTest[i].icon.url === "../Images/Pin4.png"){
                        markerTest[i].visible = false;
                    }
                    else if (markerTest[j].icon.url === "../Images/Pin4.png")
                    {
                        markerTest[j].visible = false;
                    }
                }

            }
            else if (calcDistance(markerTest[i].getPosition(), markerTest[j].getPosition())/map.getZoom() < 4)
            {
                markerTest[i].visible = true;
                markerTest[j].visible = true;
            }
        }
    }


});
*/

  // OTHER CODE



var p1 = new google.maps.LatLng(45.463688, 9.18814);
var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);


//calculates distance between two points in km's
function calcDistance(p1, p2) {
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}


}




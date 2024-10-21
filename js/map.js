
document.addEventListener('DOMContentLoaded', () => {

    const map = L.map('map').setView([40.6752866,-73.9010882],15);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 20,
      
    }).addTo(map);
  });

 
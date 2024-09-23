import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    // Membuat peta dengan koordinat awal
    this.map = L.map('mapId').setView([-7.740888969687221, 110.49237787019925], 10);

    // Opsi basemap
    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    });

    const cartoDBPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd'
    });

    const cartoDBDarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd'
    });

    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    const esriTopo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © Esri — Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });

    // Opsi basemap tambahan
    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
    });

    const thunderforestOutdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=your-api-key', {
      attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>',
      subdomains: 'abc'
    });

    // Menambahkan basemap OpenStreetMap sebagai default
    openStreetMap.addTo(this.map);

    // Layer Control untuk memilih basemap
    const baseMaps = {
      "OpenStreetMap": openStreetMap,
      "CartoDB Positron": cartoDBPositron,
      "CartoDB Dark Matter": cartoDBDarkMatter,
      "Esri World Imagery": esriWorldImagery,
      "Esri Topographic": esriTopo,
      "OpenTopoMap": openTopoMap,
      "Thunderforest Outdoors": thunderforestOutdoors
    };

    L.control.layers(baseMaps).addTo(this.map);

    // Menambahkan simple marker dengan ikon standar Leaflet
    const simpleMarkerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',  // Ikon bawaan Leaflet
      iconSize: [25, 41],  // Ukuran ikon
      iconAnchor: [12, 41],  // Posisi anchor ikon
      popupAnchor: [1, -34],  // Posisi popup terkait marker
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Bayangan ikon
      shadowSize: [41, 41],  // Ukuran bayangan
      shadowAnchor: [13, 41] // Posisi anchor bayangan
    });

    // Menambahkan marker di lokasi yang ditentukan
    const marker = L.marker([-7.740888969687221, 110.49237787019925], { icon: simpleMarkerIcon }).addTo(this.map);

    // Menambahkan pop-up dengan gambar dan teks pada marker
    marker.bindPopup(`
      <b>Candi Prambanan</b><br>
      Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang telah dibangun sejak masa pemerintahan Kerajaan Mataram Kuno atau sekitar abad ke-9 Masehi.<br>
      <img src="https://kitakabari.com/wp-content/uploads/2022/01/Candi-Prambanan-Sleman-e1641614754771-2048x1376.jpg" alt="Candi Prambanan" width="200px"/>
    `).openPopup();
  }
}

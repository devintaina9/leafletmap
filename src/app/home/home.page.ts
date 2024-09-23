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

    openStreetMap.addTo(this.map);

    // Layer Control for base maps
    const baseMaps = {
      "OpenStreetMap": openStreetMap,
    };

    L.control.layers(baseMaps).addTo(this.map);

    // Standard Leaflet marker icon
    const simpleMarkerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [13, 41]
    });

    // Markers with popups
    const markerLocations: { coords: [number, number]; title: string; image: string; description: string }[] = [
      {
        coords: [-7.740888969687221, 110.49237787019925],
        title: 'Candi Prambanan',
        image: 'https://kitakabari.com/wp-content/uploads/2022/01/Candi-Prambanan-Sleman-e1641614754771-2048x1376.jpg',
        description: 'Candi Prambanan adalah candi Hindu terbesar di Indonesia12. Candi ini memiliki tinggi 47 meter dan lebar 34 meter, yang lebih tinggi dari candi sejenisnya2. Letaknya berada di antara 2 wilayah, yaitu Yogyakarta dan Jawa Tengah1. Kompleks Candi Prambanan terdiri dari sekitar 250 candi dan memiliki tiga zona yang berbeda: luar, tengah, dan bagian dalam2. Candi ini terletak di Dusun Karangasem, Desa Bokoharjo, Kecamatan Prambanan, Sleman, Daerah Istimewa Yogyakarta, Jawa Tengah.'
      },
      {
        coords: [-7.637981198840965, 110.59853130814577],
        title: 'Umbul Jolotundo',
        image: 'https://www.nativeindonesia.com/foto/2023/05/umbul-jolotundo.jpg',
        description: 'Umbul Jolotundo terletak di Jalan Klaten - Jatinom No.7, Dusun I, Gedaren, Kec. Jatinom, Kabupaten Klaten, Jawa Tengah12345. Tempat ini berjarak sekitar 10 km dari pusat kota Klaten dan dapat ditempuh dalam waktu 20-30 menit.'
      },
      {
        coords: [-7.745154842026572, 110.62531048526418],
        title: 'Rowo Jombor Klaten',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/6a/da/suasana-rowo-jombor-dipagi.jpg',
        description: 'Rowo Jombor adalah waduk yang terletak di Desa Wisata Krakitan, Kecamatan Bayat, sekitar delapan kilometer ke arah tenggara dari pusat Kota Klaten, Jawa Tengah, Indonesia12345. Waduk ini digunakan untuk mengairi lahan pertanian di sekitarnya dan juga sebagai obyek pariwisata. Rowo Jombor memiliki luas 198 hektare dengan kedalaman hingga 4,5 meter2.'
      },
      {
        coords: [-7.608376104007904, 110.63526684445645],
        title: 'Umbul Ponggok',
        image: 'https://blog.tripcetera.com/id/wp-content/uploads/2020/08/image-5.png',
        description: 'Umbul Ponggok terletak di Desa Ponggok, Jalan Delanggu, Kecamatan Polanharjo, Klaten, Jawa Tengah. Umbul ini termasuk salah satu sumber mata air tertua di daerah Klaten, sudah ada sejak awal abad 19. Umbul Ponggok memiliki kolam luas yang dapat dinikmati oleh pengunjung. Biaya masuk adalah Rp10.000 untuk hari biasa dan Rp15.000 di hari Sabtu, Minggu, dan libur nasional.'
      },
      {
        coords: [-7.759442609872704, 110.66479259580875],
        title: 'Bukit Cinta Watu Prahu',
        image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/230/2024/03/11/cinta-645772700.png',
        description: 'Bukit Cinta Watu Prahu terletak di Desa Gunung Gajah, Kecamatan Bayat, Kabupaten Klaten, Jawa Tengah. Awalnya perbukitan biasa, Bukit Cinta Watu Prahu diubah menjadi tempat rekreasi yang instagramable. Pengunjung dapat menikmati pemandangan alam maupun wahana air.'
      }
    ];

    // Loop through each location and add a marker with a popup
    markerLocations.forEach(location => {
      const marker = L.marker(location.coords, { icon: simpleMarkerIcon }).addTo(this.map);
      marker.bindPopup(`
        <b>${location.title}</b><br>
        ${location.description}<br>
        <img src="${location.image}" alt="${location.title}" width="200px"/>
      `);
    });
  }
}

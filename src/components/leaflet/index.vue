<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { onMounted, reactive, ref } from "vue";
import bg from "@/assets/map/map.png";
import L, {
  CRS,
  LatLngBoundsLiteral,
  Map,
  LayerGroup,
  LeafletMouseEvent,
  Polyline,
  LatLngTuple,
} from "leaflet";
import { antPath } from "leaflet-ant-path";
import "leaflet-rotate";

import { Button } from "ant-design-vue";

// 自定义图标
const myIcon = L.icon({
  iconUrl: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32], // relative to top left
  popupAnchor: [0, 0], // relative to iconAnchor
  className: "",
});

// 自定义控制器
L.Control.WaterMark = L.Control.extend({
  onAdd: (map: Map) => {
    let div = L.DomUtil.create("button");
    div.className = "red";
    div.classList.add("foo");
    div.textContent = `自定义按钮`;

    L.DomEvent.on(div, "click", (e) => {
      // antPaths.value?.removeFrom(map)
      // antPaths.value?.setLatLngs([[0,0], [100, 20], [300, 200], [80, 300]])
      antPaths.value?.addLatLng([80, 300]);
      map.eachLayer((layer) => {
        console.log(layer);
      });
    });
    return div;
  },
  onRemove: (map: Map) => {
    // L.DomEvent.off
  },
});
L.control.waterMark = function (opts) {
  return new L.Control.WaterMark(opts);
};

let map: Map | LayerGroup<any> | null = null;

// 边界坐标
const bounds: LatLngBoundsLiteral = reactive([
  [-512, -484],
  [512, 484],
]); // [1024, 968]
const antPathOptions = reactive({
  color: "red",
  paused: false,
  reverse: false,
  dashArray: [10, 20] as [number, number],
  delay: 400,
});
const points = ref<LatLngTuple[]>([
  [0, 0],
  [100, 20],
  [300, 200],
]);
const antPaths = ref<Polyline | null>(null);

const popup = L.popup({
  maxHeight: 80,
  className: "border border-green-600 rounded-xl",
});
const tooltip = L.tooltip({
  className: "",
});

const polyline = L.polyline([
  { lat: 0, lng: 0 },
  { lat: 100, lng: 0 },
  { lat: 100, lng: 60 },
]);

const markers = [
  // [lat, lng]
  L.marker([0, 0], { title: "Marker 1", rotation: 90 }),
  L.marker({ lat: 40, lng: 0 }, { title: "Marker 2" }),
  L.marker([80, 0], { title: "Marker 3" }),
];

onMounted(() => {
  map = L.map("map", {
    crs: CRS.Simple,
    center: [0, 0],
    zoom: 1,
    /**
     * @see https://github.com/rubenspgcavalcante/leaflet-ant-path/issues/90#issuecomment-525572235
     * Ant Path Bug
     */
    minZoom: 1,
    rotate: true,
    rotateControl: {
      closeOnZeroBearing: true,
      // position: 'bottomleft',
    },
    bearing: 0, // 地图旋转角度
    touchRotate: true,
    // attributionControl: true,
    // zoomControl: true,
    // compassBearing: false,
    // trackContainerMutation: false,
    // shiftKeyRotate: false,
    // touchGestures: true,
    // touchZoom: true
  });
  L.imageOverlay(bg, bounds).addTo(map);
  // map.fitBounds(bounds)

  // svgOverlay
  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // }).addTo(map)

  L.featureGroup(markers)
    .on("click", (e) => {
      const {
        latlng,
        propagatedFrom: { options },
      } = e;
      popup
        .setContent(options.title)
        .setLatLng(latlng)
        .openOn(map as Map);
    })
    .on("mouseover", (e) => {
      const {
        latlng,
        propagatedFrom: { options },
      } = e;
      tooltip
        .setContent(options.title)
        .setLatLng(latlng)
        .openOn(map as Map);
    });

  const cities = L.layerGroup(markers);

  // tooltip.setLatLng([-512, -484]).setContent('ToolTip').openOn(map as Map)
  tooltip.setContent("ToolTip");

  const parks = L.layerGroup([
    L.marker([-512, -484], { rotation: Math.PI / 2 })
      .bindPopup("This is Crown Hill Park")
      .bindTooltip(tooltip),
  ]);
  const baseMaps = {};
  const overlayMaps = {
    Cities: cities,
  };
  const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

  layerControl.addOverlay(parks, "Parks");

  L.control.waterMark({ position: "bottomleft" }).addTo(map);

  polyline.setStyle({ color: "red", dashArray: [8, 8] }).addTo(map);

  map.on("click", handleMapClick);
  let offset = 0;
  setInterval(() => {
    // all dashArray add
    if (offset === 16) {
      offset = 0;
    }
    polyline.setStyle({ dashOffset: (++offset).toString() });
  }, 250);

  antPaths.value = antPath(points.value, antPathOptions) as Polyline;
  antPaths.value.addTo(map);
});

// function addLayer(geojsonFeature) {
//   const layer = L.geoJSON(geojsonFeature, {
//     style: {
//       fillColor: () => {}
//     }
//   }).addTo(map)
// }

function handleMapClick(e: LeafletMouseEvent) {
  tooltip.closeTooltip();
  // const content = `
  //   <button class="red">TailWind CSS Class Btn</button>
  //   <br>
  //   You clicked the map at ${e.latlng.toString()}
  // `
  // popup
  //   .setLatLng(e.latlng)
  //   .setContent(content)
  //   .openOn(map as Map)
}
</script>

<template>
  <div id="map" />
</template>

<style lang="scss" scoped>
#map {
  width: 800px;
  height: 800px;

  :deep(.red) {
    @apply border border-blue-600 bg-blue-400 text-gray-50 hover:bg-blue-600;
  }

  :deep(.leaflet-control-layers-selector) {
    @apply accent-lime-500;
  }

  :deep(.leaflet-tooltip) {
    @apply text-green-600;
  }
}
</style>

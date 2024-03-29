<template>
  <client-only>
    <div class="map isBalloonReady">
      <yandex-map
        ref="myMap"
        class="myMap"
        v-bind="mapSettings"
        :coords="coords"
        @click="closeBalloon"
      >
        <ymap-marker
          v-for="marker in markers"
          :key="marker.id"
          :marker-id="marker.id"
          :coords="marker.coords"
          :icon="activeMarker === marker.id ? iconMarkerActive : iconMarker"
        >
          <template v-if="isBalloonNeed" slot="balloon">
            <HousingCardBalloon :id="marker.id" :info="marker" />
          </template>
        </ymap-marker>
      </yandex-map>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import { ymapMarker, yandexMap, loadYmap } from 'vue-yandex-maps'
import MODEL from './model'
import HousingCardBalloon from '~/components/Housing/CardBalloon/HousingCardBalloon'

export default {
  components: {
    yandexMap,
    ymapMarker,
    HousingCardBalloon
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    activeMarkerId: {
      type: [String, Number],
      default: ''
    },
    isMarkerDefault: {
      type: Boolean,
      default: false
    },
    isBalloonNeed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      coords: [],
      activeMarker: '',
      isBalloonReady: false
    }
  },
  computed: {
    ...mapGetters({
      GET_LANG: 'GET_LANG'
    }),
    model () {
      return MODEL(this.info)
    },
    markers() {
      return this.isMarkerDefault ? [
        {
          id: 'place',
          coords: this.model.coords
        }
      ] : this.model.markers.filter(item => Array.isArray(item.coords) && item.coords.length === 2)
    },
    iconMarker() {
      return {
        layout: 'default#image',
        imageHref: '/images/map-marker.svg',
        imageSize: [40, 50],
        imageOffset: [-20, -50]
      }
    },
    iconMarkerActive() {
      return {
        layout: 'default#image',
        imageHref: '/images/map-marker-active.svg',
        imageSize: [40, 50],
        imageOffset: [-20, -50]
      }
    },
    mapSettings() {
      return {
        settings: {
          lang: this.GET_LANG,
          coordorder: 'latlong',
          version: '2.1'
        },
        controls: [],
        zoom: 13,
        markers: this.markers,
        options: {
          maxZoom: 16,
          minZoom: 6
        },
        ...this.model
      }
    }
  },
  watch: {
    markers(val) {
      this.setDefaultCoords()
    },
    activeMarkerId(id) {
      this.activeMarker = id
      if (this.activeMarker) {
        const coords = (this.markers.find(item => item.id === this.activeMarker) || {}).coords || this.model.coords
        this.coords = coords
      }
    }
  },
  // если понадобится instance map
  async mounted() {
    this.setDefaultCoords()
    await loadYmap({ ...this.settings })
  },
  methods: {
    setDefaultCoords() {
      this.coords = (this.markers[0] || {}).coords || this.model.coords
    },
    closeBalloon(e) {
      const myMap = e.originalEvent.map
      myMap.events.add('click', function (e) {
        myMap.balloon.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $grayBg;
  &.isBalloonReady {
    &::v-deep {
      .housing-card .image {
        opacity: 1;
      }
    }
  }

  &::v-deep {
    [class*="ymaps-2-1"][class*="-ground-pane"] {
      filter: grayscale(1);
    }
    [class*="ymaps-2-1"][class*="balloon"] {
      box-shadow: none;
      background: none;
    }
    [class*="ymaps-2-1"][class*="balloon__content"] {
      margin: 0;
      background: none;
      padding: 1rem;
      border: none;
    }
    [class*="ymaps-2-1"][class*="balloon__close"] {
      display: none;
    }
    [class*="ymaps-2-1"][class*="balloon__tail"] {
      display: none;
    }
  }
}

.ymap-container {
  position: relative;
  margin-top: -3rem;
  width: calc(100% + 6rem);
  height: calc(100% + 6rem);
}
</style>

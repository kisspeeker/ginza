<template>
  <SliderFeatures :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderFeatures from '~/components/Slider/Features/SliderFeatures'

export default {
  name: 'MiddlewareSliderFeatures',
  components: {
    SliderFeatures
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return {
        mode: '',
        anchor: false,
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

<template>
  <SliderNews :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderNews from '~/components/Slider/News/SliderNews'

export default {
  name: 'MiddlewareSliderNews',
  components: {
    SliderNews
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

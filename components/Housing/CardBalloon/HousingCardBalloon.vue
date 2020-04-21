<template>
  <nuxt-link :to="localePath({ path: `${houseType}/${model.slug}` })" class="housing-card">
    <div
      v-if="model.images.length"
      tag="div"
      class="images"
    >
      <picture class="image">
        <img :src="model.images[0]" data-not-lazy class="isLoaded" :alt="model.title">
      </picture>
    </div>
    <div class="content">
      <div v-if="model.title" class="title text--16" v-html="model.title" />
      <div class="params">
        <div v-for="(param, index) in model.params" :key="param.type" class="params-item">
          <div v-if="checkComponents[index]" class="params-icon">
            <component :is="param.type" />
          </div>
          <div class="params-text">{{ param.value }}</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import MODEL from './model'
import beds from '~/assets/svg/icon-beds.svg'
import adult from '~/assets/svg/icon-adult.svg'
import size from '~/assets/svg/icon-size.svg'

export default {
  name: 'HousingCard',
  components: {
    beds,
    adult,
    size
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    houseType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      intervalId: null
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    checkComponents() {
      return this.model.params.map(item => !!this.$options.components[item.type])
    }
  },
  created() {
  },
  methods: {
    imageChanger() {
      if (this.activeIndex === this.model.images.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
    startChanger() {
      this.imageChanger()
      this.intervalId = setInterval(() => {
        this.imageChanger()
      }, 1500)
    },
    stopChanger() {
      clearInterval(this.intervalId)
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-card {
  display: block;
  border-radius: 1rem;
  overflow: hidden;
  width: 21rem;
  background: $white;
  .images {
    position: relative;
    width: 100%;
    height: 20rem;
    z-index: 1;
    // @include tablet {
    //   height: 30rem;
    // }
    // @include mobile {
    //   height: 30rem;
    // }
  }
  .image {
    @include absolute;
    pointer-events: none;
  }
  .content {
    padding: 1rem 1.5rem;
  }

  .title {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: $bold;
    margin-bottom: .5rem;
    @include mobile {
      margin-top: .25rem;
    }
  }

  .city {
    color: $gray69;
  }

  .params {
    display: flex;
    flex-flow: row wrap;
    margin: -.7rem;
  }
  .params-item {
    display: flex;
    align-items: center;
    margin: .7rem;
    font-size: 1.2rem;
    color: $gray69;
  }
  .params-icon {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .7rem;
  }
}
</style>
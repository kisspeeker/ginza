<template>
  <Section class="services-additional section--full">
    <Section class="section--no-p section--min">
      <HeadTitleMini :info="model" />
    </Section>
    <Section class="section--no-p section--min">
      <div class="row">
        <div v-for="(item, index) in model.values" :key="index" :class="item.mode" class="service-col col-4 col-t-6">
          <ExternalLink v-if="item.url" :to="item.url" class="card">
            <div class="card-image">
              <picture v-if="item.image || item.preview" class="image">
                <app-image :src="item.image || item.preview" alt="" />
              </picture>
            </div>
            <h5 v-if="item.title" class="title text--12 bold ttu" v-html="item.title" />
          </ExternalLink>
        </div>
      </div>
    </Section>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    Section,
    HeadTitleMini,
    ExternalLink
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.services-additional {
  .card {
    position: relative;
    display: block;
    @include desktop {
      &:hover {
        .title {
          color: $brown;
        }
      }
    }
  }
  .title {
    padding-left: 2rem;
    margin-top: 1rem;
    transition: color .2s ease;
  }
  .card-image {
    width: 100%;
    height: 28rem;
    overflow: hidden;
    transition: filter .2s ease;
    -webkit-transition: filter .2s ease;
    .image {
      width: 100%;
      height: 100%;
    }
  }

  .service-col {
    &.size-full {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 1rem;
      @include mobile {
        flex: 1 0 auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>

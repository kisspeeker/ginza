<template>
  <div class="investors-form">
    <picture v-if="model.image" class="image">
      <img :src="model.image" alt="">
    </picture>

    <div class="form-container" :class="{ isShowResult, isLoading }">
      <transition mode="out-in" name="list-fade">
        <div v-if="!isShowResult" key="form" class="form-content">
          <div class="title-block">
            <p v-if="model.description" class="description text--18" v-html="model.description" />
            <ExternalLink v-if="model.url" class="link link--brown link--tdu" :to="model.url" v-html="model.linkLabel" />
          </div>
          <FormGenerator
            :btn-label="$t('investors.submit')"
            :btn-submit-class="'link link--brown link--tdu'"
            :is-loading="isLoading"
            :info="model.fields"
            @formSubmit="formSubmit"
          />
          <p v-if="model.disclaimer" class="disclaimer text--12" v-html="model.disclaimer" />
        </div>
        <div v-else key="result" class="result">
          <div class="result-icon">
            <div class="icon">
              <iconCheck />
            </div>
          </div>
          <h5 v-if="model.resultTitle" class="result-title" v-html="model.resultTitle" />
          <p v-if="model.resultDescription" class="result-desc" v-html="model.resultDescription" />
          <a v-if="model.resultLink" :href="model.resultLink.href" class="result-link" v-html="model.resultLink.label" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import axios from '~/plugins/axios'
import { API_ROUTES_INVESTORS_FORM } from '~/config/constants'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

import FormGenerator from '~/components/FormGenerator/FormGenerator'
import iconCheck from '~/assets/svg/check.svg'

export default {
  name: 'InvestorsForm',
  components: {
    ExternalLink,
    FormGenerator,
    iconCheck
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isLoading: false,
      isShowResult: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  methods: {
    formSubmit(data) {
      if (this.isLoading) {
        return
      }

      this.isLoading = true
      const formData = new FormData()
      for (const key in data) {
        if (key) {
          formData.set(key, data[key])
        }
      }
      axios.post(API_ROUTES_INVESTORS_FORM, formData)
        .then(({ data }) => {
          if (data.status) {
            this.isShowResult = true
          }
        }).catch((e) => {
          console.error(e, API_ROUTES_INVESTORS_FORM)
        }).then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.investors-form {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;

    &::v-deep {
    .form {
      .input {
        border-color: $black17;
      }
      .input-placeholder {
        font-weight: $light;
        letter-spacing: 0.025rem;
      }
      .submit-btn {
        width: auto;
        height: auto;
        text-transform: none;
      }
    }
  }
}

.form-container {
  position: relative;
  flex: 0 1 auto;
  display: flex;
  flex-flow: column nowrap;
  // background: rgba($white, .35);
  margin-left: auto;
  min-width: 63rem;
  padding: 3rem $desktopOffset 3rem 8rem;
  @include backdrop;

  @include desktop {
    background-color: rgba($white, .35);
  }

  @include mobile {
    min-width: auto;
    padding: 4rem 2rem;
  }
}

.title-block {
  width: 38rem;
  margin-top: 10rem;
  margin-bottom: 8rem;
  @include mobile {
    margin-top: 0;
    width: auto;
  }

  .description {
    margin-bottom: 2rem;
    line-height: 1.5;
  }

}

.form-content {
  width: 32rem;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  @include mobile {
    width: auto;
  }
}

.image {
  @include absolute;
  z-index: -1;
}

.result {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 1;
  text-align: center;
  @include tablet_desktop {
    @include absolute;
    margin: auto;
    justify-content: center;
    // margin: auto;
    max-width: 32rem;
  }
  .result-title {
    margin-bottom: 1.5rem;
  }
  .result-link {
    padding-top: 4rem;
    margin-top: auto;
    transition: color .2s ease;
    &:active {
      color: $brown;
    }
    @include desktop {
      &:hover {
        color: $brown;
      }
    }
  }
  .result-description {
    margin-top: auto;
    margin-bottom: 1.5rem;
  }
  .result-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    width: 11rem;
    height: 11rem;
    margin-top: 3rem;
    margin-bottom: 4.5rem;
    padding: 4rem;
    border-radius: 50%;
    background: $brown;
    color: $white;
    @include desktop {
      // margin-top: auto;
    }
  }
  .icon {
    display: flex;
  }
}

.disclaimer {
  color: $gray69;
  letter-spacing: 0.02rem;
  margin-top: auto;
  line-height: 1.5;
  padding-top: 3rem;
  &::v-deep {
    a {
      color: $brown;
      transition: color .2s ease;
      &:active {
        color: $brownHover;
      }
      @include desktop {
        &:hover {
          color: $brownHover;
        }
      }
    }
  }
}

</style>
<template>
  <div v-if="GET_POPUP_TYPE === 'popupTravelLine'" v-bsl:reserveScrollBarGap="GET_POPUP_STATUS" class="popup-booking">
    <div class="popup-content">
      <div class="popup-content-col">
        <div class="popup-head-row">
          <div class="popup-close">
            <button class="burger" type="button" @click="CLOSE_POPUP">
              <div class="burger-button">
                <div class="line" />
                <div class="line" />
                <div class="line" />
              </div>
            </button>
          </div>
          <transition mode="out-in" name="fade-reversed">
            <div v-if="!isShowResult" key="title" class="text--24 popup-head-title" v-html="$t('booking.title')" />
          </transition>
        </div>
        <div class="popup-booking-container" :class="{ isShowResult, isLoading }">
          <transition mode="out-in" name="list-fade">
            <FormGenerator
              v-if="!isShowResult"
              key="form"
              class="form-travelline"
              :is-loading="isLoading"
              :info="$t('travelline.fields')"
              @formSubmit="formSubmit"
            />

            <div v-else key="result" class="result">
              <div class="result-icon">
                <div class="icon">
                  <iconCheck />
                </div>
              </div>
              <h5 v-if="$t('travelline.resultTitle')" class="result-title" v-html="$t('travelline.resultTitle')" />
              <p v-if="$t('travelline.resultDescription')" class="result-desc" v-html="$t('travelline.resultDescription')" />
              <a v-if="GET_SOCIAL.phone" :href="`tel:${GET_SOCIAL.phone}`" class="result-link" v-html="GET_SOCIAL.phone" />
            </div>
          </transition>
        </div>
      </div>
      <div class="popup-content-col widget">
        <div class="popup-head-row">
          <div class="logo">
            <iconLogo />
          </div>
        </div>
        <div class="popup-booking-container">
          <div id="tl-booking-form" />
        </div>
      </div>
    </div>
    <div class="popup-image">
      <picture v-if="GET_POPUP_EXTEND_CONTENT.image" class="image">
        <app-image :src="GET_POPUP_EXTEND_CONTENT.image" alt="" /></picture>
      <picture v-if="GET_POPUP_EXTEND_CONTENT.logo" class="logo">
        <app-image :src="GET_POPUP_EXTEND_CONTENT.logo" alt="" /></picture>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import iconLogo from '~/assets/svg/logo.svg'
import axios from '~/plugins/axios'
import { API_ROUTES_BOOKING_FORM } from '~/config/constants'

import FormGenerator from '~/components/FormGenerator/FormGenerator'
import iconCheck from '~/assets/svg/check.svg'

export default {
  name: 'PopupTravelLine',
  components: {
    FormGenerator,
    iconCheck,
    iconLogo
  },
  data() {
    return {
      isLoading: false,
      isShowResult: false
    }
  },
  computed: {
    model() {
      return MODEL(this.GET_POPUP_CONTENT)
    },
    ...mapGetters({
      GET_POPUP_TYPE: 'popup/GET_POPUP_TYPE',
      GET_POPUP_STATUS: 'popup/GET_POPUP_STATUS',
      GET_POPUP_CONTENT: 'popup/GET_POPUP_CONTENT',
      GET_POPUP_EXTEND_CONTENT: 'popup/GET_POPUP_EXTEND_CONTENT',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY'
    })
  },
  // watch: {
  //   GET_POPUP_STATUS(isOpen) {
  //     if (isOpen && this.GET_POPUP_TYPE === 'popupTravelLine') {
  //       console.log('isOpen && popupType')
  //       this.initWidget()
  //     }
  //   }
  // },
  methods: {
    ...mapMutations({
      CLOSE_POPUP: 'popup/CLOSE_POPUP'
    }),
    test(e) {
      // 'bookingNumber', 'providerName', 'price', 'currency', 'roomTypes'
      // + tlhotelid
      console.log(e)
    },
    initWidget() {
      /* eslint-disable eqeqeq */

      function initForm() {
        (function (w) {
          const q = [
            // TODO: прокинуть сюда TLHotelId
            // перейти на страницу, параметры: booking/?date=2020-06-08&nights=1&adults=1
            // поля для onBookingSuccess:
            // TLHotelId, (bookingNumber, guests, id)
            //
            ['setContext', 'TL-INT-ginza-new', 'ru'],
            ['embed', 'booking-form', {
              container: 'tl-booking-form',
              onBookingSuccess: () => {},
              onBookingSuccessProps: ['bookingNumber', 'providerName', 'price', 'currency', 'roomTypes']
            }]
          ]
          const t = w.travelline = (w.travelline || {}); const ti = t.integration = (t.integration || {})
          ti.__cq = ti.__cq ? ti.__cq.concat(q) : q
          if (!ti.__loader) {
            ti.__loader = true
            const d = w.document; const p = d.location.protocol; const s = d.createElement('script')
            s.type = 'text/javascript'
            s.async = true
            s.src = (p == 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
            (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s)
          }
        })(window)
      }
      initForm()
    },
    formSubmit(data) {
      console.log(data)
      if (this.isLoading) {
        return
      }

      this.isLoading = true
      const formData = {}
      for (const key in data) {
        if (key) {
          formData[key] = data[key]
        }
      }
      formData.city = this.GET_CURRENT_CITY

      const query = this.$router.query
      console.log(query)
      this.$router.replace({ query: { ...query, ...formData } })

      // axios.post(API_ROUTES_BOOKING_FORM, formData)
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      //   .finally(() => {
      //     this.isLoading = false
      //   })
      // axios.post(API_ROUTES_BOOKING_FORM, formData)
      //   .then(({ status }) => {
      //     if (status === 200 || status === 201) {
      //       this.isShowResult = true
      //     }
      //  }).catch((e) => {
      //    const {
      //      response = {}
      //    } = e || {}
      //    console.error(response, API_ROUTES_BOOKING_FORM)
      //   }).then(() => {
      //     this.isLoading = false
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-booking {
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  @include desktop {
    flex-flow: row nowrap;
    align-items: stretch;
    margin-bottom: 6rem;
  }

  .popup-booking-container {
    transition: opacity .3s ease;
    @include mobile_tablet {
      padding-top: 4rem;
    }
    &.isLoading {
      opacity: .5;
      pointer-events: none;
      > * {
        pointer-events: none;
      }
    }
    &.isShowResult {
      @include desktop {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }

  .popup-content {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    padding: 3rem $sectionOffsetHorizontalMobile;
    overflow: unset;
    z-index: 1;
    @include tablet {
      width: 60rem;
      margin: 0 auto;
      padding: 4rem $sectionOffsetHorizontalTablet;
    }
    @include desktop {
      max-width: 100rem;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0 0 0 13rem;
    }
  }

  .popup-content-col {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    max-width: 37.5rem;
    padding: 0;
    @include tablet {
      max-width: 100%;
    }
    @include desktop {
      padding: 6rem 7.5rem 6rem 0;
    }

    &.widget {
      max-width: 48rem;
      padding-top: 4rem;
      @include tablet {
        max-width: 100%;
      }
      @include desktop {
        border-left: 1px solid $border;
        padding-top: 0;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .logo {
        display: none;
        @include desktop {
          display: flex;
          width: 11.5rem;
          height: 4rem;
          margin: 0 auto 6rem;
        }
      }
      .popup-head-row {
        @include mobile_tablet {
          display: none;
        }
      }
    }
  }

  &::v-deep {
    .form {
      .submit-container {
        position: sticky;
        bottom: 0;
        @include mobile {
          bottom: 2rem;
        }
      }
      .submit-btn {
        background: $black17;
        color: $white;
        &:active {
          background: $brown;
          color: $white;
        }
        @include desktop {
          &:hover {
            background: $brown;
            color: $white;
          }
        }
      }
    }
  }
}

.result {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 1;
  text-align: center;
  @include desktop {
    margin: auto 0;
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
    color: white;
    @include desktop {
      margin-top: auto;
    }
  }
  .icon {
    display: flex;
  }
}

.popup-image {
  position: relative;
  order: -1;
  z-index: 1;
  @include tablet {
    display: none;
    // height: 50rem;
    // z-index: 0;
  }
  @include mobile {
    display: none;
    // height: 40rem;
    // z-index: 0;
  }
  @include desktop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: calc(100% - 100rem);
    order: 2;
  }
  pointer-events: none;
  .image {
    display: flex;
    height: 100%;
    img {
      object-position: 50%;
    }
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14rem;
    height: 7rem;
    transform: translate3d(-50%, -50%, 0);
    img {
      object-fit: contain;
    }
  }
}

.popup-head-row {
  position: sticky;
  position: -webkit-sticky;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include tablet {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem 4rem;
    color: $black17;
    // background: linear-gradient(180deg, rgba($black17,1) 0%, rgba($black17,.5) 75%, rgba($black17,0) 100%);
    z-index: 1;
  }
  @include mobile {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    color: $black17;
    // background: linear-gradient(180deg, rgba($black17,1) 0%, rgba($black17,.5) 75%, rgba($black17,0) 100%);
    z-index: 2;
  }
}

.burger {
  display: flex;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  &:active {
    color: $brown;
    outline: none;
  }
  @include mobile_tablet {
    color: $black17;
  }
  @include desktop {
    &:hover {
      color: $brown;
    }
  }
  @include burger_btn;
}

</style>

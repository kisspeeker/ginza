import axios from '~/plugins/axios'
import { API_ROUTES_SOCIAL } from '~/config/constants'

export const state = () => ({
  social: {},
  locales: ['ru', 'en'],
  locale: 'ru'
})

export const mutations = {
  SET_SOCIAL (state, payload = {}) {
    state.social = JSON.parse(JSON.stringify(payload))
  },
  SET_LANG (state, payload = '') {
    if (state.locales.includes(payload)) {
      state.locale = payload
    }
  }
}

export const getters = {
  GET_LANG: state => state.locale,
  GET_SOCIAL: state => state.social
}

export const actions = {
  async init({ dispatch, commit, rootState }) {
    // dispatch('cities/UPDATE_CITIES', settings.cities)
    const {
      data = {}
    } = await axios.get(API_ROUTES_SOCIAL)
    commit('SET_SOCIAL', data)
    await dispatch('housing/UPDATE_HOUSING_TYPES', this.app.i18n.messages[rootState.locale || 'ru'].housingTypes)
    await dispatch('housing/UPDATE_HOUSING_LIST')
    // } catch (e) {
    //   return console.error(API_ROUTES_SOCIAL, e)
    // }
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch('init')
  }
}

<template>
  <form
    class="form"
    novalidate
    @submit.prevent="debouncedSubmitHandler($event)"
  >
    <div
      v-for="(field, index) in parsedComponents"
      :key="field.name + index"
      :class="field.mode"
      class="field-wrapper"
    >
      <div class="field">
        <component
          :is="field.componentName"
          :is-invalid="checkError(field.name)"
          :disabled="isLoading"
          v-bind="field"
          @input-change="changeValue(field.name, $event)"
          @input="changeValue(field.name, $event)"
        />
      </div>
      <slot :name="field.name" />
    </div>
    <div class="submit-container">
      <button class="submit-btn" :class="btnSubmitClass" type="submit">{{ btnLabel || $t('booking.btnLabel') }}</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength, numeric } from 'vuelidate/lib/validators'
import { debounce } from 'throttle-debounce'
import FormInput from '~/components/FormGenerator/Fields/FormInput'
import FormPhone from '~/components/FormGenerator/Fields/FormPhone'
import FormCounter from '~/components/FormGenerator/Fields/FormCounter'
import FormDatepicker from '~/components/FormGenerator/Fields/FormDatepicker'
import FormDatepickerRange from '~/components/FormGenerator/Fields/FormDatepickerRange'
import FormPseudoSelect from '~/components/FormGenerator/Fields/FormPseudoSelect'
import CitiesDropdown from '~/components/Cities/CitiesDropdown'

const validateFunctions = {
  required,
  email,
  numeric,
  minLength: val => minLength(val),
  // custom
  phone: val => (val ? val.isValid : false),
  counter: val => (val ? val.model <= val.maxValue && val.model >= val.minValue : false)
}

const COMPONENTS = [
  {
    type: 'text',
    componentName: 'FormInput'
  },
  {
    type: 'email',
    componentName: 'FormInput'
  },
  {
    type: 'hidden',
    componentName: 'FormInput'
  },
  {
    type: 'phone',
    componentName: 'FormPhone'
  },
  {
    type: 'counter',
    componentName: 'FormCounter'
  },
  {
    type: 'date',
    componentName: 'FormDatepicker'
  },
  {
    type: 'datesRange',
    componentName: 'FormDatepickerRange'
  },
  {
    type: 'select',
    componentName: 'FormPseudoSelect'
  },
  {
    type: 'cities',
    componentName: 'CitiesDropdown'
  }
]

export default {
  name: 'FormGenerator',
  components: {
    FormInput,
    FormPhone,
    FormCounter,
    FormDatepicker,
    FormDatepickerRange,
    FormPseudoSelect,
    CitiesDropdown
  },
  props: {
    info: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    btnSubmitClass: {
      type: String,
      default: 'button'
    },
    btnLabel: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      formModel: {}
    }
  },
  computed: {
    parsedComponents() {
      return (this.info || [])
        .map((field) => {
          const { type = 'text', validate = [] } = field || {}
          return {
            validate,
            ...field,
            componentName: (COMPONENTS.find(item => item.type === type) || {})
              .componentName
          }
        })
        .filter(item => !!this.$options.components[item.componentName])
    },
    rules() {
      const res = {}
      this.parsedComponents.forEach((field) => {
        const { validate = [] } = field
        const fieldRules = {}
        validate.forEach((item) => {
          if (validateFunctions[item.rule]) {
            fieldRules[item.rule] = item.value
              ? validateFunctions[item.rule](item.value)
              : validateFunctions[item.rule]
          }
        })
        res[field.name] = fieldRules
      })
      return res
    },
    isFormValid() {
      return !(this.$v || {}).$invalid
    }
  },
  created() {
    this.debouncedSubmitHandler = debounce(300, () => {
      this.submitHandler()
    })
    if (process.browser) {
      for (const key in this.parsedComponents) {
        this.$set(
          this.formModel,
          this.parsedComponents[key].name,
          this.parsedComponents[key].value || null
        )
      }
    }
  },
  validations() {
    return {
      formModel: this.rules
    }
  },
  methods: {
    filterObj(obj) {
      const newObj = {}
      Object.keys(obj).forEach((key) => {
        if (obj[key] !== null) {
          typeof obj[key] === 'object'
            ? newObj[key] = obj[key].model
            : newObj[key] = obj[key]
        }
      })
      return newObj
    },
    checkError(name) {
      if (process.browser && this.$v && this.$v.formModel[name]) {
        return (
          this.$v.formModel[name].$dirty && this.$v.formModel[name].$invalid
        )
      }
      return false
    },
    changeValue(name, value) {
      this.formModel[name] = value
      this.checkError(name)
      // this.$v.formModel[name].$touch()
    },
    submitHandler() {
      this.$v.$touch()
      if (this.isFormValid) {
        this.$emit('formSubmit', this.filterObj(this.formModel))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-travelline {
  .field-wrapper {
    &.half {
      padding-top: 4rem;
      .input-label {
        padding-bottom: 2rem;
      }
    }
    & + .field-wrapper {
      margin-top: 4rem;
      &.half {
        padding-top: 0;
      }
    }
  }
}

.field-wrapper {
  position: relative;
  &.half {
    display: inline-flex;
    width: 50%;
    padding-top: 2rem;
  }
  & + .field-wrapper {
    margin-top: 2rem;
    &.half {
      padding-top: 2rem;
    }
  }
}

.field {
  position: relative;
  width: 100%;
}

.submit-container {
  margin-top: 6rem;
}

.submit-btn {
  width: 100%;
  height: 6.5rem;
  text-transform: uppercase;
  border-radius: 2px;
}

.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.cities-dropdown {
  padding: 4rem 0;
  border-bottom: 1px solid $border;
  &::v-deep {
    .dropdown-list {
      @include mobile_tablet {
        top: 100%;
      }
    }
    .cities-item.isActive {
      padding-left: 0;
      .icon {
        display: none;
      }
    }
  }
}

</style>

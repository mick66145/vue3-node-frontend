<template>
  <label>{{ label }}<span v-if="required" class="text-xl text-negative ml-1">*</span></label>
  <div class="row q-col-gutter-sm">
    <div :class="cityCol">
      <input-city-select
        ref="inputCity"
        v-model="observeValue.city"
        class="full-width"
        :rules="[required && $rules.required('縣市必填')]"
        placeholder="請選擇縣市"
        @update:modelValue="onChange('city')"
      />
    </div>
    <div :class="areaCol">
      <input-area-select
        ref="inputArea"
        v-model="observeValue.area"
        class="full-width"
        :city-id="observeValue.city.id"
        :rules="[required && $rules.required('鄉鎮區必填')]"
        placeholder="請選擇鄉鎮區"
        @update:modelValue="onChange('area')"
      />
    </div>
    <div :class="addressCol">
      <input-text
        v-model="observeValue.address"
        class="full-width"
        :prefix="showPostCode ? observeValue.post_code :''"
        :rules="[required && $rules.required('地址必填')]"
        placeholder="請輸入地址"
      />
    </div>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  props: {
    modelValue: { type: Object },
    label: { type: String, default: '地址' },
    required: { type: Boolean, default: false },
    cityCol: { type: String, default: 'col-6' },
    areaCol: { type: String, default: 'col-6' },
    addressCol: { type: String, default: 'col-12' },
    showPostCode: { type: Boolean, default: false },
  },
  emits: [
    'update:modelValue',
  ],
  setup (props, { emit }) {
    // data
    const inputCity = ref()
    const inputArea = ref()
    const observeValue = useVModel(props, 'modelValue', emit)

    // methods
    const onChange = async (action) => {
      switch (action) {
      case 'city':
        observeValue.value.area = null
        observeValue.value.post_code = null
        if (!observeValue.value.city) {
          inputArea.value.clearData()
        }
        break
      case 'area':
        observeValue.value.post_code = null
        if (observeValue.value.area) {
          observeValue.value.post_code = observeValue.value.area.detail.post_code
        }
        break
      }
    }

    return {
      inputCity,
      inputArea,
      observeValue,
      onChange,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>

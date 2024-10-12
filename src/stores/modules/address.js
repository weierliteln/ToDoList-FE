import { defineStore } from 'pinia'
import { ref } from 'vue'
import areaObj from '@/assets/area.json'
// 省
const provinceArr = Object.keys(areaObj)


export const useAddressStore = defineStore(
  'big-address',
  () => {
    // 城市
    const area = ref([])
    const getCity = (province,city) => {
      area.value = areaObj[province][city]
      return area.value
    }

    return {
      getCity,
      area,
    }
  },
  {
    persist: true
  }
)
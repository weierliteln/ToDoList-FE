import { ElLoading, ElMessage,ElMessageBox } from 'element-plus'

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  globals:{
    ElMessage:'readonly',
    ElMessageBox:'readonly',
    ElLoading:'readonly'
  }
}


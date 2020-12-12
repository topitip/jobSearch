import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TCard,
  TButton,
  TInput,
  TSelect
} from 'vue-tailwind/dist/components'

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  't-select': {
    component: TSelect,
    props: {
      classes: 'block w-full pl-3 pr-10 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
    }
  },
  't-input': {
    component: TInput,
    props: {
      classes: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
    }
  },
  't-button': {
    component: TButton,
    props: {
      classes: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50'
    }
  },
  't-card': {
    component: TCard,
    props: {
      classes: {
        wrapper: 'border rounded shadow-sm bg-white border-gray-100',
        body: 'p-3',
        header: 'border-b border-gray-100 p-3 rounded-t bg-gray-200',
        footer: 'border-gray-100 border-t p-3 rounded-b'
      }
      // ...More settings
    }
  }
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)

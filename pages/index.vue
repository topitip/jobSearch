<template>
  <section class="container flex-col">
    <div class="flex bg-gray-500 p-3 rounded">
      <!-- <t-input v-model="find" />

      <t-button class="mx-3">
        Поиск
      </t-button> -->

      <t-select
        v-model="selectCity"
        placeholder="По всем городам"
        :options="cities"
        value-attribute="slug"
        text-attribute="name"
        variant="demo"
      />
    </div>

    <div :class="`grid ${!$apollo.loading ? 'md:grid-cols-2 xl:grid-cols-4' : ''} gap-4 my-8 sm:mx-10 mx-10`">
      <template v-if="!selectCity && !$apollo.loading">
        <Card v-for="job in jobs" :key="job.id" :job="job" />
      </template>

      <div v-else-if="$apollo.loading">
        <LoadIndicator />
      </div>

      <template v-else>
        <Card v-for="job in city.jobs" :key="job.id" :job="job" />
      </template>
    </div>
  </section>
</template>

<script>
// import gql from 'graphql-tag'

import Card from '@/components/Card'
import LoadIndicator from '@/components/LoadIndicator'

import cities from '@/api/cities.graphql'
import city from '@/api/city.graphql'
import jobs from '@/api/jobs.graphql'

export default {
  components: {
    Card,
    LoadIndicator
  },

  data () {
    return {
      find: '',
      selectCity: ''
    }
  },

  apollo: {
    cities: {
      query: cities
    },

    jobs: {
      query: jobs
    },

    city: {
      query: city,
      // variables: {
      //   slug: this.selectCity
      // }
      variables () {
        return {
          slug: this.selectCity
        }
      },
      fetchPolicy: 'cache-and-network'
    }
  },

  methods: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  widows: 80%;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

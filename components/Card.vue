<template>
  <t-card>
    <template v-slot:header>
      <div class="flex justify-between h-16 lg:h-20">
        <div class="flex flex-col self-center justify-start">
          <p class="flex">
            {{
              job.company.name
            }}
          </p>
          <span v-if="job.cities[0]">
            {{ `Город ${job.cities[0].name}` }}
          </span>
        </div>
        <img v-if="job.company.logoUrl" :src="job.company.logoUrl" class="w-16 lg:w-20">
      </div>
    </template>

    <div>
      <p>
        {{ job.title }}
      </p>
      <p
        v-if="job.remotes[0]"
        class="inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-green-200 text-gray-800"
      >
        {{ job.remotes[0].name }}
      </p>
    </div>

    <template v-slot:footer>
      <span
        v-for="tag in job.tags"
        :key="tag.id"
        class="inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800"
      >
        {{ tag.name }}
      </span>
    </template>
  </t-card>
</template>

<script>

export default {
  props: ['job']
}
</script>

<style>

</style>

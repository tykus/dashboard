<template>
    <aside class="h-full bg-grey-darkest text-white p-8 fixed w-64">
        <button @click="$emit('browsing', false)">Dashboard</button>
        <ul class="list-reset">
          <li class="mb-3">
            <router-link to="/sales" class="text-grey-light no-underline hover:text-white">Sales</router-link>
          </li>
          <li class="mb-3">
            <router-link to="/loans" class="text-grey-light no-underline hover:text-white">Loans</router-link>
          </li>
          <li class="mb-3">
            <router-link to="/sales-summaries" class="text-grey-light no-underline hover:text-white">Sales Summaries</router-link>
          </li>
        </ul>
    </aside>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>



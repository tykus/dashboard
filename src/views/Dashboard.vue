<template>
    <div>
        <button @click="browse">Browse</button>
    </div>
</template>

<script>
export default {
    methods: {
        browse () {
            this.$emit('browsing', true)
        }
    }
}
</script>

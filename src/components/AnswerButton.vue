<template>
        <button @click="$emit('click')" class="btn btn-outline-primary m-2">
            {{ text }}
        </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>
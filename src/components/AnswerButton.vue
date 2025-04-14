<template>
    <button @click="$emit('click-event')" class="btn btn-outline-primary m-2">
        {{ text }}
    </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
})

// @click="$emit('click')" に加えて、button 内部でまた何か処理してたら クリックが2重に発火している可能性があった
// Question.vueのコードをいじってエラー解消した
</script>

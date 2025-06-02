<template>
    <button
    @click="$emit('click-event')"
    class="answer-button"
    :style="{backgroundColor: backgroundColor}"
    >
        {{ text }}
    </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    backgroundColor: {
        type: String,
        default: true,
    },
})

// @click="$emit('click')" に加えて、button 内部でまた何か処理してたら クリックが2重に発火している可能性があった
// Question.vueのコードをいじってエラー解消した
</script>

<style scoped>
.answer-button {
    width: 600px;
    height: 180px;
    font-size: 20px;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.answer-button:hover {
    filter: brightness(1.2);
}
</style>

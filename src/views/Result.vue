<template>
    <div class="result">
        <img :src="resultImage" alt="結果画像">
        <p>正解数は {{ correctCount }} / {{ totalQuestions }} でした。</p>
        <p>あなたは{{ resultRank }}です</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter()

const correctCount = Number(route.query.correct) || 0
const totalQuestions = Number(route.query.total) || 10

const resultImage = computed(() => {
    if (correctAnswers === 0) return new URL('@/assets/result0.png', import.meta.url).href;
    if (correctAnswers <= 3) return new URL('@/assets/result1to3.jpg', import.meta.url).href;
    if (correctAnswers <= 6) return new URL('@/assets/result4to6.jpeg', import.meta.url).href;
    if (correctAnswers <= 9) return new URL('@/assets/result7to9.jpg', import.meta.url).href;
    return new URL('@/assets/result10.jpg', import.meta.url).href;
})

const resultRank = computed(() => {
    if (correctAnswers === 0) return 'コイキング級'
    if (correctAnswers <= 3) return 'ポケモン初心者級'
    if (correctAnswers <= 6) return 'ポケモン中級者'
    if (correctAnswers <= 9) return 'ポケモンマスター級'
    return '伝説級'
})
</script>

<style scoped>
.result {
    text-align: center;
}
</style>
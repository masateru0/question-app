<template>
    <div class="result">
        <img :src="resultImage" alt="結果画像">
        <p>正解数は {{ correctCount }} / {{ totalQuestions }} でした。</p>
        <p>あなたは{{ resultRank }}です</p>
        <button class="btn btn-primary" @click="goToHome">トップに戻る</button>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const correctCount = Number(route.query.correct) || 0
const totalQuestions = Number(route.query.total) || 10

onMounted(() => {
    // クエリが不正な場合は、NotFound画面に遷移
    if (
        isNaN(correctCount) || isNaN(totalQuestions) ||
        correctCount < 0 || totalQuestions <= 0 || correctCount > totalQuestions
    ) {
        router.replace({ // replaceを使うことで、履歴に残らないようにする。戻るボタンで戻れないようにする(悪いURLからの遷移を防ぐ)
            name: 'NotFound'
        })
    }
})

const resultImage = computed(() => {
    if (correctCount === 0) return new URL('@/assets/result0.png', import.meta.url).href;
    if (correctCount <= 3) return new URL('@/assets/result1to3.jpg', import.meta.url).href;
    if (correctCount <= 6) return new URL('@/assets/result4to6.jpg', import.meta.url).href;
    if (correctCount <= 9) return new URL('@/assets/result7to9.jpg', import.meta.url).href;
    return new URL('@/assets/result100.jpg', import.meta.url).href;
})

const resultRank = computed(() => {
    if (correctCount === 0) return 'コイキング級'
    if (correctCount <= 3) return 'ポケモン初心者級'
    if (correctCount <= 6) return 'ポケモン中級者'
    if (correctCount <= 9) return 'ポケモンマスター級'
    return '伝説級'
})

const goToHome = () => {
    router.push({ name: 'Home' }) // トップページに遷移
}
</script>

<style scoped>
.result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
}

.result img {
    width: 800px;
    height: 500px;
    object-fit: contain;
    margin-bottom: 20px;
}

.result p {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
}

.result button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
}
</style>
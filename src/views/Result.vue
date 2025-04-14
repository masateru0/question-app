<template>
    <div class="result">
        <img :src="resultImage" alt="結果画像">
        <p>正解数は {{ correctCount }} / {{ totalQuestions }} でした。</p>
        <p>あなたは{{ resultRank }}です</p>
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
    if (correctCount <= 6) return new URL('@/assets/result4to6.png', import.meta.url).href;
    if (correctCount <= 9) return new URL('@/assets/result7to9.jpg', import.meta.url).href;
    return new URL('@/assets/result10.jpg', import.meta.url).href;
})

const resultRank = computed(() => {
    if (correctCount === 0) return 'コイキング級'
    if (correctCount <= 3) return 'ポケモン初心者級'
    if (correctCount <= 6) return 'ポケモン中級者'
    if (correctCount <= 9) return 'ポケモンマスター級'
    return '伝説級'
})
</script>

<style scoped>
.result {
    text-align: center;
    margin-top: 50px;
}
</style>

TODO 画像サイズを全て統一する（結果画面は大きく表示させる）
TODO トップに戻るボタンをつける
TODO 4~6の画像を変更する
TODO 結果画面の文字を大きくする
TODO 画像・文字を真ん中に寄せる
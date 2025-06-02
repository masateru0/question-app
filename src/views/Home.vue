<template>
    <div class="quiz-container">
        <div class="quiz-header">
            <img src="@/assets/monster-ball.jpg" alt="Monsterball" class="quiz-logo" />
            <h1 class="quiz-title">ポケモンクイズ</h1>
        </div>
        <Question
            v-if="currentView === 'question'"
            :question="currentQuestion"
            @answered="handleAnswer"
        />
        <Explanation
            v-else
            :isCorrect="isCorrect"
            :question="currentQuestion"
            @next="goToNextQuestion"
        />
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Question from '@/components/Question.vue'
import Explanation from '@/components/Explanation.vue'
import questionData from '@/data/QuestionData.js'

const router = useRouter() // Vue Router を使用するためのフック
const route = useRoute() // 現在のルート情報を取得するためのフック

const currentView = ref('question') // 現在の表示 ('question' または 'explanation')
const currentIndex = ref(0) // 現在の質問のインデックス
const isCorrect = ref(false) // 回答が正解かどうか
const currentQuestion = ref(questionData[currentIndex.value]) // 現在の質問データ
const correctCount = ref(0) // 正解数

// URLクエリから状態を復元
onMounted(() => {
    const idx = parseInt(route.query.idx)
    const view = route.query.view
    if (!isNaN(idx) && idx >= 0 && idx < questionData.length) {
        currentIndex.value = idx
        currentQuestion.value = questionData[currentIndex.value]
    }
    if (view === 'explanation' || view === 'question') {
        currentView.value = view
    }
})

// 状態が変わるたびにURLを更新
watch([currentIndex, currentView], ([idx, view]) => {
    router.replace({
        query: {
            ...route.query,
            idx: idx,
            view: view
        }
    })
})

const handleAnswer = (correct) => {
    isCorrect.value = correct
    if (correct) {
        correctCount.value++ // 正解数をカウント
        // console.log(`正解数: ${correctCount.value}`); ここで正解した時に＋２されていることを確認した⇨AnswerButton.vueへ
    }
    currentView.value = 'explanation' // 回答後に説明画面に遷移
}

// 次の質問に進む処理
const goToNextQuestion = () => {
    if (currentIndex.value < questionData.length - 1) {
        currentIndex.value++
        currentQuestion.value = questionData[currentIndex.value] // 次の質問データを取得
        currentView.value = 'question' // 質問画面に戻る
    } else {
        router.push({
            name: 'Result',
            query: {
                correct: correctCount.value, // 正解数をクエリパラメータに渡す
                total: questionData.length, // 総問題数をクエリパラメータに渡す
            },
        })
    }
}
</script>

<style scoped>

.quiz-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
}

.quiz-logo {
    width: 40px;
    height: 40px;
    object-fit: cover;
}

.quiz-title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin: 0;
    padding: 0;
    line-height: 1;
}
</style>
TODO //途中でブラウザの戻るボタンを押すと結果画面に飛ぶバグがあるので修正する
TODO //別でトップ画面を用意する
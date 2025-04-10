<template>
    <div>
        <h1>ポケモンクイズ</h1>
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
import { ref } from 'vue';
import Question from '@/components/Question.vue';
import Explanation from '@/components/Explanation.vue';
import questionData from '@/data/QuestionData.js';

const currentView = ref('question'); // 現在の表示 ('question' または 'explanation')
const currentIndex = ref(0); // 現在の質問のインデックス
const isCorrect = ref(false); // 回答が正解かどうか
const currentQuestion = ref(questionData[currentIndex.value]); // 現在の質問データ

const handleAnswer = (correct) => {
    isCorrect.value = correct;
    console.log(correct);
    currentView.value = 'explanation'; // 回答後に説明画面に遷移
}

// 次の質問に進む処理
const goToNextQuestion = () => {
    if (currentIndex.value < questionData.length -1) {
        currentIndex.value++
        currentQuestion.value = questionData[currentIndex.value]; // 次の質問データを取得
        currentView.value = 'question'; // 質問画面に戻る
    } else {
        // TODO: Result画面に遷移する処理を追加
        alert('クイズが終了しました！');
    }
}
</script>

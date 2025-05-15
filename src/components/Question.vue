<template>
    <div class="question-container">
        <div class="question-box">
            <h2>{{ question.text }}</h2>
        </div>
        <div class="button-grid">
            <AnswerButton
                v-for="(choice, index) in question.choices"
                :key="index"
                :text="choice"
                :background-color="buttonColors[index]"
                @click-event="handleAnswer(choice)"
            />
        </div>
    </div>
</template>
<script setup>
import AnswerButton from './AnswerButton.vue'

const props = defineProps({
    question: Object // Home.vue から渡される現在の質問データ
})
// propsの書き方が違っていたので修正

const emit = defineEmits(['answered'])

let answered = false // 回答済みかどうかのフラグ

const handleAnswer = (choice) => {
    if (answered) return // 一度クリックされたら、handleAnswerをすぐには再度呼び出せないように「一時的な無効化」
    answered = true

    const correctAnswer = props.question.answer // 先頭にpropsをつけなきゃいけなかったので修正
    const isCorrect = choice === correctAnswer
    emit('answered', isCorrect) // 回答結果を親に渡す
}

const buttonColors = ['#D56161', '#5A50CB', '#D5CF6F', '#73DA82']
</script>

<style scoped>
.question-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.question-box {
    background-color: #FFF;
    padding: 30px;
    width: 1250px;
    height: 310px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 58px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.question-box h2 {
    font-size: 40px;
    font-weight: bold;
}

.button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

</style>
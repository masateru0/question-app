<template>
    <div>
        <h2>{{ question.text }}</h2>
        <div>
            <AnswerButton
                v-for="(choice, index) in question.choices"
                :key="index"
                :text="choice"
                @click="handleAnswer(choice)"
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
</script>

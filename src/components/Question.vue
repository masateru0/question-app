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
import { ref } from 'vue'
import questionData from '@/data/QuestionData.js'
import AnswerButton from './AnswerButton.vue'

defineProps({
    question: Object // Home.vue から渡される現在の質問データ
})

const emit = defineEmits(['answered'])

const currentIndex = ref(0)

const handleAnswer = (choice) => {
    const correctAnswer = questionData[currentIndex.value].answer
    const isCorrect = choice === correctAnswer
    emit('answered', isCorrect) // 回答結果を親に渡す
}
</script>

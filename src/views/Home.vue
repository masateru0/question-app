<template>
    <div>
        <h1>ポケモンクイズ</h1>
        <Question :question="questionData[currentIndex]" @answered="handleAnswer" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Question from '@/components/Question.vue'
import questionData from '@/data/QuestionData.js'
import { useRouter } from 'vue-router'

const correctCount = ref(0)
const currentIndex = ref(0)
const router = useRouter()

const handleAnswer = (isCorrect) => {
    if (isCorrect) {
        correctCount.value++
    }

    if (currentIndex.value < questionData.length - 1) {
        currentIndex.value++
    } else {
        router.push({
            name: 'Result',
            query: {
                correct: correctCount.value,
                total: questionData.length
            }
        })
    }
}
</script>

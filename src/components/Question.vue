<template>
    <div>
        <h2>{{ question.text }}</h2>
        <div v-if="!answered">
            <button
                v-for="(choice, index) in question.choices"
                :key="index"
                class="btn btn-outline-primary m-2"
                @click="selectChoice(choice)"
            >
                {{ choice }}
            </button>
        </div>

        <div v-else>
            <div v-if="isCorrect">
                <img :src="question.correctImage" alt="正解画像" class="img-fluid" />
                <p class="mt-3">{{ props.question.explanation }}</p>
            </div>
            <div v-else>
                <img src="@/assets/wrong.jpg" alt="不正解画像" class="img-fluid /">
                <p class="text-danger mt-3">残念...不正解です...</p>
            </div>
            <button class="btn btn-success mt-4" @click="$emit('answered', isCorrect)">
                次の問題へ進む
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    question: Object
})

const answered = ref(false)
const isCorrect = ref(false)

const selectChoice = (choice) => {
    isCorrect.value = choice === props.question.answer
    answered.value = true
}
</script>

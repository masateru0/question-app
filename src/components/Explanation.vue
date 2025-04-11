<template>
    <div>
        <div v-if="isCorrect">
            <img :src="question.correctImage" alt="正解画像" class="img-fluid" />
            <p class="mt-3">{{ question.explanation }}</p>
        </div>
        <div v-else>
            <img src="@/assets/wrong.jpg" alt="不正解画像" class="img-fluid /" />
            <p class="text-danger mt-3">残念...不正解です...</p>
        </div>
        <button class="btn btn-success mt-4" @click="$emit('next')">
            次の問題へ進む
        </button>
    </div>
</template>

<script setup>

    defineProps({
        isCorrect: Boolean,
        question: Object
    })
</script>

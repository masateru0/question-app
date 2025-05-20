<template>
    <div>
        <div v-if="isCorrect">
            <img :src="question.correctImage" alt="正解画像" class="img-fluid" />
            <h3 class="text-success mt-3">おめでとう！正解です！</h3>
            <p class="mt-3">{{ question.explanation }}</p>
        </div>
        <div v-else>
            <img src="@/assets/wrong.jpg" alt="不正解画像" class="img-fluid /" />
            <h3 class="text-danger mt-3">残念...不正解です...</h3>
            <p class="mt-3">正解は{{ question.answer }}でした。</p>
        </div>
        <button class="btn btn-success mt-4" @click="$emit('next')">次へ進む</button>
    </div>
</template>

<script setup>
defineProps({
    isCorrect: Boolean,
    question: Object,
})
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
}

.image-fluid {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
}

h3 {
    font-size: 24px;
    font-weight: bold;
}

p {
    font-size: 18px;
    margin: 10px 0;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
}
</style>

<template>
    <div class="home-page">
        <img src="@/assets/HomePage.jpg" alt="HomePage" class="top-logo" />
        <div class="quiz-head">
            <img src="@/assets/monster-ball.jpg" alt="Monsterball" class="quiz-logo" />
            <h1>ポケモンクイズ</h1>
        </div>
    <p>ポケモンに関するクイズに挑戦しよう！</p>
    <button class="btn btn-primary" @click="startQuiz">START</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const startQuiz = () => {
    router.push({ name: 'QuizPage'})
}
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
    height: 100vh;
    text-align: center;
}

.quiz-head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
}

.quiz-logo {
    width: 30px;
    height: 30px;
    margin-top: 5px;
    object-fit: cover;
}

.home-page h1 {
    font-size: 36px;
    margin: 15px 0;
    font-weight: bold;
}

.home-page p {
    font-size: 18px;
    margin-bottom: 30px;
}

.home-page button {
    padding: 10px 20px;
    font-size: 18px;
}

.top-logo {
    width: 800px;
    height: 450px;
    object-fit: contain;
}
</style>
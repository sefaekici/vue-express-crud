<template>
    <div class="add-user">
        <input v-model="name" required type="text" placeholder="FirstName LastName">
        <input v-model="email" required type="email" placeholder="Email">
        <input v-model="job" required type="text" placeholder="Job">
        <button @click="saveUserToDb()">Save</button>
    </div>
</template>
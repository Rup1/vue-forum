<template>
<div>
<nav class="menu-top">
    <section class="container">
        <div class="links"><a class="link" @click="goBack" v-if="back"><i class="fas fa-arrow-left"></i></a>
            <p class="link">{{title}}</p>
        </div><a class="link" v-if="getLogin" @click="logout" title="Logout"><i class="fas fa-user"></i></a>
        <router-link class="link" v-else="v-else" to="/login" title="Login"><i class="fas fa-user"></i></router-link>
    </section>
</nav>
</div>
</tempalte>
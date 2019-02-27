<template>
<div class="section">
    <h1 class="top-title">Signup</h1>
    <form class="pure-form pure-form-stacked pure-u-1" @submit.prevent="signup" method="POST">
        <fieldset class="pure-1"><input class="pure-u-1" id="name" placeholder="Name" type="text" v-model="name" data-test="name" /></fieldset>
        <fieldset class="pure-u-1"><input class="pure-u-1" id="email" placeholder="Email" type="email" v-model="email" data-test="email" /></fieldset>
        <fieldset class="pure-1"><input class="pure-u-1" id="password" placeholder="Password" type="password" v-model="password" data-test="password" /></fieldset>
        <fieldset class="pure-u-1"><input class="pure-u-1" id="username" placeholder="Username" type="text" v-model="username" data-test="username" /></fieldset>
        <fieldset><button class="pure-button pure-button-primary pure-input-1" type="submit" data-test="btn">Sign up</button></fieldset>
    </form>
</div>
</template>
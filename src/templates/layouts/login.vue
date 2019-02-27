<template>
<div class="section -login">
    <h1 class="top-title">Forum with Vue, TypeScript and GraphQL</h1>
    <form class="pure-form pure-form-stacked pure-u-1" @submit.prevent="signin" method="POST">
        <fieldset class="pure-u-1"><input class="pure-u-1" id="email" placeholder="Email" type="email" v-model="email" /></fieldset>
        <fieldset class="pure-1"><input class="pure-u-1" id="password" placeholder="Password" type="password" v-model="password" /></fieldset><span class="pure-form-message"><router-link class="link" to="/signup">Create account</router-link></span><button class="pure-button pure-button-primary pure-input-1"
            type="submit">Sign in</button></form>
</div>
</template>
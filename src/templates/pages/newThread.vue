<template>
  <div class="section">
    <apollo-mutation
      :mutation="createThread"
      :variables="{ title, id, body: postBody }"
      @done="threadSuccess"
      @error="threadError"
      v-if="getLogin"
    >
      <Toolbar :back="true" title="New Thread"></Toolbar>
      <div class="pure-form pure-form-stacked pure-u-1" slot-scope="{ mutate }">
        <fieldset>
          <input class="pure-input-1" id="title" placeholder="Title" type="text" v-model="title">
        </fieldset>
        <fieldset class="pure-1 thread-comment-box">
          <textarea class="textarea" id="postBody" resize="false" v-model="postBody"></textarea>
        </fieldset>
        <button
          class="pure-button pure-button-primary pure-input-1"
          @click="newThread(mutate)"
        >create Thread</button>
      </div>
    </apollo-mutation>
  </div>
</template>
<template>
  <div class="section new-post" v-if="getLogin">
    <ul class="tab-panel">
      <li class="tab" :class="!preview &amp;&amp; 'active'" @click="editPost()">
        <h3>Editor</h3>
      </li>
      <li class="tab" :class="preview &amp;&amp; 'active'" @click="previewPost()">
        <h3>Preview</h3>
      </li>
    </ul>
    <Toolbar :back="true" title="New Post"></Toolbar>
    <div class="thread-comment-box" v-if="!preview">
      <textarea
        class="textarea"
        id="postBody"
        placeholder="Please be friendly..."
        v-model="postBody"
      ></textarea>
      <ApolloMutation
        :mutation="newPostMutation"
        :variables="{ body: postBody, id: threadId }"
        @done="postSuccess"
        @error="postError"
      >
        <template slot-scope="{ mutate }">
          <button
            class="pure-button -fixed pure-button-primary input"
            @click="createPost(mutate)"
          >New Post</button>
        </template>
      </ApolloMutation>
    </div>
    <vue-markdown class="markdown-style" v-else>{{ postBody }}</vue-markdown>
  </div>
</template>
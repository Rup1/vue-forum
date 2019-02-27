<template>
  <main class="section">
    <ApolloQuery
      :query="threadQuery"
      :variables="{ id: threadId }"
      :skip="!threadId"
      fetchPolicy="network-only"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div class="loading apollo" v-if="loading">Loading...</div>
        <div class="error apollo" v-else-if="error">An error occured</div>
        <div class="result apollo" v-else-if="data">
          <Toolbar :back="true" :title="data.thread.title"></Toolbar>
          <ul class="thread-list -thread">
            <li
              class="thread -thread-post"
              :key="post.id"
              :id="post.id"
              v-for="post of data.thread.posts"
            >
              <div class="thread-side -post">
                <Gravatar
                  class="icon -gravatar"
                  :email="post.user.email"
                  :size="60"
                  default-img="mm"
                ></Gravatar>
              </div>
              <section class="thread-main -post">
                <header class="thread-header">
                  <span class="user">{{ post.user.name }}</span>
                  <span class="date">{{ timeF.formatDate(post.insertedAt) }}</span>
                </header>
                <vue-markdown class="markdown-style">{{ post.body}}</vue-markdown>
              </section>
            </li>
          </ul>
          <router-link
            class="pure-button -fixed"
            :to="`/categories/${data.thread.category.id}/threads/${data.thread.id}/new-post`"
            v-if="getLogin"
          >New Post</router-link>
        </div>
      </template>
    </ApolloQuery>
  </main>
</template>
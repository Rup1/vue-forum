<template>
  <div class="section">
    <ApolloQuery :query="categoryQuery" :variables="{ id }" :skip="!id" fetchPolicy="network-only">
      <template slot-scope="{ result: { loading, error, data } }">
        <div class="loading apollo" v-if="loading">Loading...</div>
        <div class="error apollo" v-else-if="error">An error occured</div>
        <div class="result apollo" v-else-if="data">
          <Toolbar back="back" :title="data.category.title"></Toolbar>
          <ul
            class="thread-list"
            v-if="data.category.threads &amp;&amp; data.category.threads.length &gt; 0"
          >
            <li
              class="thread"
              @click="goToThread(data.category.id, thread.id)"
              :key="thread.id"
              v-for="thread of data.category.threads"
              data-test="thread"
            >
              <div class="thread-side">
                <i class="icon fas fa-book-open"></i>
              </div>
              <section class="thread-main">
                <header class="thread-header">
                  <span>{{ thread.title}}</span>
                  <span class="date">{{ timeF.formatDate(thread.insertedAt) }}</span>
                </header>
                <dl class="thread-main-list">
                  <dt>Last Updated</dt>
                  <dd>{{ timeF.formatDate(thread.updatedAt) }}</dd>
                </dl>
              </section>
            </li>
          </ul>
          <ul class="thread-list" v-else>
            <li class="thread-list-header">
              <p class="subtitle">There are no threads to display.</p>
            </li>
          </ul>
          <router-link
            class="pure-button -fixed"
            :to="`/categories/${data.category.id}/new-thread/`"
            v-if="getLogin"
          >New Thread</router-link>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
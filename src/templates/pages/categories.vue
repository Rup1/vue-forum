<template>
  <div class="section">
    <Toolbar title="Categories"></Toolbar>
    <apollo-mutation
      :mutation="newCategoryMutation"
      :variables="{title}"
      @done="categorySuccess"
      @error="categoryError"
      v-if="getLogin"
    >
      <div class="pure-form -categories" slot-scope="{ mutate }">
        <input
          class="input pure-input-1"
          id="title"
          placeholder="Title"
          type="text"
          v-model="title"
        >
        <button
          class="pure-button pure-button-primary"
          @click="createCategory(mutate)"
        >create Category</button>
      </div>
    </apollo-mutation>
    <ul
      class="thread-list"
      v-if="categories &amp;&amp; categories.entries &amp;&amp; categories.entries.length &gt; 0"
    >
      <li
        class="thread"
        @click="goToCategory(category.id)"
        :key="category.id"
        v-for="category of categories.entries"
        data-test="category-li-element"
      >
        <div class="thread-side">
          <i class="icon fas fa-tags"></i>
        </div>
        <section class="thread-main">
          <header class="thread-header">{{ category.title }}</header>
        </section>
      </li>
      <ul class="st-pagination" v-if="categories.totalPages &gt; 1">
        <li v-if="page === 0">
          <i class="page fas fa-angle-left"></i>
        </li>
        <li v-else>
          <a class="link page" @click="prevPage">
            <i class="fas fa-angle-left"></i>
          </a>
        </li>
        <li v-for="pageNumber in categories.totalPages" :key="pageNumber">
          <a
            class="link page"
            :class="pageNumber === active &amp;&amp; 'active'"
            @click="goToPage(pageNumber)"
          >{{ pageNumber }}</a>
        </li>
        <li v-if="page === categories.totalPages - 1">
          <i class="page fas fa-angle-right"></i>
        </li>
        <li v-else>
          <a class="link page" @click="nextPage">
            <i class="fas fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </ul>
    <ul class="thread-list" v-else>
      <li class="thread">
        <section class="thread-main">
          <header class="thread-header">There aren't any records to display.</header>
        </section>
      </li>
    </ul>
  </div>
</template>
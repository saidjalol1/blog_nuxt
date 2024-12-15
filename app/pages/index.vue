<script setup>
useHead({
  title: 'Asosiy - My Web App',
  meta: [
    {
      name: 'description',
      content: 'Learn more about our company and team on the About Us page.',
    },
    {
      name: 'keywords',
      content: 'about, company, team, web app',
    },
    {
      property: 'og:title',
      content: 'About Us - My Web App',
    },
    {
      property: 'og:description',
      content: 'Learn more about our company and team on the About Us page.',
    },
  ],
});
const dummy_posts = [
    {
        "title":"How I Am Using a Lifetime 100% Free Server",
        "body":"As developers we need to run and host the backends on cloud services. are available, but they have some restrictions.What if I say I have been using the Linux-based server for free for more than 4–5 years? Yes, you heard it right. I am using this Linux server with Ubuntu 20 installed, 24 GB RAM, 4 CPUs, and 200 GB storage for a lifetime free.",
        "reaction":245,
        "comment":500,
        "category":"Shahxiy rivojlanish",
        "date":"2005-10-06"
    },
    {
        "title":"How I Am Using a Lifetime 100% Free Server",
        "body":"As developers we need to run and host the backends on cloud services. are available, but they have some restrictions.What if I say I have been using the Linux-based server for free for more than 4–5 years? Yes, you heard it right. I am using this Linux server with Ubuntu 20 installed, 24 GB RAM, 4 CPUs, and 200 GB storage for a lifetime free.",
        "reaction":245,
        "comment":500,
        "category":"Shahxiy rivojlanish",
        "date":"2005-10-06"
    },
    {
        "title":"How I Am Using a Lifetime 100% Free Server",
        "body":"As developers we need to run and host the backends on cloud services. are available, but they have some restrictions.What if I say I have been using the Linux-based server for free for more than 4–5 years? Yes, you heard it right. I am using this Linux server with Ubuntu 20 installed, 24 GB RAM, 4 CPUs, and 200 GB storage for a lifetime free.",
        "reaction":245,
        "comment":500,
        "category":"Shahxiy rivojlanish",
        "date":"2005-10-06"
    },
    {
        "title":"How I Am Using a Lifetime 100% Free Server",
        "body":"As developers we need to run and host the backends on cloud services. are available, but they have some restrictions.What if I say I have been using the Linux-based server for free for more than 4–5 years? Yes, you heard it right. I am using this Linux server with Ubuntu 20 installed, 24 GB RAM, 4 CPUs, and 200 GB storage for a lifetime free.",
        "reaction":245,
        "comment":500,
        "category":"Shahxiy rivojlanish",
        "date":"2005-10-06"
    },
    {
        "title":"How I Am Using a Lifetime 100% Free Server",
        "body":"As developers we need to run and host the backends on cloud services. are available, but they have some restrictions.What if I say I have been using the Linux-based server for free for more than 4–5 years? Yes, you heard it right. I am using this Linux server with Ubuntu 20 installed, 24 GB RAM, 4 CPUs, and 200 GB storage for a lifetime free.",
        "reaction":245,
        "comment":500,
        "category":"Shahxiy rivojlanish",
        "date":"2005-10-06"
    },
]
</script>
<template>
    <div class="wrapper grid  grid-cols-1 md:grid-cols-12 sm:grid-cols-1 lg:grid-cols-12 lg:gap-x-5 md:gap-x-5 sm:gap-x-5">
        <div class="posts_ lg:col-start-1 lg:col-end-9 md:col-start-1 md:col-end-9 sm:col-start-1 sm:col-end-13 lg:mt-14 md:mt-14 sm:mt-14">
            <Post v-for=" post in dummy_posts" :key="post.title" :text="post.body" :title="post.title" :date="post.date"  />
        </div>
        <div class="recommendation_posts lg:mt-0 md:mt-0 sm:mt-0 lg:col-start-9 lg:col-end-13 md:col-start-9 md:col-end-13 sm:col-start-1 sm:col-end-3 lg:py-4 md:py-4 lg:px-2 md:px-2 sm:py-4 lg:border lg:border-l-2 lg:border-b-0 lg:border-r-0 md:border md:border-l-2 md:border-b-0 md:border-r-0">
            <h1 class="px-2 mb-8 text-xl font-bold mt-10">Takliflar</h1>
            <RecommendedPosts v-for=" post in dummy_posts" :key="post.title" :text="post.body" :title="post.title"  :category="post.category"  :date="post.date"   />
        </div>
    </div>
</template>
<style scoped>
</style>
<script setup>
import { ref , onMounted} from "vue";

const config = useRuntimeConfig();
const posts = ref([])
const error = ref("")

const likedPosts = async () =>{
    try{
        const responce = await fetch(`${ config.public.apiBase}/posts/liked`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            credentials: "include",
        })
        if (!responce.ok){
            throw new Error("Network is too bad")
        }
        
        const data = await responce.json()
        posts.value = data
        console.log(posts.value);
        
    }catch(error){
      error.value = error
    }
}
onMounted(async () => {
  await likedPosts()
})

useHead({
  title: 'Yoqtirilganlar - My Web App',
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

</script>
<template>
    <div class="wrapper grid  grid-cols-1 md:grid-cols-12 sm:grid-cols-1 lg:grid-cols-12 lg:gap-x-5 md:gap-x-5 sm:gap-x-5">
        <div class="posts_ lg:col-start-1 lg:col-end-9 md:col-start-1 md:col-end-9 sm:col-start-1 sm:col-end-13 lg:mt-10 md:mt-14 sm:mt-14">
            <Postcomponent v-for="post in posts" :post="post" />
        </div>
        <div class="recommendation_posts lg:mt-0 md:mt-0 sm:mt-0 lg:col-start-9 lg:col-end-13 md:col-start-9 md:col-end-13 sm:col-start-1 sm:col-end-3 lg:py-4 md:py-4 lg:px-2 md:px-2 sm:py-4 lg:border lg:border-l-2 lg:border-b-0 lg:border-r-0 md:border md:border-l-2 md:border-b-0 md:border-r-0">
            <h1 class="px-2 mb-8 text-xl font-bold mt-10">Takliflar</h1>
            <RecommendedPosts v-for="post in posts" :post="post"/>
        </div>
    </div>
</template>
<style scoped>
.posts_, .recommendation_posts{
  max-height: 1024px;
  overflow-y: auto;
}
.posts_::-webkit-scrollbar, .recommendation_posts::-webkit-scrollbar{
  height: 0px;
}
</style>
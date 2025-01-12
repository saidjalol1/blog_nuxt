<script setup>
import { ref , onMounted} from "vue";

const config = useRuntimeConfig();
const posts = ref([])
const error = ref("")
const loader = ref(true)

const delay_load =  () =>{
    setTimeout(() => {
        console.log("Worked");
        loader.value = false
    }, 2000);
}

const likedPosts = async () =>{
    try{
      loader.value = true
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
        delay_load()
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
    <div v-if="loader">
        <Loader :loader="loader" />
    </div>
    <div v-else class="wrapper grid  grid-cols-1 md:grid-cols-12 sm:grid-cols-1 lg:grid-cols-12 lg:gap-x-5 md:gap-x-5 sm:gap-x-5">
        <div class="posts_ lg:col-start-1 lg:col-end-9 md:col-start-1 md:col-end-9 sm:col-start-1 sm:col-end-13 lg:mt-10 md:mt-14 sm:mt-14">
            <Postcomponent v-for="post in posts" :post="post" />
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
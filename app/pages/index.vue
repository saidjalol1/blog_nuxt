<script setup>
import { ref , onMounted} from "vue";

const config = useRuntimeConfig();
const posts = ref([])
const recommened = ref([])
const error = ref("")

// Get all Posts
const fetchPost = async () => {
  try {
    const response = await fetch(`${ config.public.apiBase}/all-blogs/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    posts.value = await response.json();
    console.log(posts.value);
  } catch (error) {
    error.value = error.message;
  }
};

// const formatDate = (date) => {
//   const formattedDate = new Date(date).toLocaleDateString();
//   return formattedDate;
// }

// const posts_format = () => {
//   posts.forEach(post => {
//   post.date_added = formatDate(post.date_added); // Format the date in place
// });
// }


useHead({
  title: 'Asosiy - My Web App | IT, Shaxsiy Rivojlanish va Texnologiyalar',
  meta: [
    {
      name: 'description',
      content: 'Muvaffaqiyat sirlari, shaxsiy rivojlanish, IT texnologiyalari, IT olamida muvaffaqiyatli karera qurish, Python va sun\'iy intellekt haqida qiziqarli va foydali kontent.',
    },
    {
      name: 'keywords',
      content: 'IT, Python, Sun\'iy intellekt, Shaxsiy rivojlanish, Texnologiyalar, IT Karera, Web dasturlash, O\'zbekcha kontent',
    },
    {
      property: 'og:title',
      content: 'Asosiy - My Web App | IT, Shaxsiy Rivojlanish va Texnologiyalar',
    },
    {
      property: 'og:description',
      content: 'O\'zbek tilida muvaffaqiyat sirlari, shaxsiy rivojlanish, IT texnologiyalari, va sun\'iy intellekt haqida qiziqarli maqolalar va yangiliklar.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.muvaffaqiyatsirlari.uz/',
    },
    {
      property: 'og:image',
      content: 'https://back-end.muvaffaqiyatsirlari.uz/static/images/a80c3b7e-36e5-4f6e-96a4-884b3ceccb71.webp',
    },
    {
      name: 'author',
      content: 'G\'ayratjon Xoldarov, Turakhujayev Saidjalol',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
});

onMounted( async () => {
  await fetchPost()

})

</script>
<template>
    <div v-if="error" class="wrapper">
      <div class="error text-center">
          {{  error  }}
      </div>  
    </div>
    <div v-else class="wrapper grid  grid-cols-1 md:grid-cols-12 sm:grid-cols-1 lg:grid-cols-12 lg:gap-x-5 md:gap-x-5 sm:gap-x-5">
        <div class="posts_ lg:col-start-1 lg:col-end-9 md:col-start-1 md:col-end-9 sm:col-start-1 sm:col-end-13 lg:mt-10 md:mt-14 sm:mt-14">
          <Postcomponent  v-for="i in posts" :key="i.id" :post="i" :parent_function="fetchPost" />
        </div>
        <div class="recommendation_posts lg:mt-0 md:mt-0 sm:mt-0 lg:col-start-9 lg:col-end-13 md:col-start-9 md:col-end-13 sm:col-start-1 sm:col-end-3 lg:py-4 md:py-4 lg:px-2 md:px-2 sm:py-4 lg:border lg:border-l-2 lg:border-b-0 lg:border-r-0 md:border md:border-l-2 md:border-b-0 md:border-r-0">
            <h1 class="px-2 mb-8 text-xl font-bold mt-10 mt-4">Takliflar</h1>
            <RecommendedPosts v-for="i in posts" :key="i.title"  :post="i"   />
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
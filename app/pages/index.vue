<script setup>
import { ref , onMounted} from "vue";

const config = useRuntimeConfig();
const posts = ref([])
const categories = ref([])
const recommened = ref([])
const error = ref("")
const loader = ref(true)


const delay_load =  () =>{
    setTimeout(() => {
        console.log("Worked");
        loader.value = false
    }, 2000);
}

// Get all Posts
const fetchPost = async () => {
  try {
    loader.value = true
    const response = await fetch(`${ config.public.apiBase}/all-blogs/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    posts.value = await response.json();
    delay_load()
  } catch (error) {
    error.value = error.message;
  }
};

const filterPost = async (id) =>{
    try{
      loader.value = true
        const responce = await fetch(`${config.public.apiBase}/filter-blogs/`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"category_id": parseInt(id)}),
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


const fetchCategories = async () => {
  try {
    loader.value = true
    const response = await fetch(`${config.public.apiBase}/all-categories/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    categories.value = await response.json();
    loader.value = false
  } catch (error) {
    error.value = error;
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

onMounted( async () => {
  await fetchPost()
  await fetchCategories()
})

</script>
<template>
    <div v-if="loader">
        <Loader :loader="loader" />
    </div>
    <div v-else class="wrapper grid grid-cols-1 md:grid-cols-12 sm:grid-cols-1 lg:grid-cols-12 lg:gap-x-5 md:gap-x-5 sm:gap-x-5">
        <div v-if="error" class="wrapper">
          <div class="error text-center">
              {{  error  }}
          </div>  
        </div>
        <div class="categories-container lg:col-span-12 md:col-span-12 sm:col-span-12 mt-4 px-4 sticky top-0 bg-white z-10">
            <div class="categories flex items-center overflow-x-auto py-2">
              <button
                  class="category-btn all-categories mr-4 px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-200 transition"
                  @click="fetchPost()">
                  For You
              </button>
              <span
                v-for="category in categories"
                :key="category.id"
                class="category-btn px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-200 transition cursor-pointer" 
                @click="filterPost(category.id)">
                {{ category.name }}
              </span>
            </div>
        </div>
        <div class="posts_ lg:col-start-1 lg:col-end-9 md:col-start-1 md:col-end-9 sm:col-start-1 sm:col-end-13 lg:mt-5 md:mt-14 sm:mt-14">
          <Postcomponent  v-for="i in posts" :key="i.id" :post="i" :parent_function="fetchPost" />
        </div>
        <div class="recommendation_posts lg:mt-0 md:mt-0 sm:mt-0 lg:col-start-9 lg:col-end-13 md:col-start-9 md:col-end-13 sm:col-start-1 sm:col-end-3 lg:py-4 md:py-4 lg:px-2 md:px-2 sm:py-4 lg:border lg:border-t-0 lg:border-l-2 lg:border-b-0 lg:border-r-0 md:border md:border-l-2 md:border-b-0 md:border-r-0">
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
/* Categories Section */
.categories-container {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 10px;
}

.category-btn {
  background-color: transparent;
  border: 1px solid #e0e0e0;
  color: #333;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background-color: #fb4d3f;
  color: white;
}

/* Post Item Styles */
.post-item {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.post-item h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.post-item p {
  font-size: 1rem;
  color: #666;
}

.post-item .tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.post-item .tags .tag {
  background-color: #f1f1f1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  color: #666;
  border: 1px solid #ddd;
}

</style>
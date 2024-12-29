<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRoute()


const isMobile = ref(false);
let rec = ref(false)
const post = ref({})
const image_url = ref(null)
const com = ref(false)
const config = useRuntimeConfig();
const error = ref("")
const date = ref("")

const fetchBlog = async () => {
  try {
    const response = await fetch(`${config.public.apiBase}/get-blog/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: parseInt(router.params.id)}),
    });
    if (!response.ok) {
        console.log({"id":parseInt(router.params.id)})
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    post.value = data
    date.value = data.date_added.split("T")[0]
  } catch (error) {
    error.value = error.message;
  }
};



const checkWindowSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const recommend_menu = () =>{
    rec.value = !rec.value
}
const comment_toggle = () =>{
    com.value = !com.value
}
const post_image = (image) => {
    return `${ config.public.apiBase}/static/images/${image}`
}

onMounted(() => {
  fetchBlog()
  checkWindowSize(); // Initial check
  window.addEventListener("resize", checkWindowSize);   
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWindowSize);
});

</script>
<template >
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-else class="wrapper">
        <div class="post_detail pt-10">
            <div class="title font-black text-xl lg:text-3xl">{{ post?.title }}</div>
            <div class="title font-semibold text-gray-600 text-xl lg:text-2xl mt-2">{{ post?.subtitle }}</div>
        </div>
        <div class="profile flex justify-start items-center gap-x-2 mt-10">
            <div class="image">
                <img src="../../public/download.png" alt="profile image" width="656" height="300" />
            </div>
            <div class="text-gray-600">{{ post.admin?.username }} | {{  date }}</div>
        </div>
        <div v-if="isMobile" class="save_and_recommend mt-4 flex items-center justify-between gap-x-2 overflow-none">
                <button class="btn-save flex items-center gap-x-2" aria-label="save">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#aaadb1" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
                        <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
                    </svg>
                    <span class="text-sm text-gray-500">
                        Saqlash
                    </span>
                </button>
                <button class="btn-save flex items-center gap-x-2" @click="recommend_menu" aria-label="save">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#aaadb1" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                    <span class="text-sm text-gray-500">
                        More
                    </span>
                </button>
        </div>
        <div v-if="isMobile == false" class="post_btns mt-4 py-2 flex items-center justify-between">
            <div class="reactions flex gap-x-5 items-center">
                    <button aria-label="reaction" class="flex items-center gap-x-2">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 512 512"> 
                            <path fill="#aaadb1" d="M336 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"/>
                        </svg>
                        <span class="text-sm text-gray-600">+5.4K</span>
                    </button>
                    <button aria-label="comment" class="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 512 512">
                            <path fill="#aaadb1" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                        </svg>
                        <span class="text-sm text-gray-600">56</span>
                    </button>
            </div>
            <div class="save_and_recommend flex items-center gap-x-5 pr-8">
                <button aria-label="save">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#aaadb1" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
                        <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
                    </svg>
                </button>
                <button @click="recommend_menu" aria-label="button-rec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#aaadb1" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="post_image mb-2 mt-6 ">
            <NuxtImg class="rounded-lg" :src="post_image(post.image)" width="640" height="360" sizes="100vw sm:50vw md:400px" alt="post image" />
        </div>
        <div  v-if="rec" class="rec_menu shadow-lg rounded-lg px-4 py-4">
            <ul>
                <li class="flex gap-x-2 item-center">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#aaadb1" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                    <div>
                        <span class="text-sm text-bold">Ko'proq</span><br>
                        <span class="text-sm text-gray-600">Menga shunga o'xshash postlardan ko'proq ko'rsating</span>
                    </div>
                </li>
                <li class="flex gap-x-2 item-center mt-2">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#aaadb1" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                    </div>
                    <div>
                        <span class="text-sm text-bold">Kamroq</span><br>
                        <span class="text-sm text-gray-600">Menga shunga o'xshash postlarni kamroq ko'rsating</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="post_body mt-5 lg:text-xl md:text-xl text-lg text-xl" v-html="post.body"></div>
        <div class="share_buttons flex mt-2 mb-2 gap-x-2 flex-wrap gap-y-2">
            <SocialShare class="text-white"  v-for="network in ['facebook', 'x', 'linkedin', 'email', 'telegram']"
            :key="network"
            :network="network"
            :description="image_url"
            :image="image_url"
            :styled="true" />
        </div>
        <div class="post_btns py-2 flex items-center justify-between">
            <div class="reactions flex gap-x-5 items-center">
                    <button aria-label="reaction" class="flex items-center gap-x-2">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 512 512"> 
                            <path fill="#aaadb1" d="M336 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"/>
                        </svg>
                        <span class="text-sm text-gray-600">+5.4K</span>
                    </button>
                    <button aria-label="comment" class="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 512 512">
                            <path fill="#aaadb1" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                        </svg>
                        <span class="text-sm text-gray-600">56</span>
                    </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper{
    max-width: 1024px;
}
.post_btns{
    border: 1px solid transparent;
    border-top: 1px solid rgb(221, 218, 218);
    border-bottom: 1px solid rgb(221, 218, 218);
}
.btn-save{
    border: 1px solid gray;
    padding: 10px 40px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
}
.image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
img{
    width: 100%;
}
.rec_menu{
    width: 200px;
    border: 1px solid white;
    background-color: white;
    position: fixed;  /* Position the menu below the button */   /* Align with the left edge of the button */
    z-index: 100; 
    left: 58%;
    top: 32%;
}
.post_body{
    line-height: 40px
}
.send{
    padding: 4px 10px;
    border-radius: 10px;
    font-weight: 700;
    color: white;
    background-color: #fb4d3f;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0);
  }
}
@media screen and (max-width:568px){
    .rec_menu{
        left: 58%;
        top: 48%;
}
}
@media screen and (max-width:468px){
    .rec_menu{
        left: 45%;
        top: 38%;
}}
@media screen and (max-width:414px){
    .rec_menu{
        left: 45%;
        top: 42%;
}}
@media screen and (max-width:390px){
    .rec_menu{
        left: 45%;
        top: 44%;
}}
@media screen and (max-width:375px){
    .rec_menu{
        left: 45%;
        top: 55%;
}}
@media screen and (max-width:344px){
    .rec_menu{
        left: 45%;
        top: 45%;
}}
</style>
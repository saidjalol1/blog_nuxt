<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false);


const post = {
    
        "title":"How I Am Using a Lifetime 100% Free Server",
        "body":"As developers we need to run and host the backends on cloud services. are available, but they have some restrictions.What if I say I have been using the Linux-based server for free for more than 4–5 years? Yes, you heard it right. I am using this Linux server with Ubuntu 20 installed, 24 GB RAM, 4 CPUs, and 200 GB storage for a lifetime free.",
        "reaction":245,
        "comment":500,
        "category":"Shahxiy rivojlanish",
        "date":"2005-10-06"
    
}
const checkWindowSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkWindowSize(); // Initial check
  window.addEventListener("resize", checkWindowSize); 
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWindowSize);
});
</script>
<template>
    <div class="wrapper">
        <div class="post_detail pt-10">
            <div class="title font-black text-xl lg:text-3xl">{{ post?.title }}</div>
            <div class="title font-semibold text-gray-600 text-xl lg:text-2xl mt-2">{{ post?.title }}</div>
        </div>
        <div class="date text-gray-500 mt-10">
            {{  post?.date }}
        </div>
        <div v-if="isMobile" class="save_and_recommend mt-4 flex items-center justify-between gap-x-5 pr-8">
                <button class="btn-save flex gap-x-2 items-center" aria-label="save">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#aaadb1" class="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                    </svg>
                </button>
                <button class="btn-save" aria-label="save">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#aaadb1" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
                        <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
                    </svg>
                </button>
                <button class="btn-save" @click="recommend_menu" aria-label="save">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#aaadb1" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </button>
        </div>
        <div v-if="isMobile == false" class="post_btns mt-2 py-2 flex items-center justify-between">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#aaadb1" class="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                    </svg>
                </button>
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
    </div>
</template>
<style scoped>
.wrapper{
    max-width: 1024px;
}
.post_btns{
    border: 1px solid transparent;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
}
.btn-save{
    border: 1px solid gray;
    padding: 10px 45px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
}
</style>
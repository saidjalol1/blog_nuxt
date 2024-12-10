<script  setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false);
const mobile_menu = ref(false);

const checkWindowSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const toggle_menu = () =>{
    mobile_menu.value = !mobile_menu.value
}

onMounted(() => {
  checkWindowSize(); // Initial check
  window.addEventListener("resize", checkWindowSize); 
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWindowSize);
});
</script>
<template>
        <header  class="w-full py-4" :style="{ 'background-color': isMobile ? '#eee3d2' : '#f5eee4' }">
            <div class="wrapper flex items-center">
                <nav v-if="isMobile"  class="mobile flex justify-between items-center w-full">
                    <div class="logo">
                        <NuxtLink to="/">
                            <span style="color: #fb4d3f;">M</span><span>F</span>
                        </NuxtLink>
                    </div>
                    <div class="menu_btn">
                        <button @click="toggle_menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-menu-button" viewBox="0 0 16 16">
                                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                                <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                </nav>
                <nav v-else class="desktop w-full flex justify-between items-center">
                    <div class="logo">
                        <NuxtLink to="/">
                            <span style="color: #fb4d3f;">M</span><span>F</span>
                        </NuxtLink>
                    </div>
                    <div class="menu">
                        <ul class="flex justify-between gap-x-10">
                            <li class="text-bold">
                                <NuxtLink to="/" active-class="active">Asosiy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog" active-class="active">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/books" active-class="active">Kitoblar</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about-us" active-class="active">Biz haqimizda</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div v-if="mobile_menu" class="menu mobile_menu_items">
            <div class="wrapper border">
                <ul class="mt-5 mb-10 flex flex-col gap-y-4 text-xl">
                    <li>
                        <NuxtLink to="/" active-class="active">Asosiy</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog" active-class="active">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/books" active-class="active">Kitoblar</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us" active-class="active">Biz haqimizda</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
</template>
<style>
.logo span{
    font-style: italic;
    font-weight: 900;
    font-size: 30px;
}
header{
    background-color: #f5eee4;
    font-weight: 600;
    color: #000000;
}
a:active{
    color: #fb4d3f;
}
.active{
    color: #fb4d3f;
}
.mobile_menu_items{
    background-color: #f5eee4;
}
</style>
<script  setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router"

const router = useRouter();
const isMobile = ref(false);
const mobile_menu = ref(false);
const drop = ref(false);

const checkWindowSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const toggle_menu = () =>{
    mobile_menu.value = !mobile_menu.value
}
const close_manu = () =>{
    mobile_menu.value = false
}
const drop_toggle = () =>{
    drop.value = !drop.value
}

onMounted(() => {
  checkWindowSize(); // Initial check
  window.addEventListener("resize", checkWindowSize); 
});



onUnmounted(() => {
  window.removeEventListener("resize", checkWindowSize);
});
watch(() => router.currentRoute, close_manu);
</script>
<template>
        <header  class="w-full py-4 border" >
            <div class="wrapper flex items-center">
                <nav v-if="isMobile"  class="mobile flex justify-between items-center w-full">
                    <div class="logo">
                        <NuxtLink to="/">
                            <span style="color: #fb4d3f;">M</span><span>S</span>
                        </NuxtLink>
                    </div>
                    <div class="menu_btn">
                        <button aria-label="menu" @click="toggle_menu">
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
                            <span style="color: #fb4d3f;">M</span><span>s</span>
                        </NuxtLink>
                    </div>
                    <div class="menu">
                        <ul class="flex justify-between items-center gap-x-10">
                            <li class="text-bold">
                                <NuxtLink to="/" active-class="active">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/books" active-class="active">Kitoblar</NuxtLink>
                            </li>
                            <li>  
                                <div class="relative inline-block text-left">
                                    <div>
                                        <button @click="drop_toggle" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Shaxsiy
                                            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div v-if="drop" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div class="py-1" role="none">
                                            <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" -->
                                            <NuxtLink to="/saved" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Saqlanganlar</NuxtLink>
                                            <NuxtLink to="/liked" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Yoqtirilganlar</NuxtLink>
                                        </div>
                                    </div>
                                </div>
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
                        <NuxtLink @click="close_manu" to="/" active-class="active">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="close_manu" to="/books" active-class="active">Kitoblar</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="close_manu" to="/saved" active-class="active">Saqlanganlar</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="close_manu" to="/liked" active-class="active">Yoqtirilganlar</NuxtLink>
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
    background-color: white;
    font-weight: 600;
    color: #000000;
}
a:active{
    color: #fb4d3f;
}
a:hover{
    color: #fb4d3f;
}
.active{
    color: #fb4d3f;
}
.mobile_menu_items{
    background-color: white;
    position: absolute;
    width: 100%;
}
</style>
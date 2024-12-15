<script setup>

const prop = defineProps({
    title : String,
    text : String,
    reaction : Number,
    comment : Number,
    date: String
})

const truncateText = (text, limit) => {
      if (text.length > limit) {
        return text.substring(0, limit) + "    ...";
      }
      return text;
    }

</script>
<template>
    <div class="post grid grid-cols-1 lg:grid-cols-4 gap-x-4 mb-6">
        <div class="post_main col-span-1 order-2 lg:order-1 md:order-1 lg:col-span-3 md:grid-span-2">
            <div class="post_title">
                <h1 class="font-bold text-lg lg:text-3xl md:text-2xl sm:text-xl">
                    <NuxtLink to="/detail/">
                        {{  prop.title }}
                    </NuxtLink>
                </h1>
            </div>
            <div class="post_short pr-10 text-gray-700 text-sm lg:text-lg md:text-lg">{{  truncateText(prop.text, 100) }}</div>
            <div class="post_btns flex items-center justify-between">
                <div class="reactions mt-4 flex gap-x-8 items-center">
                    <div class="date hidden lg:block md:block text-sm text-gray-500 mt-2">{{  prop.date }}</div>
                    <div class="reaction flex items-center gap-x-5 text-grey-600">
                        <button button-name="reaction" class="flex items-center gap-x-2">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 512 512"> 
                                <path fill="#aaadb1" d="M336 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16l0-39.4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 153.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"/>
                            </svg>
                            <span class="text-sm text-gray-600">+5.4K</span>
                        </button>
                        <button button-name="comment" class="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 512 512">
                                <path fill="#aaadb1" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                            </svg>
                            <span class="text-sm text-gray-600">56</span>
                        </button>
                    </div>
                </div>
                <div class="save_and_recommend mt-4 flex items-center gap-x-4 pr-8">
                    <div class="save">
                        <div class="icon">
                            <button button-name="save">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#aaadb1" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
                                    <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="post_image col-span-1 order-1 lg:order-2 md:order-2 mb-2">
            <NuxtImg src="post.webp" width="640" height="360" alt="post image" />
        </div>
    </div>
</template>
<style scoped>
/* .post_image{
    width: 200px;
    height: 200px;
} */
img{
    width: 100%;
    margin-top: 30px;
}
a:active{
    color: #fb4d3f;
}
a:hover{
    color: #fb4d3f;
    cursor: pointer;
}
/* @media screen and (max-width:1024px){
    img{
        width: 100%;
        margin-top: 0px;
    }
} */

</style>
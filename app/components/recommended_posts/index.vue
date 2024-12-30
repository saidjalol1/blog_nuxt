<script setup>

const prop = defineProps({
   post: Object
})
const date = ref("")
const format_date = (date_) => {
    date.value = date_.split("T")[0]
    console.log(date.value);
    return
}
onMounted(() =>{
    format_date(prop.post.date_added)
})
</script>
<template>
    <div class="post px-2">
            <div class="category mb-2">
                <h1 class="font-bold text-gray-500">{{ prop.post.category }}</h1>
            </div>
            <div class="post_title">
                <h1 class="font-bold text-xl">
                    <NuxtLink to="/" :post="prop.post">
                        {{  prop.post.title }}
                    </NuxtLink>
                </h1>
                <p class="text-gray-600">{{ prop.post.subtitle }}</p>
            </div>
            <div class="mt-2 text-gray-500">
                {{  date }}
            </div>
    </div>
    <hr class="shadow-lg border border-1 mt-3 mb-3">
</template>
<style scoped>
.post_image{
    width: 200px;
    height: 200px;
}
a:active{
    color: #fb4d3f;
}
a:hover{
    color: #fb4d3f;
}
</style>
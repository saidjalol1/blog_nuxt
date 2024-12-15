<script setup>

const prop = defineProps({
    title : String,
    text : String,
    reaction : Number,
    comment : Number,
    category: String,
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
    <div class="post px-2">
            <div class="category mb-2">
                <h1 class="font-bold text-gray-500">{{  prop.category }}</h1>
            </div>
            <div class="post_title">
                <h1 class="font-bold text-xl">
                    <NuxtLink to="/detail">
                        {{  prop.title }}
                    </NuxtLink>
                </h1>
            </div>
            <div class="mt-2 text-gray-500">
                {{  prop.date }}
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
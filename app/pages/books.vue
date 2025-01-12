<script setup>
import { onMounted } from 'vue';
const loader = ref(true)

const delay_load =  () =>{
    setTimeout(() => {
        console.log("Worked");
        loader.value = false
    }, 3000);
}
onMounted(() => {
     delay_load()
})
</script>
<template>
    <div v-if="loader">
        <Loader :loader="loader" />
    </div>
    <div v-else class="wrapper">
        <div class="search mt-10 mb-10 flex justify-content-center px-10">
            <form action="" class="w-full">
                <div class="m-auto  flex items-center justify-center shadow hover:shadow-lg py-2 px-4 rounded-lg">
                    <input  class="w-full py-2 px-4 outline-none" type="text" placeholder="Kitob qidirish">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </div>
            </form>
        </div>
        <div class="books">
            <div class="book mt-5 grid gap-x-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                <div class="book_image col-span-1 border flex justify-center px-4 py-4">
                    <img src="../public/download (1).jpg" alt="">
                </div>
                <div class="book_description col-span-1 lg:col-span-3 md:col-span-3 sm:col-span-3">
                    <h1 class="mt-4 font-black text-2xl">Nomi: Raqamli Qal'a</h1>
                    <h3 class="mt-2 font-bold text-xl text-gray-600">Yozuvchi : Den Brown</h3>
                    <p class="mt-1 font-semibold text-gray-600">Til: Ingiliz tili</p>
                    <p class="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nostrum libero odio suscipit accusantium necessitatibus? Obcaecati soluta, non nulla nam dolore natus dignissimos enim doloremque praesentium saepe fugiat, blanditiis et?
                    </p>
                    <div class="button mt-5">
                        <button>sotib olish</button>
                    </div>
                </div>
            </div>
            <div class="book mt-5 grid gap-x-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                <div class="book_image col-span-1 border flex justify-center px-4 py-4">
                    <img src="../public/download (1).jpg" alt="">
                </div>
                <div class="book_description col-span-1 lg:col-span-3 md:col-span-3 sm:col-span-3">
                    <h1 class="mt-4 font-black text-2xl">Nomi: Raqamli Qal'a</h1>
                    <h3 class="mt-2 font-bold text-xl text-gray-600">Yozuvchi : Den Brown</h3>
                    <p class="mt-1 font-semibold text-gray-600">Til: Ingiliz tili</p>
                    <p class="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nostrum libero odio suscipit accusantium necessitatibus? Obcaecati soluta, non nulla nam dolore natus dignissimos enim doloremque praesentium saepe fugiat, blanditiis et?
                    </p>
                    <div class="button mt-5">
                        <button>sotib olish</button>
                    </div>
                </div>
            </div>
            <div class="book mt-5 grid gap-x-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                <div class="book_image col-span-1 border flex justify-center px-4 py-4">
                    <img src="../public/download (1).jpg" alt="">
                </div>
                <div class="book_description col-span-1 lg:col-span-3 md:col-span-3 sm:col-span-3">
                    <h1 class="mt-4 font-black text-2xl">Nomi: Raqamli Qal'a</h1>
                    <h3 class="mt-2 font-bold text-xl text-gray-600">Yozuvchi : Den Brown</h3>
                    <p class="mt-1 font-semibold text-gray-600">Til: Ingiliz tili</p>
                    <p class="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nostrum libero odio suscipit accusantium necessitatibus? Obcaecati soluta, non nulla nam dolore natus dignissimos enim doloremque praesentium saepe fugiat, blanditiis et?
                    </p>
                    <div class="button mt-5">
                        <button>sotib olish</button>
                    </div>
                </div>
            </div>
            <div class="book mt-5 grid gap-x-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                <div class="book_image col-span-1 border flex justify-center px-4 py-4">
                    <img src="../public/download (1).jpg" alt="">
                </div>
                <div class="book_description col-span-1 lg:col-span-3 md:col-span-3 sm:col-span-3">
                    <h1 class="mt-4 font-black text-2xl">Nomi: Raqamli Qal'a</h1>
                    <h3 class="mt-2 font-bold text-xl text-gray-600">Yozuvchi : Den Brown</h3>
                    <p class="mt-1 font-semibold text-gray-600">Til: Ingiliz tili</p>
                    <p class="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nostrum libero odio suscipit accusantium necessitatibus? Obcaecati soluta, non nulla nam dolore natus dignissimos enim doloremque praesentium saepe fugiat, blanditiis et?
                    </p>
                    <div class="button mt-5">
                        <button>sotib olish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.book_image{
    border-radius: 10px;
}
button{
    padding: 4px 10px;
    border-radius: 10px;
    font-weight: 700;
    color: white;
    background-color: #fb4d3f;
}
image{
    width: 100%;
    height: 100%;
}
</style>
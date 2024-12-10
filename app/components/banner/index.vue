<script setup>

</script>
<template>
    <div class="wrapper">
        <div class="banner mt-4 rounded-lg">
            
        </div>
    </div>
</template>
<style>
.banner{
    width: 100%;
    height: 700px;
    overflow: none;
    background-image: url('../../public/banner.jpeg'); /* Path to your image */
    background-size: cover; /* Ensures the image covers the entire container */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
}
@media  screen and (max-width:1000px) {
    .banner{
        height: 550px;
    }
}
@media screen and (max-width:768px) {
    .banner{
        width: 100%;
        height: 450px;
    }
   
}
@media screen and (max-width:668px) {
    .banner{
        height: 350px;
    }
   
}
@media  screen and (max-width:600px) {
    .banner{
        height: 300px;
    }

}
</style>
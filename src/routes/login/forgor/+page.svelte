<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    export let form
</script>
<img class=" absolute topthing3" src="https://media.discordapp.net/attachments/486917726066180127/1230110026237083648/pixil-frame-0_9.png?ex=6632203c&is=661fab3c&hm=2b0c0a42c879c94560dc3f703802aacc5af98780fd6a0abe09dbcfa1acdbe8e6&=&format=webp&quality=lossless" alt="">
<div class=" bg-surface-300 bg3">
    
    <h1 class=" absolute h1 textthing3">Enter your username here *</h1>
    <form class="absolute inputthing3" action="?/forgor" method="post">
    <input type="text" name="username">
    {#if form?.mypassword} 
    <h1 class="h1 absolute output3">your password is <h1 class="bg-primary-500">{form.mypassword}</h1></h1>
    {/if}
    </form>
</div>





<style>
.topthing3{
    image-rendering: pixelated;
    transform: translate(-50%, -50%);
    width: 27%;
    top: -6%;
    left: 50%;
}
.output3{
    transform: translate(-50%, -50%);
    margin-top: 100px;
    
    top: 150%;
    left: 50%;
    color: white;
}
.textthing3{
    transform: translate(-50%, -50%);
    top: 20%;
    left: 50%;
}
.inputthing3{
    top: 40%;
    transform: translate(-50%, -50%);
    left: 50%;
    color: black;
}
.bg3{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 300px;
    padding-left: 250px;
    padding-right: 250px;
} 
</style>
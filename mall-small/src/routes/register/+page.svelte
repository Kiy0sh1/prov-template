<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    var normal ="https://cdn.discordapp.com/attachments/486917726066180127/1229716401984639006/pixil-frame-0_7.png?ex=6630b1a5&is=661e3ca5&hm=91649f4f24fa69d2d36e23146fdb47c6ff3150a4d33a169fe26ef76202b222a9&"
    let explod = "https://cdn.discordapp.com/attachments/486917726066180127/1229722486451736647/pixil-frame-0_8.png?ex=6630b74f&is=661e424f&hm=6924ef100b3d3296b0ff85fb2b413f49c4ea697d1554e99500fc74c1780cf1b8&"
    let explosion ="https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif"
    var explodeplace = ""
    function wtfboom() {
        normal = explod    
        explodeplace = explosion;
    }

    let pwtext = ""
    
</script>

<!--https://lh4.googleusercontent.com/proxy/mUmcn-ykpZCVdictohSjdKSj4sWTDWHAgzJddrhqTNniWLvWeNPqBz_JT090OflvtxTtbPvg0QlezWCYwgG2LT7Kpd_onAzpW4Pay2O1FnJ57A-->
<div class=" bg-surface-700 bg">
    <button class="absolute nuke" on:click={wtfboom}>💣</button>
    <img class="absolute mow rounded-2xl" src="{normal}" alt="">
    <img class="absolute mow rounded-2xl" src="{explodeplace}" alt="">
    <form action="?/register" method="post">
    <div class=" absolute usernamething">
        <h2 class="">Create a username*</h2>
        <input class="pr-40 pt-2 pb-2 bg-surface-900 pl-2" type="username" name="username" placeholder="Enter a username">
        
    </div>  
    <div class=" absolute passwordthing">
        <h2>Create a password*</h2>
            <input class="pr-40 pt-2 pb-2 bg-surface-900 pl-2" type="password" name="password" placeholder="Enter a password" minlength="6">
        
    </div>
    <div class=" absolute repasswordthing">
        <h2>Confirm password*</h2>

        <input class="pr-40 pt-2 pb-2 bg-surface-900 pl-2" type="password" name="repassword" placeholder="Enter the same password" minlength="6">
        
    </div>
    <button formaction="?/register" class=" absolute btn loginbtn bg-primary-500 pl-20 pr-20">register</button>
</form>

<a href="/login" class="absolute dhaa code hover:bg-surface-500">Already have an account?</a>    
</div>


<style>
    .nuke{
        transform: translate(-50%);
        font-size: 30px;
        top: 2%;
        left: 6%;

    }
    .mow{
        transform: translate(-50%);
        width: 60%;
        top:-50.4%;
        image-rendering: pixelated;
    }
    .fp{
        transform: translate(-50%);
        
        top: 85%;
        left: 70%;
    }
    .dhaa{
        transform: translate(-100%);
        
        top: 85%;
        left: 48.5%;
        
    }
    .loginbtn{
        transform: translate(-50%);
        left: 50%;
        top: 70%;
        
    }
    .logintext{
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        size: 100px;
        
    
    }
    .passwordthing{
        top: 30%;
        left: 50%;
        transform: translate(-50%);
    }
    .repasswordthing{
        top: 50%;
        left: 50%;
        transform: translate(-50%);
    }
    .usernamething{
        top: 10%;
        left: 50%;
        transform: translate(-50%);
    }
    .bg{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 55%;
        left: 50%;
        padding: 230px;
        padding-left: 250px;
        padding-right: 250px;
    }
    </style>
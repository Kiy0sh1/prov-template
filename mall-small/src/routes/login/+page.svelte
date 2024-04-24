<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
    export let form;
</script>

<!--https://lh4.googleusercontent.com/proxy/mUmcn-ykpZCVdictohSjdKSj4sWTDWHAgzJddrhqTNniWLvWeNPqBz_JT090OflvtxTtbPvg0QlezWCYwgG2LT7Kpd_onAzpW4Pay2O1FnJ57A-->
<div class=" bg-surface-700 bg">
    

    <form method="post" action="?/login">
        <div class=" absolute usernamething">
            <h2 class="">Username*</h2>
            <input class="pr-40 pt-2 pb-2 bg-surface-900 pl-2" type="username" name="username" placeholder="Enter your username" required>
        </div>  

        <div class=" absolute passwordthing">
            <h2>Password* </h2>

        
            <input class="pr-40 pt-2 pb-2 bg-surface-900 pl-2" type="password" name="password" placeholder="Enter your password" required minlength="6">
        
        
        
        </div>
        
        <button formaction="?/login" class=" absolute btn loginbtn bg-primary-500 pl-20 pr-20">login</button>
    </form>

    

<a href="/register" class="absolute dhaa code hover:bg-surface-500">Dont't have an account?</a>
<a href="/login/forgor" class="absolute fp code hover:bg-surface-500">Forgot password?</a>    
    
</div>

<style>

.fp{
    transform: translate(-50%);
    
    top: 85%;
    left: 76%;
}
.dhaa{
    transform: translate(-100%);
    
    top: 85%;
    left: 48%;
    
}
.loginbtn{
    transform: translate(-50%);
    left: 50%;
    top: 60%;
    
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
.usernamething{
    top: 10%;
    left: 50%;
    transform: translate(-50%);
}
.bg{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 200px;
    padding-left: 220px;
    padding-right: 220px;
}
</style>
<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<img class="absolute bgimage " src="https://wallpapercave.com/wp/wp10967833.jpg" alt="">
	</div>
</div>



<style>

.bgimage{
	box-sizing: border-box;
	transform: translate(-50%);
	width: 100%;
 
	object-fit: cover;
	
}

.fade{
	
	position: absolute;
	padding-left: 100%;
	padding-top: 90%;
	background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(47,31,37,1) 100%);
	
	
	
}

</style>
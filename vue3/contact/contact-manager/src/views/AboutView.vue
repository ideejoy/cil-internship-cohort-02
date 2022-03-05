<template>
    <div class="ab1">
        <h1 class="">{{head}}</h1>
        <p class="">{{subhead}}       <b>...Version 1.0.0</b></p> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            top:true,
            head:'About Us',
            subhead:'This is an app created to manage contacts. It could be seen and used as a backup for your contacts.',
            
        }
    }
}
</script>
<style>
.ab1{
   width: calc(100% - 27%);
   box-sizing: border-box;
   margin: 4px auto;
    padding: 20px;
}
b{
  margin-left: 3rem;
  color: #6C757D;

}
</style>


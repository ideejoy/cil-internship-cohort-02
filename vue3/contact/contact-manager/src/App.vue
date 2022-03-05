<template>
<div id="body">
<div id="nav">
       <router-link to="/" ><h1 id="brands"> Contact Manager</h1></router-link>
    
  <nav class="nav-bar">
    
    <router-link to="/home" class="bar-links"><i class="fa fa-home" style="font-size:24px"></i>Home</router-link> 
    <router-link to="/add" class="bar-links"><i style="font-size:24px" class="material-icons">person_add</i>Add</router-link> 
    <router-link to="/about" class="bar-links"><i  class='fa' style="font-size:24px">&#xf05a;</i>About</router-link>
  </nav> 
  </div>
  <router-view />

 <footer> <p> © 2020. <b>Idara Atainyang</b></p></footer>
</div>

</template>
<script>
export default {

  data(){
    name:'App'
    return{

    }
   
  },
  methods: {},
  
}
</script>

<style>

body{
margin: 0 auto;
padding: 0;
}

.top-bar{
  display: flex;
  width: 100%;
}
nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #f3f7f5;
  text-decoration: none;
}
#nav{
    display:flex;
    background-color: #343A3F; 
    width:100% ; 
    margin: 0auto;
    justify-content: space-between;  
}
#brands{
   color: #FFFFFF;
   margin-left: 150px;
   font-size: 30px;
   text-decoration: none;
   text-decoration-line: none;
   text-shadow: gray;
}
.nav-bar{
    position: relative;
    margin-right: 200px;
}
.bar-links{
float: left;
margin-right:30px;
text-align: center;
display: flex;
justify-content: space-between;
color: #a1a1a1;
}
i{
    font-size: 20px;
}
footer {
  text-align: center;
  padding: 3px 0 25px;
  height: 20px;
  background-color: #343A3F;
  color: white;
  justify-content: space-between;
  margin: 10px auto;
}
</style>

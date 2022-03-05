<template>
    <div>
        <Suspense>
 <div v-for="user in users.data " :key="user.id" class="user"> 
     <h3>{{user.name}}</h3>
      </div>
        </Suspense>
    </div>
</template> 
 
<script>
import { ref } from "vue"

export default {
    name:"users",
    async setup(){
        const users = ref(null);
       const  userlistResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        users.value = await userlistResponse.json();

        return{users};
    }
  
} 
</script>
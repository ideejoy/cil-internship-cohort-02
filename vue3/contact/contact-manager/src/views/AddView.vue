<template>
  <form @submit.prevent="handleSubmit">
      <div class="hed">
          <p> Add contact </p>
        </div>
    <div>
      <label> Name: </label>
      <input type="name" required placeholder="please enter your name" v-model="name">
      </div>
      <div>
      <label> Email: </label>
      <input type="email" required placeholder="please enter your email" v-model="email"> 
      </div>
      <div>
      <label> Phone Number </label>
      <input type="number" required placeholder="please enter your phone number" v-model="text "> 
      <div v-if="numberError" class="error"> {{ numberError }}</div>
      </div>
        <div class="submit">
      <button> Submit </button>
        </div>
    </form>
</template>
 
<script>
export default {
    data(){
        return{
        name:'',
        email: '',
        number: '',
        numberError:''
        
        }
    },
    methods: {
        handleSubmit() {
                this.numberError = this.number.length > 11 ? alert('form submitted '):
                'incorrect number'
        }
    }

}
</script>

<style>
form{
    border: 1px solid black;
    max-width: 1000px;
    margin: 20px auto;
    height: 500px;
    background-color: #F8F9FA;
}
.hed{
    border-bottom: 2px;
    padding: 2px;
    background-color: #F0F1F2;
    font-weight: bolder;
    font-size: 19px;
}
label{
    display: inline-block;
    font-size: 1em;
    text-transform: capitalize;
    letter-spacing: 1px;
    font: bold;
    margin: 25px 0 15px 20px;
    color: #212529;
}
input{
    display: block;
    padding: 10px 6px;
    width: calc(100% - 5%);
    box-sizing: border-box;
    margin: 10px auto;
    border: 1px solid #CED4D9 ;
    border-radius: 3px;  
}
button{
    margin: 10px auto;
    margin-top: 20px;
    width: calc(100% - 5%);
    height: 40px;
    display: block;
    padding: 10px 6px;
    background-color: #23272B;
    border-radius: 10px;
     color: #f3f5f7;
}
.submit{
  
    text-align: center;
    
}
</style>
<template>
    <div class="topBody" v-if="top">
        <h1 class="head">{{head}}</h1>
        <p class="par">{{subhead}}</p>
        <ul class="list"> 
            <li v-for= "item in item" :key="item"> 
               <p> {{item.book}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            top:true,
            head:'Contact Manager',
            subhead:'This is a portfolio project to showcase knowledge of:',
            item:[
               {book:'React Components and JSX.'},
                {book:'React Router.'},
                {book:'Component state management.'},
                {book:'Context api for global state management.'},
                {book:'Making asynchronous calls to the Json placeholder fake rest api using "async/await".'}
            ]
        }
    }
}
</script>
<style>
.topBody{
    background: #E9ECEF;
    height: 400px;
    width: calc(100% - 30%);
    box-sizing: border-box;
    margin: 40px auto;
    padding: 30px;

}
.head{
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
}
.par{
    font-size: 20px;
    text-align: left;
    color:#212529 ;
}
.list{
    font-size: 1rem;
    color: #212529;
    list-style-type: lower-roman;
}

</style>

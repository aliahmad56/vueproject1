<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="add-restaurant">Add Restaurant</router-link>

    <a class="anchor" v-on:click="Logout">Logout</a>
    
</div>
</template>
<script>


export default{
    name:'HeaderMenu',
      
    methods: {

        Logout()
        {
          localStorage.clear();
          this.$router.push({name:'SignIn'})
        }
    }
}
</script>

<style>

.nav{
   
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    
    font-size: 17px;
    text-decoration:none;
    margin-right: 5px;
    margin-left: 50px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}
.anchor{
color: red
}

</style>
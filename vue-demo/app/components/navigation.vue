<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/texasholdem">Texas Holdem</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>      
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'navigation',
  data(){
      return {
          message: 'Navigation Component'
      }
  }
}
</script>

<style lang="scss" scoped>
nav{
  background-color: #5f5f5f;  
  ul{
    padding:0;
    margin:0;
    li{
      display: inline-block;
      list-style-type: none;   
       
      a{
        display: inline-block;     
        padding: 10px 15px; 
        color: #f1f1f1;
        font-size: 30px;
        text-decoration: none;
        &:focus{          
          background-color: #4CAF50;
          color: #ffffff;
        }
      }
    }
  }
}
</style>




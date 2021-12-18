<template>
  <TestJob/>
</template>

<script>
import TestJob from './components/TestJob'

export default {
  name: 'App',
  components: {
    TestJob
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Source Sans Pro"; 
  src: url("./assets/fonts/SourceSansPro/SourceSansPro-Light.ttf") format("truetype");
} 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f7f6f4;
  font-family: 'Source Sans Pro';
}

h1 {
  font-size: 28px;
}
</style>

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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f7f6f4;
  font-family: 'Source Sans Pro', sans-serif;
}

h1 {
  font-size: 28px;
}

ul {
  margin-left: 0;
  padding-left: 0;
}

li {
  list-style-type: none;
}
</style>

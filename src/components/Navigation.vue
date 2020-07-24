<template>
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
nav {
  margin: 0 auto;
}

nav ul {
  list-style: none;
}

nav li {
  display: inline-block;
  padding-left: 2em;
  font-size: 1.5em;
}
</style>

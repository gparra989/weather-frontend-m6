</script>

<template>
  <main class="d-flex flex-column min-vh-100">
    
    <NavbarComponent />
    
    <div class="flex-grow-1">
      <router-view />
    </div>
    
    <FooterComponent />

  </main>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
}
</style>

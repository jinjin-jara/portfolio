<script setup lang="ts">
</script>
<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex-1 w-full flex flex-col">
      <Navbar />
        <div
          class="relative py-10 flex-1 flex flex-col mx-auto max-w-[900px] w-full h-full lg:px-0 px-5"
        >
          <slot />
        </div>
      </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

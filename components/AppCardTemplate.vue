<script setup>

</script>

<template>
  <div class="basis-1/2 bg-main-bg flex justify-center items-center p-10">
    <slot name="main"/>
  </div>
  <div
      class="basis-1/2 bg-second-bg flex justify-center items-center relative px-[2.375rem] py-[3.625rem]">
    <div class="cyrcle-second"></div>
    <div class="z-10 object-cover object-center">
      <slot name="image"/>
    </div>
    <div class="absolute bottom-[3.625rem] p-[3.125rem] text-center">
      <p class="text-desc-title-color font-bold text-[20px]">
        <slot name="title"/>
      </p>
      <p class="text-desc-text-color font-medium">
        <slot name="description"/>
      </p>
    </div>
  </div>
</template>
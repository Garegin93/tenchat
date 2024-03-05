<template>
  <div class="basis-1/2 bg-main-bg flex justify-center items-center p-10">
    <slot name="main"/>
  </div>
  <div
      class="basis-1/2 bg-second-bg flex justify-center items-center relative px-24 py-36">
    <div class="cyrcle-second"></div>
    <div class="z-10 object-cover object-center">
      <slot name="image"/>
    </div>
    <div class="absolute bottom-14 p-12 text-center">
      <p class="text-desc-title-color font-bold text-lg">
        <slot name="title"/>
      </p>
      <p class="text-desc-text-color font-medium">
        <slot name="description"/>
      </p>
    </div>
  </div>
</template>
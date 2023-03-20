<template>
  <div class="rating rating-sm rating-half">
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-1"
      checked
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-2"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-2"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-2"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-2"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      :name="'rating' + name"
      class="bg-main mask mask-star-2 mask-half-2"
    />
  </div>
</template>

<script>
export default {
  props: ['name'],
};
</script>

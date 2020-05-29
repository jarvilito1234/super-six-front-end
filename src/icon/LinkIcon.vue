<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g class="a">
      <circle class="b" cx="12" cy="12" r="12" />
      <circle class="c" cx="12" cy="12" r="11" />
    </g>
    <g transform="translate(5 8)">
      <g class="a">
        <circle class="b" cx="4" cy="4" r="4" />
        <circle class="c" cx="4" cy="4" r="3" />
      </g>
      <g class="a" transform="translate(6)">
        <circle class="b" cx="4" cy="4" r="4" />
        <circle class="c" cx="4" cy="4" r="3" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>
.a,
.c {
  fill: none;
}
.a {
  stroke: #aabbd0;
  stroke-width: 2px;
}
.b {
  stroke: none;
}
</style>

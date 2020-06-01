<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
  >
    <circle class="a" cx="15" cy="15" r="15" />
    <g transform="translate(6 10)">
      <g class="b">
        <circle class="c" cx="5" cy="5" r="5" />
        <circle class="d" cx="5" cy="5" r="4" />
      </g>
      <g class="b" transform="translate(8)">
        <circle class="c" cx="5" cy="5" r="5" />
        <circle class="d" cx="5" cy="5" r="4" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>
.a {
  fill: #03132e;
}
.b,
.d {
  fill: none;
}
.b {
  stroke: #31fef9;
  stroke-width: 2px;
}
.c {
  stroke: none;
}
</style>

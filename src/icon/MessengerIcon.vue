<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="98"
    height="98"
    viewBox="0 0 98 98"
  >
    <defs>
      <linearGradient
        id="a"
        x1="0.147"
        y1="0.152"
        x2="0.853"
        y2="0.866"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#2d3f59" />
        <stop offset="1" stop-color="#1d2839" />
      </linearGradient>
      <filter
        id="b"
        x="0"
        y="0"
        width="98"
        height="98"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="6" dy="6" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="c" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="c" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(-7 -816)">
      <g class="d" transform="matrix(1, 0, 0, 1, 7, 816)">
        <rect
          class="a"
          width="80"
          height="80"
          rx="40"
          transform="translate(3 3)"
        />
      </g>
      <g class="b" transform="translate(30 810)">
        <g transform="translate(0 32)">
          <g transform="translate(0 0)">
            <path
              class="c"
              d="M14.984,32C6.708,32,0,37.591,0,44.486a11.82,11.82,0,0,0,5.721,9.784L3.746,58.221l5.382-2.3a17.01,17.01,0,0,0,3.634.9,10.456,10.456,0,0,1-.275-2.345c0-6.885,6.72-12.486,14.984-12.486a18.124,18.124,0,0,1,2.225.152C28.376,36.368,22.3,32,14.984,32ZM9.989,41.365a1.873,1.873,0,1,1,1.873-1.873A1.874,1.874,0,0,1,9.989,41.365Zm9.989,0a1.873,1.873,0,1,1,1.873-1.873A1.874,1.874,0,0,1,19.978,41.365Z"
              transform="translate(0 -32)"
            />
          </g>
        </g>
        <g transform="translate(14.984 44.486)">
          <path
            class="c"
            d="M216.973,201.989c0-5.516-5.591-9.989-12.486-9.989S192,196.473,192,201.989s5.591,9.989,12.486,9.989a15.256,15.256,0,0,0,3.259-.387l6.73,2.884-2.327-4.652C215.065,207.995,216.973,205.183,216.973,201.989Zm-16.232-.624a1.873,1.873,0,1,1,1.873-1.873A1.874,1.874,0,0,1,200.74,201.365Zm7.492,0a1.873,1.873,0,1,1,1.873-1.873A1.874,1.874,0,0,1,208.232,201.365Z"
            transform="translate(-192 -192)"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>
.a {
  fill: url(#a);
}
.b {
  opacity: 0.5;
}
.c {
  fill: #ebf5ff;
}
.d {
  filter: url(#b);
}
</style>

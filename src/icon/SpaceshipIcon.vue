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
    <g transform="translate(-7 -906)">
      <g class="d" transform="matrix(1, 0, 0, 1, 7, 906)">
        <rect
          class="a"
          width="80"
          height="80"
          rx="40"
          transform="translate(3 3)"
        />
      </g>
      <g class="b" transform="translate(30 931.5)">
        <path
          class="c"
          d="M30.544,12.671c.185,2.358-.221,5.185-1.8,5.325-2.586.228-1.238-2.574-1.2-4.26a8.3,8.3,0,0,0-8.3-8.282c-1.177,0-3.912.786-3.49-1.657.19-1.076,1.117-1.062,2.045-1.184A10.92,10.92,0,0,1,30.544,12.671Z"
          transform="translate(9.414)"
        />
        <path
          class="c"
          d="M29.02,15.376C31.781,16.86,35.1,17.6,34.549,22c-1.012,8.116-18.222,13.568-28.972,7.6-2.947-1.637-6-4.031-5.529-8.8C.453,16.7,3.262,13.522,6.02,10.813A19.471,19.471,0,0,1,15.2,5.274c4.095-1.011,5.3,2.342,4.2,5.648,2.372-.156,7.4-2.756,9.621-.217.979,1.12.6,3.124,0,4.671ZM26.035,25.8A6.481,6.481,0,0,0,27.8,21.569c-.016-7.237-12.586-8.852-19.462-4.889C.516,21.192,3.82,29.3,13.429,29.932c5.091.336,10.186-1.429,12.606-4.128Z"
          transform="translate(0 2.056)"
        />
        <path
          class="c"
          d="M22.72,13.548c-1.752.115-1.1-1.18-1.2-2.721A3.236,3.236,0,0,0,19.952,8.46c-1.368-.631-3.488.459-3.488-1.419,0-1.4,1.23-1.25,1.926-1.3C24.766,5.262,25.161,13.388,22.72,13.548Z"
          transform="translate(10.02 2.024)"
        />
        <path
          class="c"
          d="M18.865,16.412C21.428,24.03,8.074,27.573,5.631,21.026,4,16.648,7.921,13.165,12.007,12.744,15.5,12.383,18.1,14.134,18.865,16.412Zm-6.137,1.3a.907.907,0,0,0,1.684-.473C14.281,16.392,12.717,16.517,12.728,17.714Zm-2.165,4.023c2.245-.525,2.547-4.685-.843-3.9C6.874,18.485,7.424,22.47,10.563,21.736Z"
          transform="translate(3.182 5.68)"
        />
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

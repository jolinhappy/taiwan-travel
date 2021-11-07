<template>
  <div class="base-layout">
    <header>
      <slot name="header" />
    </header>
    <body>
      <slot name="body" />
    </body>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss">
.base-layout {
  display: flex;
  flex-direction: column;
  body {
    flex: 1;
    min-height: 100vh;
    padding-top: 80px;
  }
  footer {
    height: 148px;
    width: 100%;
    background-color: #08A6BB;
  }
}

@media screen and (min-width: 768px) {
  .base-layout {
    body {
      padding-top: 0;
    } 
  }

}
</style>
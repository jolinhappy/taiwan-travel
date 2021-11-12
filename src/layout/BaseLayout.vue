<template>
  <div class="base-layout">
    <header>
      <slot name="header" />
    </header>
    <body>
      <slot name="body" />
    </body>
    <footer>
      <slot name="footer">
        <div class="footer-container">
          <p>CopyRight &copy; Travel Taiwan</p>
          <p>Design By: Tracy , frontend: 文科少女</p>
        </div>
      </slot>
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
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    .footer-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 19px;
    }
  }
}

@media screen and (min-width: 768px) {
  .base-layout {
    body {
      padding-top: 0;
    }
    footer {
      height: 120px;
      .footer-container {
        height: auto;
        width: auto;
        display: block;
        margin: auto auto;
        text-align: center;
        line-height: 120px;
        p {
          display: inline-block;
          text-align: center;
          & + p {
            margin-left: 15px;
          }
        }
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        // line-height: 19px;
      }
    }
  }

}
</style>
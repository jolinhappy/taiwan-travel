<template>
  <nav class="navigation">
    <div class="main-title-container">
      <img src="../../assets/logo.png" alt="logo-image">
      <h1>Travel Taiwan</h1>
    </div>
    <ul class="nav-items">
      <li class="nav-item">首頁</li>
      <li class="nav-item">景點導覽</li>
      <li class="nav-item">觀光活動</li>
    </ul>
  </nav>
</template>

<style lang="scss">
nav {
  height: 80px;
  background-color: #ffffff;
  position: relative;
  .main-title-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    box-shadow: 0px 2px 11px rgba(111, 119, 137, 0.25);
    img {
      width: 40px;
      margin-right: 6px;
    }
    h1 {
      font-size: 20px;
      font-weight: 900;
      color: #08A6BB;
      font-style: italic;
    }
  }
  .nav-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: #ffffff;
    .nav-item:hover {
      color: #08A6BB;
      cursor: pointer;
      font-weight: bold;
    }
  }
}

@media screen and (min-width: 768px) {
  nav {
    &.navigation {
      display: flex;
      padding: 29px 94px 28px 76px;
      box-sizing: border-box;
    }
    justify-content: space-between;
    box-shadow: 0px 2px 11px rgba(111, 119, 137, 0.25);
    .main-title-container {
      display: flex;
      box-shadow: unset;
    }
    .nav-items {
      all: unset;
      padding-right: 30px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      .nav-item {
        font-weight: 500;
        font-size: 20px;
        &:nth-child(even) {
          margin: 0 57px;
        }
      }
    }
  
  }
}
</style>

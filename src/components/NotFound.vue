<template>
    <div class="not-found-container">
      <div class="not-found-animation">
        <h1>404</h1>
        <h2>页面未找到</h2>
      </div>
    </div>
  </template>
  
  <style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f8f8;
  }
  
  .not-found-animation {
    text-align: center;
  }
  
  .not-found-animation h1 {
    font-size: 100px;
    /* color: #333; */color: #6cb5ff;
    margin: 0;
    animation: lightSpeedIn 2s ease-in-out infinite;
  }
  
  .not-found-animation h2 {
    font-size: 30px;
    /* color: #666; */
    color: #409EFF;
    margin: 0;
    animation: lightSpeedIn 2s ease-in-out infinite;
  }
  
  @keyframes lightSpeedIn {
    0% {
      transform: translateX(-100%) skewX(30deg);
      opacity: 0;
    }
    60% {
      transform: translateX(20%) skewX(-10deg);
      opacity: 1;
    }
    80% {
      transform: translateX(-5%) skewX(5deg);
      opacity: 1;
    }
    100% {
      transform: translateX(0%) skewX(0deg);
      opacity: 1;
    }
  }
  </style>
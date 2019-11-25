<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  }
};
</script>

<style lang="scss">
@import './scss/color.scss';

html, body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Tahoma', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*{
  box-sizing: border-box;
}

// .tippy-popper {
//   border: none;
//   border-radius: 0;
//   .tippy-tooltip {
//     padding: 0;
//     border-radius: 0;
//     background-image: linear-gradient(180deg,rgba(19, 28, 43, 0.85) 0%,rgba(12, 15, 23, 0.85) 100%);
//   }
// }

.dropdown, .el-select-dropdown {
  background-color: #1a1a1a !important;
  box-shadow: 0px 3px 8px 0px 
    rgba(0, 0, 0, 0.4) !important;
  border-radius: 2px;
  border: solid 1px #333333 !important;
  .el-select-dropdown__item.hover {
    color: rgba(255, 255, 255, 0.8);  
  }
  .el-select-dropdown__item.hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1) !important;    
  }
  // .el-select-dropdown__item.selected {
  //   background-color: rgba(255, 255, 255, 0.1) !important;    
  // }
  .popper__arrow {
    display: none !important;
  }
}


/* width */
// ::-webkit-scrollbar {
//     width: 0.625rem;
//     height: 0.625rem;
//   }

/*
::-webkit-scrollbar-track {
    background-color: #dae8ed; 
    border: solid 0.0625rem #f4f4f4;
    border-radius: 0.3125rem;
    box-shadow: inset 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-thumb {
    background-color: rgba(17, 52, 65, 0.1);
    border-radius: 0.3125rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgba(17, 52, 65, 0.3);    
}

::-webkit-scrollbar-corner {
  background: #e6ecee;
}
*/
</style>

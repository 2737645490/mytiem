import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server:{
    hmr:true,
    port:3001,
    proxy:{
      'api':{
      // loadEnv(mode,process.cwd()).VITE_API_PROV_TAGET,
      target:'http://localhost:8001/',//目标代理接口地址
      secure:false,
      changeOrigin:true,//开始代理，在本地创建虚拟服务器
      pathRewrite:{
        '^/api':'api',
      }
    }
    }
  },
  resolve:{
    //配置路径别名
    alias:{
      '@':path.relative(__dirname,'./src')

      // 用@可以直接指向到src
    }
  }
})

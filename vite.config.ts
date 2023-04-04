import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    css:{
        preprocessorOptions:{
            scss:{
                // additionalData:`@use "@/styles" as common`,
                importer(...args){
                    if (args[0] !== "@/styles"){
                        return;
                    }
                    return {
                        file: `${path.resolve(__dirname, "./src/components/styles")}`
                    }
                }
            }
        }
    }
})

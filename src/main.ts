import type { Ctx, UserModule } from './types'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   {
//     routes: setupLayouts(routes),
//     base: import.meta.env.BASE_URL,
//   },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i => i.install?.(ctx))
//     // ctx.app.use(Previewer)
//   },
// )
const app = createApp(App).use(router)

// modules 模块注册
function registerModules(app: Ctx) {
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true })).forEach(i => i.install?.({ app, router }))
}

registerModules(app)
app.mount('#app')

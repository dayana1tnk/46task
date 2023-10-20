
import { createApp } from 'vue'
import App from './App.vue'

// импорт компонентов
// import components from '@/components'
// console.log(components[0].name)

//импорт директив
import directives from '@/directives'

// создаем приложениe
const app = createApp(App)

// регистрация директив
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

// глобальная регистрация компонентов
// components.forEach(component => {
//     app.component(component.name, component)
// })

app.mount('#app')

// createApp(App).mount('#app')

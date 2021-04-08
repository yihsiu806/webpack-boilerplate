import template from './template.html'
import './style.scss'
// import './style.css'
// import Icon from './icon.svg'

let root = document.createElement('div')
root.classList.add('container')
document.body.append(root)

root.insertAdjacentHTML('beforeend', template)

// const icon = new Image()
// icon.src = Icon
// root.append(icon)




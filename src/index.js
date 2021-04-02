import './style.css'
import Icon from './icon.svg'

let root = document.createElement('div')
root.classList.add('container')
document.body.append(root)

root.insertAdjacentHTML('beforeend', '<header>Webpack Boilerplate</header>')
root.insertAdjacentHTML('beforeend', `
  <main>
    <section class="card">
      <h2 class="card-header-title">import image via webpack</h2>
    </section>
    <section class="card">
      <h2 class="card-header-title">import image via webpack</h2>
      <div id="icon" class="content"></div>
    </section>
    <section class="card">
      <h2 class="card-header-title">import font via webpack</h2>
      <div class="english-font">English font</div>
    </section>
    <section class="card">
      <h2 class="card-header-title">import chinese font via webpack</h2>
    </section>
  </main>
`)

const icon = new Image()
icon.src = Icon
root.querySelector('#icon').append(icon)


    
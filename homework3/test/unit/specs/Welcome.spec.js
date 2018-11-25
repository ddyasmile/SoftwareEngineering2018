import Vue from 'vue'
import Welcome from '@/components/Welcome'

describe('Welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.Welcome h1').textContent)
      .to.equal('Welcome to ddyasmile\'s Vue.js App')
  })
})

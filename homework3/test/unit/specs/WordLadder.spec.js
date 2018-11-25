import Vue from 'vue'
import WordLadder from '@/components/WordLadder'

describe('WordLadder.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(WordLadder)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.WordLadder h1').textContent)
      .to.equal('This App will give a word ladder of given two words. But now, there is nothing.')
    expect(vm.$el.querySelector('.WordLadder h2').textContent)
      .to.equal('If Start is \'code\' and End is \'data\',you will get \'code->cade->cate->date->data\'.')
    expect(vm.$el.querySelector('.WordLadder h3').textContent)
      .to.equal('Output: code->cade->cate->date->data')
    expect(vm.$el.querySelector('.WordLadder form').textContent)
      .to.equal('\n    Start: \n    End:   Come on')
  })
})

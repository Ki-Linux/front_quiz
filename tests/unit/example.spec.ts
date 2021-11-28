import { mount, shallowMount } from "@vue/test-utils";
/*import HelloWorld from "@/components/HelloWorld.vue";
import form from "@/views/form.vue";*/
/*import MainData from '@/components/MainData.vue';
import App from '@/components/App.vue';*/

/*describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('form', () => {
  it("form", () => {
    const wrapper = mount(form);
    wrapper.setData({
      emerge: ""
    })
    const emerge = wrapper.find('p');
    expect(emerge.exists()).toBe("")
  })
})*/

/*describe('MainData', () => {
  it.only("MainData", () => {
    const wrapper = mount(MainData);
    wrapper.get('button').trigger('click')
    expect(wrapper.text()).toMatch('1')
  })
})*/

//add.vue
import add from '@/views/add.vue';

describe('can show"setup can"', () => {
  it('setup can', () => {
    const wrapper = shallowMount(add);
    wrapper.get('.setup button').trigger('click')
    console.log('success on click event (setup)')
  })
}) 

it('showNothing = ""', () => {
  const wrapper = shallowMount(add);
  const nothing = wrapper.get('.setup p')
  expect(nothing.text()).toBe('');
})




/*test.only("test App Component", function() {
  const wrapper = mount(App);
  
  expect(wrapper.text()).toBe('Hello World');
  expect(wrapper.text()).toMatch('World');
  console.log(wrapper.vm);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});*/



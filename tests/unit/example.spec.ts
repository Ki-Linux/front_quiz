import { createWrapper, mount, shallowMount } from "@vue/test-utils";
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
import myEdit from '@/components/myEdit.vue';

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



//htmlなし
it('false to true by click', () => {
  const wrapper = shallowMount(add, {
    data() {
      return {
        Written: false
      }
    }
  });
  wrapper.get('.setup button').trigger('click')
  expect(wrapper.exists()).toBe(true)
})


//myEdit.vue
describe('myedit.vue', () => {
  const wrapper = shallowMount(myEdit);
  it("name myEdit", () => {

    wrapper.get('.user input').trigger('input')
    console.log(wrapper.emitted('to-parent'))
  })

  it("password myEdit", () => {
    wrapper.get('.password input').trigger('input')
    console.log(wrapper.emitted('to-parent'))
  })
  
})



//login.vue
import login from '@/views/login.vue';

it('click goLogin', () => {
  const wrapper = shallowMount(login);
  wrapper.get('.setLogin button').trigger('click');
  console.log('goLogin');
})

//extraHome.vue
import extraHome from '@/views/extraHome.vue';

it('button click', () => {
  const wrapper = shallowMount(extraHome, {
    data() {
      return {
        Written: "test on extraHome button"
      }
    }
  });
  wrapper.get('.buttonAndAverage button').trigger('click');
  console.log(wrapper);
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



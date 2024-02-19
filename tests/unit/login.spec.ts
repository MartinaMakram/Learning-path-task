import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';
import LoginForm from '~/pages/auth/LogIn.vue'

describe('LoginForm', () => {
  test('validateEmail correctly validates a valid email', async () => {
    const wrapper = mount(LoginForm)
    const component = wrapper.vm as any
    component.emailInput = 'test@example.com'

    component.validateEmail()
    expect(component.emailError).toBe('')
  })

  test('validateEmail correctly detects an invalid email', async () => {
    const wrapper = mount(LoginForm)
    const component = wrapper.vm as any;
    component.emailInput = 'invalidemail'
    component.validateEmail()
    expect(component.emailError).toBe('Please enter a valid email.')
  })
})
// TO Run the test use : vitest tests/unit/login.spec.ts 

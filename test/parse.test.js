import moment from 'moment'
import dayjs from '../src'

test('Now', () => {
  expect(dayjs().unix()).toBe(moment().unix())
})

test('String 20130208', () => {
  expect(dayjs('20130208').unix()).toBe(moment('20130208').unix())
})

test('String Other', () => {
  global.console.warn = jest.genMockFunction()// moment.js otherString will throw warn
  expect(dayjs('otherString').toString().toLowerCase()).toBe(moment('otherString').toString().toLowerCase())
})
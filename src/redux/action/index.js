/*
 * 定义action 类型
 */

export const TESTACTION = 'TESTACTION'

/*
 * action 创建函数
 */

export function testAction(text) {
  return { type: TESTACTION, text }
}
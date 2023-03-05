import {forEach} from "./forEach";
import {jest} from '@jest/globals'

//mock 콜백 함수를 정의함.
const mockCallback = jest.fn(x => 10 + x);

//mock.calls 와 mock.results을 이해해야 됨.
test('forEach mock function', () => {

    forEach([5, 1, 2], mockCallback);

    // The mock function was called 3번
    expect(mockCallback.mock.calls).toHaveLength(3);

    // The first argument of the first call to the function was 0
    // 첫번째 콜의 Arguments는 5
    expect(mockCallback.mock.calls[0][0]).toBe(5);
    //
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    //
    // The return value of the first call to the function was 15
    expect(mockCallback.mock.results[0].value).toBe(15);
    //
    // The return value of the second call to the function was 11
    expect(mockCallback.mock.results[1].value).toBe(11);


    expect(mockCallback.mock.results[2].value).toBe(12);
});


const myMock = jest.fn();
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

describe('parameterized test', () => {
    test('parameterized test', () => {
        expect(myMock()).toBe(10);
        expect(myMock()).toBe('x');
        expect(myMock()).toBeTruthy();
    })
})

//jest.fn()은 비동기 함수 테스트도 지원합니다
const asyncFunction = jest.fn();
asyncFunction.mockResolvedValue(1);    //promise에 배웠던 Resolve와 Error를 기억해야함.
describe('async function test', () => {
    test('async function test', async () => {
        expect(await asyncFunction()).toBe(1);
    })
})

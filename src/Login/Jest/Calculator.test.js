import {add,sub} from './Calculator';

test('adds two numbers',()=>{
    expect(add(1,5)).toBe(6);
    expect(add(2,8)).toBe(10);
});

test('subtracts two numbers',()=>{
    expect(sub(2,0)).toBe(2);
    expect(sub(5,1)).toBe(4);
});

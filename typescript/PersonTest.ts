///<reference path='./typings/main.d.ts'/>

import {version} from './Person'

describe('Person test', () => {
    it('version test', () => {
        expect(version).toBe('1.0.0');
    });
});
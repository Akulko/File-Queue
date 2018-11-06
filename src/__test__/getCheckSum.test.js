import {getCheckSum} from '../helpers/getCheckSum'
import fs from 'fs'
import path from 'path'

const file = fs.readFileSync(path.resolve(__dirname, './100MB.bin'));

test('Encrypts file with SHA256 and returns the SHA256 checksum', () => {
  return getCheckSum(new File([file], 'filename', {type: "application/octet-stream"}), () => {})
    .then(res => {
      expect(res).toBe('20492a4d0d84f8beb1767f6616229f85d44c2827b64bdbfb260ee12fa1109e0e')
    })
})

test('Receives progress in callback', () => {
  return new Promise((resolve) => {
    let isCalled = false;
    let value = 0;

    getCheckSum(new File([file], 'filename', {type: "application/octet-stream"}), (progress) => { 
      if(!isCalled) isCalled = true
      expect(progress).toBeGreaterThan(value)
      value = progress
    }).then(() => {
        expect(isCalled).toBeTruthy();
        resolve();
      }
    )
  })
})
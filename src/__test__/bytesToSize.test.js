import {bytesToSize} from '../helpers/bytesToSize'

test('Converts bytes to bytes', () => {
  expect(bytesToSize(1000)).toBe("1000 Bytes");
  expect(bytesToSize(1600)).toBe("2 KB");
  expect(bytesToSize(1555600)).toBe("1 MB");
  expect(bytesToSize(15553600)).toBe("15 MB");
  expect(bytesToSize(1522553600)).toBe("1 GB");
})

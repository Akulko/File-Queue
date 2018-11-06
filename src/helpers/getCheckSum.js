import CryptoJS from 'crypto-js';

export const getCheckSum = (file, setOuterProgress) => {
  const chunkSize = 4 * 1024 * 1024;

  return new Promise((resolve, reject) => {
    const fileSize = file.size;
    let offset = 0;
    const sha256 = CryptoJS.algo.SHA256.create();
    const reader = new FileReader();
    const readNext = () => {
      const fileSlice = file.slice(offset, offset + chunkSize);
      reader.readAsBinaryString(fileSlice);
    };
    reader.onerror = err => {
      return err;
    };
    reader.onload = () => {
      try {
        if (reader.error) {
          throw reader.error;
        }
        offset += reader.result.length;
        sha256.update(CryptoJS.enc.Latin1.parse(reader.result));
        if(setOuterProgress){
          const progress = +(offset / fileSize * 100).toFixed(0);
          setOuterProgress(progress)
        }

        if (offset >= fileSize) {
          const hash = sha256.finalize();
          const hashHex = hash.toString(CryptoJS.enc.Hex);
          return resolve(hashHex);
        }

        readNext();
      } catch (err) {
        return reject(err);
      }
    };

    readNext();
  });
}
import { Transform, pipeline } from "stream";

const transform = async () => {
  class myTransform extends Transform {
    constructor(opt = {}) {
      super(opt);
    }

    _transform(chunk, encoding, callback) {
      const str = chunk.toString().trim();
      const reversedString = str.split(``).reverse().join(``);
      callback(null, `${reversedString}\n`);
    }
  }

  const customTransform = new myTransform();

  pipeline(process.stdin, customTransform, process.stdout, (err) => {
    console.log(err);
  });
};

await transform();

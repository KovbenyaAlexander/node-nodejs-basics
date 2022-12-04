const parseArgs = () => {
  const args = process.argv;
  const result = [];

  for (let i = 2; i < process.argv.length; i += 2) {
    const str = `${args[i].slice(2)} is ${args[i + 1]}`;
    result.push(str);
  }

  console.log(result.join(`, `));
};

parseArgs();

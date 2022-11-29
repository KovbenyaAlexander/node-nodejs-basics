const parseEnv = () => {
  const result = [];

  for (let item in process.env) {
    if (item.startsWith(`RSS_`)) {
      const str = `${item}=${process.env[item]}`;
      result.push(str);
    }
  }

  console.log(result.join(`; `));
};

parseEnv();

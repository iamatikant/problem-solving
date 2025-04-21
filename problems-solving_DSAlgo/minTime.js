// NOSONAR
const minTime = (files, numCores, limit) => {
  //   let timeTaken = 0;
  if (numCores === 1) {
    return files.reduce((acc, ini) => acc + ini, 0);
  } else return files;
};

const files = [4, 1, 3, 2, 8];
const numCores = 4;
const limit = 1;

console.log(minTime(files, numCores, limit));

// First attempt

// const pipe =
//   (...args) =>
//   (val) => {
//     // const argsLength = args.length;
//     let result = val;
//     args.forEach((element) => {
//       result = element(result);
//     });
//     return result;
//   };

const pipe =
  (...args) =>
  (val) => {
    return args.reduce((prev, curr) => {
      return curr(prev);
    }, val);
  };

// Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const result = pipe(getSalary, addBonus, deductTax)(val);

console.log(result);

// Output:
// 7700

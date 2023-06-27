export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const departmentName = departments[currentDepartmentIndex];
        const employees = report.allEmployees[departmentName];
        const employee = employees[currentEmployeeIndex];

        if (currentEmployeeIndex < employees.length - 1) {
          currentEmployeeIndex += 1;
        } else {
          currentDepartmentIndex += 1;
          currentEmployeeIndex = 0;
        }

        return { value: employee, done: false };
      }

      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value,){
return{...employee,[key]: value}}
let employee = { name: "John",}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee }
    employee.name = 'John'
    let newEmployee = deleteFromEmployeeByKey(employee, "Pedro")
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
   function destructivelyDeleteFromEmployeeByKey(employee, key){ 
delete employee[key]
return employee 
}

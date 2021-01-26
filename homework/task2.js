let employeeSalaries = {
		director: 23000,
		secretary: 7000,
		accountant: 10000,
		programmer: 15000,
		nightWatchman: 5000
};

let salaryFund = 0;
for (let salary in employeeSalaries) {
	salaryFund += employeeSalaries[salary];
}

console.log("The wage fund amounted to " + salaryFund);
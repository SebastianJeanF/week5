class HotDog {
	constructor(condition, temperature, length, condiments, bread, meat) {
		this.condition = condition;
		this.temperature = temperature;
		this.length = length;
		this.condiments = condiments;
		this.bread = bread;
		this.meat = meat;
	}
	timeTillCool = () => {
		if (this.temperature <= 55) {
			return "Hotdog is already cold";
		}
		let time = parseInt(this.temperature) - 50;
		return "It will take " + time + " minutes before your hotdog gets cold!";
	};
	timeTillConsumption = () => {
		let time = parseInt(this.length) * 0.5;
		return "It will take " + time + " minutes for you to finish your hotdog!";
	};
}

const updateFunction = () => {
	const form = document.myForm;
	const userHotDog = new HotDog(
		form.Condition.value,
		form.Temperature.value,
		form.Length.value,
		form.Condiments.value,
		form.Bread.value,
		form.Meat.value
	);
	document.getElementById("condition").innerHTML = userHotDog.condition;
	document.getElementById("temperature").innerHTML = userHotDog.temperature;
	document.getElementById("length").innerHTML = userHotDog.length;
	document.getElementById("condiments").innerHTML = userHotDog.condiments;
	document.getElementById("bread").innerHTML = userHotDog.bread;
	document.getElementById("meat").innerHTML = userHotDog.meat;
	document.getElementById("coolingTime").innerHTML = userHotDog.timeTillCool();
	document.getElementById("eatingTime").innerHTML =
		userHotDog.timeTillConsumption();
	document.querySelector(".wrapper").style.display = "flex";
};

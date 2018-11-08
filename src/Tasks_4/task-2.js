(() => {
  class Task {
    constructor(name, description, dateStart, dateEnd) {
      this.name = name;
      this.desc = description;
      this.start = dateStart ? dateStart.toDateString() : "не задано";
      this.end = dateEnd ? dateEnd.toDateString() : "не задано";
    }
    taskDesc() {
      return `Ваша задача - ${this.name}\nОписание задачи:\n${this.desc}.\nНачало: ${this.start}, окончание: ${this.end}\n`
    }
  }
  
  class ExecutableTask extends Task {
    constructor(name, desc, start, end, donePercent){
      super(name, desc, start, end);
      this.donePercent = donePercent;
      this.isDoneFlag = donePercent === 100;
    }
    taskDesc() {
      const isDone = this.isDoneFlag ? 'Задача завершена' : 'Задача в процессе';
      return super.taskDesc() + `Процент выполнения: ${this.donePercent}%\n${isDone}`;
    }
  }

  let Prime = new ExecutableTask("Выпускной", "Окунитесь в атмосферу праздника", null, null, 87);
  let Halloween = new ExecutableTask("Хэллоуин пати", "Очень страшная вечеринка", new Date(2018, 9, 31), new Date(2018, 10, 1), 100);

  alert(Prime.taskDesc());
  alert(Halloween.taskDesc());
})();

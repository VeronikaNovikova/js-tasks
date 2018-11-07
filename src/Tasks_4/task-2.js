// Задача имеет название, описание, дату начала и дату окончания.
// Любая задача может иметь набор дочерних подзадач.
// Создайте класс для представления задачи.
// Выполняемая задача – наследник задачи с дополнительными свойствами:
//    - процент выполнения (число);
//    - флаг задача завершена.
// Реализуйте данное наследование.

(() => {
  class Task {
    constructor(name, description, dateStart, dateEnd) {
      this.name = name;
      this.desc = description;
      this.start = dateStart.toDateString() || "Не задано";
      this.end = dateEnd.toDateString() || "Не задано";
    }
    taskDescr() {
      return `Ваша задача - ${this.name}, описание задачи:\n${this.desc}.\nНачало: ${this.start}, окончание: ${this.end}\n`
    }
  }
  
  class ExecutableTask extends Task {
    constructor(name, desc, start, end, donePercent, isDone){
      super(name, desc, start, end);
      this.donePercent = donePercent;
      this.isDoneFlag = isDone;
    }
    taskDescr() {
      const isDone = this.isDoneFlag ? 'Задача завершена' : 'Задача в процессе'
      return super.taskDescr() + `Процент выполнения: ${this.donePercent}%\n${isDone}`
    }
  }

  let Prime = new ExecutableTask("Выпускной", "Заказать напитки и шары", null, null, 87, false);
  let Hallowen = new ExecutableTask("Хэллоуин пати", "Очень страшная вечеринка", new Date(2018, 9, 31), new Date(2018, 10, 01), 87, false);

  alert(Hallowen.taskDescr())
})();

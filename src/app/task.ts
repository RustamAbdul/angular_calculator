export class Task {
  value: string
  done: boolean

  constructor(value: string) {
    this.value = value
    this.done = false
  }

  public doTask(): void{
    this.done = !this.done
  }
}

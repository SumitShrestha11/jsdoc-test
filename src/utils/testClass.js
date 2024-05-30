export class TestClass {
  /**
   * @private
   */
  id = null;
  constructor() {
    this.id = 1;
  }

  printId() {
    return this.id;
  }
}

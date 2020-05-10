//Null conditional solution attributed to https://stackoverflow.com/a/31611589
const isFunction = (func) => typeof (func) === 'function';

const valueSymbol = Symbol('value');

class NullConditional {
  constructor(value) {
    this[valueSymbol] = value;
  }

  hasValue() {
    const value = this[valueSymbol];

    return value !== null && value !== undefined && !Number.isNaN(value);
  }

  value() {
    return this[valueSymbol];
  }

  valueOrNull() {
    return this.hasValue() ? this[valueSymbol] : null;
  }

  valueOrFalse() {
    return this.hasValue() ? this[valueSymbol] : false;
  }

  valueOrZero() {
    return this.hasValue() ? this[valueSymbol] : 0;
  }

  valueOrBlank() {
    return this.hasValue() ? this[valueSymbol] : '';
  }

  valueOrEmptyArray() {
    return this.hasValue() ? this[valueSymbol] : [];
  }

  valueAsYesOrNo() {
    return (this.hasValue() && this[valueSymbol] !== false) ? 'Yes' : 'No';
  }


  property(selector) {
    if (!isFunction(selector)) throw new Error('Argument is not a function');

    const value = this[valueSymbol];

    return this.hasValue() ? new NullConditional(selector(value)) : this;
  }
}

export default NullConditional;
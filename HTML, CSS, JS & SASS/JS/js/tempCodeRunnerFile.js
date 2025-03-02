var TimeLimitedCache = function () {
  this.myObject = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.myObject.hasOwnProperty(key) === true) {
    this.myObject[key].value = value;
    this.myObject[key].duration = duration;
    clearTimeout(this.myObject[key].timeoutId);
    this.myObject[key].timeoutId = setTimeout(() => {
      delete this.myObject[key];
    }, duration);

    return true;
  } else {
    this.myObject[key] = {
      value: value,
      duration: duration,
      timeoutId: setTimeout(() => {
        delete this.myObject[key];
      }, duration),
    };

    return false;
  }
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.myObject.hasOwnProperty(key)) {
    return this.myObject[key].value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  let count = 0;
  Object.keys(this.myObject).forEach((key) => count++);
  return count;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.myObject);
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1

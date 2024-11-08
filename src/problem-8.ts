{
    //problem-8
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
      return keys.reduce((allKeysExist, key) => allKeysExist && key in obj, true);
    }
      const person = { name: "Alice", age: 25, email: "alice@example.com" };
    //   console.log(validateKeys(person, ["name", "age"]));
  
    //
  }
  
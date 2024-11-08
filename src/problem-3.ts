{
    //problem-3
    const countWordOccurrences = (sentence: string, word: string): number => {
      const words = sentence.toLowerCase().split(" ");
      const myWord = word.toLowerCase();
      return words.reduce(
        (count, wrd) => (wrd === myWord ? count + 1 : count),
        0
      );
    };
    // console.log(
    //   countWordOccurrences(
    //     "I love typescript but Typescript is dangerous no problem because typescript my idol",
    //     "typescript"
    //   )
    // );
    //
  }
  
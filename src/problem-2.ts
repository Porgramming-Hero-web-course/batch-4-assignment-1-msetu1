{
  //problem-2
  const removeDuplicates = (numbers: number[]): number[] => {
    const uniqueNum: number[] = [];
    numbers.forEach((number:number) => {
      if (!uniqueNum.includes(number)) {
        uniqueNum.push(number);
      }
    });
    return uniqueNum;
  };
  
  // const newArray = [1, 2, 2, 3, 4, 4, 5];
  // console.log(removeDuplicates(newArray)); 
  //
}

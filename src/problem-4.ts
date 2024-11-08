{
    //problem-4
    type Circle = {
      shape: "circle";
      radius: number;
    };
  
    type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number;
    };
  
    type Shape = Circle | Rectangle;
  
    function calculateShapeArea(shape: Shape): number {
      let area: number;
  
      if (shape.shape === "circle") {
        area = Math.PI * shape.radius ** 2;
      } else if (shape.shape === "rectangle") {
        area = shape.width * shape.height;
      } else {
        return 0;
      }
  
      // convert toFixed
      return parseFloat(area.toFixed(2));
    }
  
    // Sample usage
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea);
  
    // const rectangleArea = calculateShapeArea({
    //   shape: "rectangle",
    //   width: 4,
    //   height: 6,
    // });
    // console.log(rectangleArea);
  
    //
  }
  
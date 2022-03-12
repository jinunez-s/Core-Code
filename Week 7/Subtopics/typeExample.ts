type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

  //You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
  type ID = number | string;
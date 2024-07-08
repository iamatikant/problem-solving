function testCall(){
  x = () => {
      console.log("X");
      return this;
  },
  y = function() {
      console.log("Y");
      return this;
  },
  z = function() {
      console.log("Z");
      return this;
  }
  return this;
}

// testCall().x().y().z();
testCall().x()

testCall().x().y().z();
// testCall.x();
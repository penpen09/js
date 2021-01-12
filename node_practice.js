function Main(input) {
  input = input.split(" ");
  tmp = input[0] * input[1]
  if(tmp % 2 === 0){
    console.log('Even');
  }else {
    console.log('Odd');
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

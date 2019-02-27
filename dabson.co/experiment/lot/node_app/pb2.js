// SIX BE FORWARD

N = 35; // 45 
K = 7;  // 6
P = 2;  // 3

NcK = 6724520; // 8145060;
NcP = 595;     // 14190;

//const threePee = [[0,1,2],[0,1,3],[0,1,4],[0,1,5],[0,2,3],[0,2,4],[0,2,5],[0,3,4],[0,3,5],[0,4,5],[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]];
//let tiks = [[0,1,2,3,4,5],[0,1,6,7,8,9],[0,1,10,11,12,13],[0,1,14,15,16,17],[0,1,18,19,20,21],[0,1,22,23,24,25],[0,1,26,27,28,29],[0,1,30,31,32,33],[0,1,34,35,36,37],[0,1,38,39,40,41],[0,2,6,10,14,18],[0,2,7,11,15,19],[0,2,8,12,16,20],[0,2,9,13,17,21],[0,2,22,26,30,34],[0,2,23,27,31,35],[0,2,24,28,32,36],[0,2,25,29,33,37],[0,2,38,42,43,44],[0,3,6,11,16,21],[0,3,7,10,17,20],[0,3,8,13,14,19],[0,3,9,12,15,18],[0,3,22,27,32,37],[0,3,23,26,33,36],[0,3,24,29,30,35],[0,3,25,28,31,34],[0,4,6,12,17,19],[0,4,7,13,16,18],[0,4,8,10,15,21],[0,4,9,11,14,20],[0,4,22,28,33,35],[0,4,23,29,32,34],[0,4,24,26,31,37],[0,4,25,27,30,36],[0,5,6,13,15,20],[0,5,7,12,14,21],[0,5,8,11,17,18],[0,5,9,10,16,19],[0,5,22,29,31,36],[0,5,23,28,30,37],[0,5,24,27,33,34],[0,5,25,26,32,35],[1,2,6,11,17,20],[1,2,7,10,16,21],[1,2,8,13,15,18],[1,2,9,12,14,19],[1,2,22,27,33,36],[1,2,23,26,32,37],[1,2,24,29,31,34],[1,2,25,28,30,35],[1,3,6,10,15,19],[1,3,7,11,14,18],[1,3,8,12,17,21],[1,3,9,13,16,20],[1,3,22,26,31,35],[1,3,23,27,30,34],[1,3,24,28,33,37],[1,3,25,29,32,36],[1,4,6,13,14,21],[1,4,7,12,15,20],[1,4,8,11,16,19],[1,4,9,10,17,18],[1,4,22,29,30,37],[1,4,23,28,31,36],[1,4,24,27,32,35],[1,4,25,26,33,34],[1,5,6,12,16,18],[1,5,7,13,17,19],[1,5,8,10,14,20],[1,5,9,11,15,21],[1,5,22,28,32,34],[1,5,23,29,33,35],[1,5,24,26,30,36],[1,5,25,27,31,37],[1,6,22,39,42,43],[1,7,23,40,42,44],[1,8,24,41,43,44],[2,3,6,7,12,13],[2,3,8,9,10,11],[2,3,14,15,20,21],[2,3,16,17,18,19],[2,3,22,23,28,29],[2,3,24,25,26,27],[2,3,30,31,36,37],[2,3,32,33,34,35],[2,4,6,8,22,24],[2,4,7,9,23,25],[2,4,10,12,26,28],[2,4,11,13,27,29],[2,4,14,16,30,32],[2,4,15,17,31,33],[2,4,18,20,34,36],[2,4,19,21,35,37],[2,5,6,9,26,29],[2,5,7,8,27,28],[2,5,10,13,22,25],[2,5,11,12,23,24],[2,5,14,17,34,37],[2,5,15,16,35,36],[2,5,18,21,30,33],[2,5,19,20,31,32],[2,6,15,23,30,38],[2,6,16,25,31,39],[2,6,19,27,34,40],[2,6,21,28,41,42],[2,7,14,22,31,38],[2,7,17,24,30,39],[2,7,18,26,35,40],[2,7,20,29,41,43],[2,8,14,23,33,39],[2,8,17,25,32,38],[2,8,19,26,36,41],[2,8,21,29,40,44],[2,9,15,22,32,39],[2,9,16,24,33,38],[2,9,18,27,37,41],[2,9,20,30,40,42],[2,10,15,24,37,40],[2,10,17,23,36,42],[2,10,19,29,38,39],[2,11,14,25,36,40],[2,11,16,22,37,42],[2,11,18,28,31,43],[2,11,34,39,41,44],[2,12,15,25,34,42],[2,12,17,22,35,41],[2,12,21,27,32,43],[2,13,14,24,35,42],[2,13,16,23,34,43],[2,13,19,28,33,44],[3,4,6,9,27,28],[3,4,7,8,26,29],[3,4,10,13,23,24],[3,4,11,12,22,25],[3,4,14,17,35,36],[3,4,15,16,34,37],[3,4,18,21,31,32],[3,4,19,20,30,33],[3,4,39,40,43,44],[3,5,6,8,23,25],[3,5,7,9,22,24],[3,5,10,12,27,29],[3,5,11,13,26,28],[3,5,14,16,31,33],[3,5,15,17,30,32],[3,5,18,20,35,37],[3,5,19,21,34,36],[3,6,14,22,30,40],[3,6,17,24,31,38],[3,6,18,26,34,39],[3,6,20,29,42,44],[3,7,15,23,31,39],[3,7,16,25,30,38],[3,7,19,27,35,41],[3,7,21,33,42,43],[3,8,15,22,33,38],[3,8,16,24,32,39],[3,8,18,27,36,40],[3,9,14,23,32,38],[3,9,17,25,33,39],[3,9,19,26,37,40],[3,9,21,30,41,44],[3,10,14,25,37,41],[3,10,16,22,36,43],[3,10,18,28,30,42],[3,10,21,35,38,40],[3,11,15,24,36,41],[3,11,17,23,37,43],[3,11,20,27,38,39],[3,12,14,24,34,43],[3,12,16,23,35,42],[3,12,20,26,32,41],[3,12,28,36,38,44],[3,13,15,25,35,43],[3,13,17,22,34,42],[3,13,18,29,33,41],[4,5,6,7,10,11],[4,5,8,9,12,13],[4,5,14,15,18,19],[4,5,16,17,20,21],[4,5,22,23,26,27],[4,5,24,25,28,29],[4,5,30,31,34,35],[4,5,32,33,36,37],[4,6,15,25,32,40],[4,6,16,23,33,41],[4,6,18,29,35,38],[4,7,14,24,33,40],[4,7,17,22,32,43],[4,7,19,28,34,38],[4,7,21,36,39,41],[4,8,14,25,31,42],[4,8,17,23,30,40],[4,8,18,28,37,39],[4,9,15,24,30,43],[4,9,16,22,31,40],[4,9,19,29,36,42],[4,10,14,22,34,39],[4,10,16,25,35,44],[4,10,19,27,31,43],[4,10,20,32,38,42],[4,11,15,26,35,39],[4,11,17,24,42,44],[4,12,14,23,37,44],[4,12,18,27,33,42],[4,13,15,22,36,44],[4,13,17,26,38,41],[5,6,14,24,32,41],[5,6,17,22,33,44],[5,6,19,28,35,39],[5,6,21,31,40,43],[5,6,27,36,38,42],[5,7,15,25,33,41],[5,7,16,26,34,42],[5,7,18,23,36,43],[5,7,29,32,38,40],[5,8,15,26,31,44],[5,8,16,22,30,41],[5,8,19,24,37,38],[5,8,29,34,39,43],[5,9,14,25,43,44],[5,9,17,23,31,41],[5,10,15,28,38,43],[5,10,17,26,39,40],[5,10,21,23,32,44],[5,11,14,29,30,42],[5,11,16,27,40,44],[5,12,19,22,40,42],[5,12,20,25,30,39],[5,13,18,24,31,39],[5,13,37,41,42,43],[5,20,28,36,40,41],[6,7,14,15,26,27],[6,7,16,17,28,29],[6,7,18,19,22,25],[6,7,20,21,23,24],[6,7,30,32,34,36],[6,7,31,33,35,37],[6,8,10,12,30,31],[6,8,11,13,32,33],[6,8,14,16,34,35],[6,8,15,17,36,37],[6,8,20,26,28,38],[6,9,10,13,34,37],[6,9,11,12,35,36],[6,9,18,20,32,43],[6,10,17,21,25,27],[6,10,20,33,36,39],[6,10,23,26,35,43],[6,11,14,19,23,31],[6,11,15,22,29,34],[6,11,18,24,27,30],[6,11,25,26,37,44],[6,12,14,25,28,33],[6,12,15,21,39,44],[6,12,29,37,40,41],[6,13,16,19,24,26],[6,13,18,23,28,40],[6,13,22,27,31,41],[6,25,34,38,41,43],[7,8,10,13,35,36],[7,8,11,12,34,37],[7,8,15,16,40,43],[7,8,18,20,30,44],[7,9,10,12,32,33],[7,9,11,13,30,31],[7,9,14,16,36,37],[7,9,15,17,34,35],[7,9,18,38,39,42],[7,10,18,24,34,41],[7,10,22,28,37,44],[7,11,16,20,32,35],[7,11,17,33,36,38],[7,12,16,19,31,44],[7,13,14,20,25,34],[7,13,15,21,28,32],[7,13,22,26,33,39],[7,13,23,27,37,38],[7,14,29,35,39,44],[7,24,25,32,37,42],[8,9,14,15,28,29],[8,9,16,17,26,27],[8,9,18,19,23,34],[8,9,20,21,22,25],[8,9,30,32,35,37],[8,9,31,33,36,43],[8,10,16,23,29,37],[8,10,17,28,33,34],[8,10,18,22,26,32],[8,10,27,39,41,42],[8,11,14,21,24,26],[8,11,15,20,23,42],[8,11,22,27,35,43],[8,11,29,31,38,41],[8,12,18,24,25,35],[8,13,16,21,38,42],[8,13,17,20,24,29],[8,17,19,22,31,39],[8,19,21,28,30,43],[9,10,15,20,27,44],[9,10,21,24,28,31],[9,10,25,26,36,38],[9,11,16,18,25,29],[9,11,17,19,28,32],[9,11,26,33,41,42],[9,12,16,28,30,34],[9,12,17,20,37,38],[9,12,23,27,39,40],[9,13,19,22,35,38],[9,13,24,25,40,41],[9,14,21,27,33,35],[9,16,35,39,41,43],[9,24,26,32,34,44],[10,11,15,16,30,33],[10,11,18,19,36,37],[10,11,20,21,34,43],[10,11,22,23,40,41],[10,13,14,16,27,28],[10,13,15,26,29,42],[10,13,17,30,43,44],[10,14,15,31,32,35],[10,18,20,23,25,31],[10,25,29,30,34,40],[11,12,16,26,38,43],[11,12,19,21,29,33],[11,12,31,32,39,42],[11,13,18,21,35,44],[11,14,28,35,37,38],[11,19,24,25,39,43],[11,20,22,24,31,33],[11,21,22,30,32,38],[11,26,27,31,34,36],[12,13,14,15,30,41],[12,13,16,17,25,36],[12,13,18,32,34,38],[12,13,20,22,28,43],[12,13,21,23,26,31],[12,14,17,18,26,29],[12,15,16,22,24,27],[12,15,19,23,32,36],[12,20,33,34,40,44],[12,26,27,30,35,44],[13,14,26,32,36,43],[13,16,30,37,39,40],[13,17,23,32,35,39],[13,19,23,25,30,42],[13,29,31,32,37,44],[14,16,18,20,38,40],[14,17,19,20,27,42],[14,17,21,38,39,43],[14,17,28,31,40,44],[14,18,21,22,23,42],[14,18,25,27,32,39],[14,19,22,33,37,43],[14,23,24,27,29,36],[14,23,26,28,34,41],[15,16,18,21,26,41],[15,16,19,20,25,28],[15,17,19,29,41,44],[15,18,23,24,33,44],[15,18,29,30,36,39],[15,21,27,30,31,42],[15,28,33,39,40,42],[16,17,32,34,40,41],[16,18,32,36,42,44],[16,20,22,23,39,44],[16,20,26,29,30,31],[17,18,22,27,28,38],[17,18,25,40,42,43],[17,21,22,24,36,40],[18,19,26,31,33,38],[18,21,24,29,37,43],[19,20,24,35,36,44],[20,21,26,36,37,42],[20,23,27,28,32,33],[21,23,25,34,37,39],[27,29,30,33,38,43],[28,29,32,35,42,43],[31,34,37,38,40,42]]
//let one-indexed-tiks = [[4,12,19,24,29,31,32],[1,6,8,10,15,24,33],[11,18,20,21,24,30,35],[8,11,13,23,24,25,27],[3,10,11,12,21,31,33],[2,4,7,11,15,16,29],[6,9,11,19,26,28,34],[5,10,13,15,21,26,28],[1,5,9,17,19,21,27],[3,8,9,10,14,18,32],[2,3,5,7,18,24,34],[12,17,23,25,32,34,35],[4,8,10,17,29,30,34],[23,25,26,28,30,32,33],[5,8,14,20,30,31,35],[9,16,22,24,31,33,34],[1,4,9,13,20,29,34],[3,15,20,26,27,28,31],[3,15,17,18,19,23,25],[1,8,12,16,18,26,28],[1,2,7,9,23,25,31],[1,5,11,12,14,22,32],[5,10,16,20,22,23,25],[2,6,7,12,13,20,32],[9,12,15,22,27,30,35],[4,6,14,21,23,25,29],[6,11,13,17,18,22,31],[14,15,16,21,27,32,34],[2,7,10,19,27,33,35],[1,3,6,13,16,30,35],[2,7,8,19,21,22,30],[2,7,14,17,24,26,28],[13,14,16,17,19,20,33],[3,4,22,26,28,29,35],[4,5,6,18,27,29,33]];
//convertOneToZeroIndex(one-indexed-tiks);

//let sixteen_evergreen_zero_indexed = [[0,1,2,3,4,5,6],[0,7,8,9,10,11,12],[0,13,14,15,16,17,18],[0,19,20,21,22,23,24],[0,25,26,27,28,29,30],[1,7,13,19,25,31,32],[1,8,14,20,26,33,34],[1,9,15,23,24,27,28],[1,10,17,18,21,29,30],[2,7,15,22,29,30,33],[2,8,16,21,27,31,32],[2,11,12,13,23,26,34],[3,9,16,19,30,33,34],[3,10,14,22,28,31,32],[4,11,17,24,31,32,33],[5,6,7,17,20,27,28]];
//let evergreen_then_one_clash_x18 = [[0,1,2,3,4,5,6],[0,7,8,9,10,11,12],[0,13,14,15,16,17,18],[0,19,20,21,22,23,24],[0,25,26,27,28,29,30],[1,7,13,19,25,31,32],[1,8,14,20,26,33,34],[1,9,15,23,24,27,28],[1,10,17,18,21,29,30],[2,7,15,22,29,30,33],[2,8,16,21,27,31,32],[2,11,12,13,23,26,34],[3,9,16,19,30,33,34],[3,10,14,22,28,31,32],[4,11,17,24,31,32,33],[5,6,7,17,20,27,28],[4,5,9,18,22,25,26],[5,6,8,13,24,29,30]];

// let x23ZeroIndexed= [[0,1,2,3,4,5,6],[0,1,7,8,9,10,11],[0,1,12,13,14,15,16],[0,1,17,18,19,20,21],[0,1,22,23,24,25,26],[0,1,27,28,29,30,31],[2,3,7,12,17,22,23],[2,3,8,13,18,24,25],[2,3,9,14,19,26,27],[2,3,10,11,15,16,20],[2,3,21,28,32,33,34],[4,5,7,13,19,28,29],[4,5,8,12,20,21,26],[4,5,9,15,17,24,25],[4,5,10,14,18,22,23],[4,5,11,30,31,32,33],[6,7,8,15,27,32,33],[6,7,14,20,24,30,31],[6,9,11,12,18,28,29],[6,10,13,17,26,27,34],[8,16,19,22,23,30,31],[9,13,20,22,23,32,33],[10,12,19,24,25,32,33]];
// let x23OneIndexed = [[1,2,3,4,5,6,7],[1,2,8,9,10,11,12],[1,2,13,14,15,16,17],[1,2,18,19,20,21,22],[1,2,23,24,25,26,27],[1,2,28,29,30,31,32],[3,4,8,13,18,23,24],[3,4,9,14,19,25,26],[3,4,10,15,20,27,28],[3,4,11,12,16,17,21],[3,4,22,29,33,34,35],[5,6,8,14,20,29,30],[5,6,9,13,21,22,27],[5,6,10,16,18,25,26],[5,6,11,15,19,23,24],[5,6,12,31,32,33,34],[7,8,9,16,28,33,34],[7,8,15,21,25,31,32],[7,10,12,13,19,29,30],[7,11,14,18,27,28,35],[9,17,20,23,24,31,32],[10,14,21,23,24,33,34],[11,13,20,25,26,33,34]];
// state = computeState(x23ZeroIndexed);
// console.log('COMPUTED STATE x23',computeCoverage(state));

let twoPee = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[1,3],[1,4],[1,5],[1,6],[2,3],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6],[4,5],[4,6],[5,6]];
let tiks = zeroOneTwoThreeFourFive = [[0,1,2,3,4,5,6],[0,7,8,9,10,11,12],[0,13,14,15,16,17,18],[0,19,20,21,22,23,24],[0,25,26,27,28,29,30],[1,7,13,19,25,31,32],[1,8,14,20,26,33,34],[2,9,15,21,27,31,33],[2,10,16,22,28,32,34],[3,11,17,23,29,31,34],[3,12,18,24,30,32,33],[4,5,7,8,15,22,29],[4,5,9,10,13,20,30],[4,5,11,12,14,19,27],[6,7,8,16,17,21,30],[6,9,10,14,18,23,25],[6,11,13,15,24,26,28],[4,5,16,17,24,25,33],[4,5,18,21,26,28,31],[1,9,12,16,17,22,26],[2,3,7,8,13,23,27],[2,6,12,18,19,20,29]];
tiks = zeroOneTwoThreeFourFiveSix = [[0,1,2,3,4,5,6],[0,7,8,9,10,11,12],[0,13,14,15,16,17,18],[0,19,20,21,22,23,24],[0,25,26,27,28,29,30],[1,7,13,19,25,31,32],[1,8,14,20,26,33,34],[2,9,15,21,27,31,33],[2,10,16,22,28,32,34],[3,11,17,23,29,31,34],[3,12,18,24,30,32,33],[4,5,7,8,15,22,29],[4,5,9,10,13,20,30],[4,5,11,12,14,19,27],[6,7,8,16,17,21,30],[6,9,10,14,18,23,25],[6,11,13,15,24,26,28],[4,5,16,17,24,25,33],[4,5,18,21,26,28,31],[1,9,12,16,17,22,26],[2,3,7,8,13,23,27],[2,6,12,18,19,20,29],[1,3,10,14,21,24,29]]
tiks = zeroOneTwoThreeFourFiveSixSeven = [[0,1,2,3,4,5,6],[0,7,8,9,10,11,12],[0,13,14,15,16,17,18],[0,19,20,21,22,23,24],[0,25,26,27,28,29,30],[1,7,13,19,25,31,32],[1,8,14,20,26,33,34],[2,9,15,21,27,31,33],[2,10,16,22,28,32,34],[3,11,17,23,29,31,34],[3,12,18,24,30,32,33],[4,5,7,8,15,22,29],[4,5,9,10,13,20,30],[4,5,11,12,14,19,27],[6,7,8,16,17,21,30],[6,9,10,14,18,23,25],[6,11,13,15,24,26,28],[4,5,16,17,24,25,33],[4,5,18,21,26,28,31],[1,9,12,16,17,22,26],[2,3,7,8,13,23,27],[2,6,12,18,19,20,29],[1,3,10,14,21,24,29],[1,3,15,19,23,28,30],[2,11,14,22,25,30,31],[12,13,15,20,21,25,34]]
tiks = zeroOneTwoThreeFourFiveSixSevenEight = [[0,1,2,3,4,5,6],[0,7,8,9,10,11,12],[0,13,14,15,16,17,18],[0,19,20,21,22,23,24],[0,25,26,27,28,29,30],[1,7,13,19,25,31,32],[1,8,14,20,26,33,34],[2,9,15,21,27,31,33],[2,10,16,22,28,32,34],[3,11,17,23,29,31,34],[3,12,18,24,30,32,33],[4,5,7,8,15,22,29],[4,5,9,10,13,20,30],[4,5,11,12,14,19,27],[6,7,8,16,17,21,30],[6,9,10,14,18,23,25],[6,11,13,15,24,26,28],[4,5,16,17,24,25,33],[4,5,18,21,26,28,31],[1,9,12,16,17,22,26],[2,3,7,8,13,23,27],[2,6,12,18,19,20,29],[1,3,10,14,21,24,29],[1,3,15,19,23,28,30],[2,11,14,22,25,30,31],[12,13,15,20,21,25,34],[1,11,16,17,20,27,32],[6,7,18,22,24,27,34]]

let state = computeState(tiks);

function convertOneToZeroIndex(twoDeeArray) {
  for(let i=0;i<twoDeeArray.length;i++) {
    let tik=twoDeeArray[i];
    let newTik=[];
    for(let j=0;j<tik.length;j++) {
      newTik.push(tik[j]-1);
    }
    twoDeeArray[i] = newTik;
  }
}

function convertZeroToOneIndex(twoDeeArray) {
  for(let i=0;i<twoDeeArray.length;i++) {
    let tik=twoDeeArray[i];
    let newTik=[];
    for(let j=0;j<tik.length;j++) {
      newTik.push(tik[j]+1);
    }
    twoDeeArray[i] = newTik;
  }
}

//0 clash: 0,1
//1 clash: 1,2
//...etc
for(let PERMIT_N_CLASHING=8;PERMIT_N_CLASHING<15 && computeCoverage(state)<100.00;PERMIT_N_CLASHING++) {

  for(let i=0;i<NcK;i++) { // < NcK
    let ith = i; //mapr[i];
    let tikn = ithCombination(N,K,ith);
    let tiknPairs = [];

    if(i%10000===0)console.log('i',i);

    let clash=0;
    for(let j=0;j<twoPee.length;j++) {
      let x = twoPee[j];
      let twoPair = [tikn[x[0]], tikn[x[1]]];
      let pairI = inverseIthCombination(N,twoPair); //the 0-14190 pairing

      if(state[pairI]!=0) {
        clash++;
      }

      if(clash>PERMIT_N_CLASHING) {
        break;
      }

      //if ok, keep going, else halt and ignore
      tiknPairs.push(pairI);

    }

    if(tiknPairs.length===twoPee.length) { //we made it the whole way without experiencing a clash)
      //add to tiks (tik selection)
      //update state

      tiks.push(tikn);
      tiknPairs.forEach(y => {
        state[y] = 1;
      });

      let coverage = computeCoverage(state);
      console.log(PERMIT_N_CLASHING===0 ? 'Evergreen:':(PERMIT_N_CLASHING+'-clash:'),tiks.length,'('+coverage+'%)')

      if(coverage==100.00) {
        break;
      }
      //log it?
    }
  }
} //nclash

console.log('----- final ('+tiks.length+') (coverage: '+computeCoverage(state)+'%) ----');
console.log(JSON.stringify(tiks));


//----------------------------------

function choose( n, k ) { // n & k are part of the mathematical choose() function
  let ret = 1;
  if( k===0 || k===n ) {
    return 1;
  } else if( k===1 ) {
    return n;
  } else if( k<0 || k>n) {
    return 0;
  } else if( k > n/2 ) {
    k = n - k;
  }
  for(let i=1;i<=k;i++){
    ret *= ( n - k + i ) / i;
  }
  return Math.round( ret );
}

function randInt( n ) {
  return Math.floor( Math.random() * n );
}

function hasDuplicates ( array ) {
  return ( new Set( array) ).size !== array.length;
}

function sequence( n ) {
  return Array.from( {length: n}, (x, y) => y );
}

function ithCombination( n, k, i ) { // i is ith iteration 0 <= i < nCk
  let arr;
  if( n.constructor === Array ) {
    arr = n;
  } else {
    let limit = choose(n,k);
    if(i >= limit) {
      throw `i must be below nCk (${limit})!`;
    }
    arr = sequence(n);
  }
  if( k === 0 ) {
    return [];
  } else if( arr.length === k ) {
    return arr;
  } else {
    let remainingSlots = choose(arr.length-1, k-1);
    if( i < remainingSlots ) {
      return [arr[0]].concat( ithCombination(arr.slice(1), k-1, i) );
    } 
    return ithCombination(arr.slice(1), k, i-remainingSlots);
  }
}

function inverseIthCombination( n, combinationArray ) { // returns a 0-indexed iteration 0<=i<n array
  let k = combinationArray.length;
  let position = Array.from(combinationArray, x => sequence(n).indexOf(x));
  if( position.includes(-1)) {
    throw `Error: combinationArray must contain elements (${combinationArray}) in range 0 <= x < ${n}.`;
  }
  if( hasDuplicates(position)) {
    throw 'Error: combinationArray is a combination and should not contain duplicates.'
  }
  position.sort((a,b)=>a-b);
  let ret = 0;

  for(let i=0;i<position.length;i++) {
    let last = i===0 ? 0 : position[i-1]+1;
    add = choose(n-last, k-i) - choose(n-position[i], k-i);
    ret += add;
  }
  return ret;
}

function zeros( n ) {
  if( typeof n === 'undefined' || n < 1 ) {
    return []
  }
  return new Array( n + 1 ).join( '0' ).split( '' ).map( parseFloat )
}

function sequence( n ) {
  return Array.from( {length: n}, (x, y) => y );
}

function randomizeArray( array ) {
  let currentIndex = array.length, temporaryValue, randomIndex
  while ( 0 !== currentIndex ) {
    randomIndex = Math.floor( Math.random() * currentIndex )
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function computeState( tiks ) {
  let ret = zeros(NcP);

  if(tiks) {
    let twoPee = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[1,3],[1,4],[1,5],[1,6],[2,3],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6],[4,5],[4,6],[5,6]];

    for(let i=0;i<tiks.length;i++) {
      let tikn = tiks[i];
      twoPee.forEach(x => {
        let twoPair = [tikn[x[0]], tikn[x[1]]];
        let twoPairIndex = inverseIthCombination(N,twoPair);
        ret[twoPairIndex]++;
      });
    }
  }

  return ret;
}

function computeCoverage( state ) {
  let coverage = 0;
  state.forEach(x=>{
    if(x>0) {
      coverage++;
    }
  })
  console.log('COVERd',coverage);
  coverage = Math.round( (coverage/NcP) * 10000 ) / 100;
  return coverage;
}

// idea: try rejecting if its not clashing by EXACTLY x
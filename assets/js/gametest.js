requirejs(['roulette'], function(require, exports, module){
  // console.log(require.spin());
  console.log(require.play([
    [100, 'red'],
    [50, 'even'],
    [75, '14'],
    [22, '32'],
    [22, '33'],
    [22, '23'],
    [22, '27'],
    [22, '22'],
    [200, '23,24,25']
    ]));
});

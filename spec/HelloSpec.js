/**
 * http://pivotal.github.io/jasmine/
 */
describe("Hello Test", function() {

  it("test", function() { 
    var a = 'test';//actual テストする値
    var e = 'test';//expect 期待値
    expect(a).toEqual(e);    
  });
  
  it("An", function() {
     expect(An()).toEqual(1);
  });
});
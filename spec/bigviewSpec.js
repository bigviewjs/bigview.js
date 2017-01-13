/**
 * http://pivotal.github.io/jasmine/
 */
describe("Bigview Test", function() {
    var payload = {
        domid : 'xxx',
        html : "<h1>ss</h1>"
    }
    it("test", function() { 
        bigview.view(payload)
        
        bigview.on('pageletArrave', function(_payload) {
            expect(_payload.domid).toEqual(payload.domid);    
        });
    });

});
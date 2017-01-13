/**
 * http://pivotal.github.io/jasmine/
 */
describe("Bigview Test", function() {
    var payload = {
        domid : 'xxx',
        html : "<h1>ss</h1>"
    }

    it("test ready", function() { 
        bigview.ready();
    });
    
    it("test ready", function() { 
        bigview.ready = function () {
            console.log('ready2')
        }
        bigview.ready();
    });
    
    it("test end", function() { 
        bigview.end();
    });
    
    it("test end", function() { 
        bigview.end = function () {
            console.log('end2')
        }
        bigview.end();
    });
    
    it("test domid", function() { 
        bigview.on('xxx', function(_payload) {
            console.log('xxxttt domid')
            expect(_payload.html).toEqual(payload.html);    
        });
        
        bigview.on('pageletArrive', function(_payload) {
            console.log('xxxttt domid pageletArrive')
            expect(_payload.domid).toEqual(payload.domid);    
        });
        
        bigview.view(payload);
    });

    it("test pageletArrave", function() { 
        bigview.on('pageletArrive', function(_payload) {
                        console.log('xxxttt pageletArrive')
            expect(_payload.domid).toEqual(payload.domid);    
        });
        
        bigview.view(payload);
    });
});
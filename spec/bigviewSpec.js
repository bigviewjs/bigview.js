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
    
    it("test domid", function() { 
        bigview.on('xxx', function(_payload) {
            console.log('xxxttt domid')
            expect(_payload.html).toEqual(payload.html);    
        });
        
        bigview.on('pageletArrave', function(_payload) {
            console.log('xxxttt domid pageletArrave')
            expect(_payload.domid).toEqual(payload.domid);    
        });
        
        bigview.view(payload);
    });

    it("test pageletArrave", function() { 
        bigview.on('pageletArrave', function(_payload) {
                        console.log('xxxttt pageletArrave')
            expect(_payload.domid).toEqual(payload.domid);    
        });
        
        bigview.view(payload);
    });
});
/*
 * Code used from: http://youmightnotneedjquery.com/#request 
 */


export default function _GET(
    url: string
) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    // Fix for CORS
    request.setRequestHeader('Access-Control-Allow-Origin', '*');

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var resp = this.response;
            console.log("success");

        } else {
            // We reached our target server, but it returned an error
            console.log("ERROR IN GET REQUEST TO " + url);
        }
    };

    request.onerror = function () {
        console.log("ERROR IN CONNECTION TO " + url);
    };

    request.send();
    console.log(request);

    return request.responseText;
}

function _POST(
    url: string,
    payload: any
) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);

    // Fix for CORS
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var resp = this.response;

        } else {
            // We reached our target server, but it returned an error
            console.log("ERROR IN GET REQUEST TO " + url);
        }
    };

    request.onerror = function () {
        console.log("ERROR IN CONNECTION TO " + url);
    };

    request.send(payload);
    console.log(request);

    return request.responseText;
}
function _DELETE(
    url: string
){
    var request = new XMLHttpRequest();
    request.open('DELETE', url, true);
    
    // Fix for CORS
    request.setRequestHeader('Access-Control-Allow-Origin', '*');

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var resp = this.response;
            console.log("success");
            
        } else {
            // We reached our target server, but it returned an error
            console.log("ERROR IN GET REQUEST TO " + url);
        }
    };
    
    request.onerror = function() {
        console.log("ERROR IN CONNECTION TO " + url);
    };

    request.send();
    console.log(request);
    
    return request.responseText;
}

<<<<<<< HEAD
export { _GET, _POST };
=======
export {_GET, _POST, _DELETE};
>>>>>>> 3cc3fb4906f6e8b4931c36b0212412e98f03fe57

/*
 * Code used from: http://youmightnotneedjquery.com/#request
 */

export default async function _GET(url: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    // Fix for CORS
    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var resp = { response: this.response, status: this.status };
        resolve(resp);
      } else if (this.status === 401) {
        reject(new Error("AUTHENTICATION ERROR: " + url));
      } else {
        reject(new Error(this.status + " ERROR IN CONNECTION TO " + url));
      }
    };

    request.onerror = function() {
      reject(new Error(this.status + " ERROR IN CONNECTION TO " + url));
    };

    request.send();
  });
}

async function _POST(url: string, payload: any): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("POST", url, true);

    // Fix for CORS
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var resp = { response: this.response, status: this.status };
        resolve(resp);
      } else if (this.status === 401) {
        reject(new Error("AUTHENTICATION ERROR: " + url));
      } else {
        reject(new Error(this.status + " ERROR IN CONNECTION TO " + url));
      }
    };

    request.onerror = function() {
      reject(new Error(this.status + " ERROR IN CONNECTION TO " + url));
    };

    request.send(JSON.stringify(payload));
  });
}
async function _DELETE(url: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("DELETE", url, true);

    // Fix for CORS
    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var resp = { response: this.response, status: this.status };
        resolve(resp);
      } else if (this.status === 401) {
        reject(new Error("AUTHENTICATION ERROR: " + url));
      } else {
        reject(new Error(this.status + " ERROR IN CONNECTION TO " + url));
      }
    };

    request.onerror = function() {
      reject(new Error("ERROR IN CONNECTION TO " + url));
    };

    request.send();
  });
}

export { _GET, _POST, _DELETE };

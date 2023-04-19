// er4js (easy requests for javascript), created by Marcouscous!
// This file is the actual code for er4js, to see how to use it, look at test.js!


// Runs a GET request
function getData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
      });
}

// Runs a POST request
function postData(url, reqbody) {
  return fetch(url, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(reqbody)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(error);
    });
}


// Runs a PUT request
function putData(url, reqbody) {

  return fetch(url, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(reqbody)
  })

    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })

    .then(data => {
      return data;
    })

    .catch(error => {
      console.error(error);
    });
}


function delData(url) {

    return fetch(url, {
        method: "DELETE",
        headers: {"Content-type": "application/json"},
    })
  
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
  
      .then(data => {
        return data;
      })
      
      .catch(error => {
        console.error(error);
      });
  }
  
    
  
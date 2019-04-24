import SessionActions from '../actions/session';

const $ = {
  ajax: options => {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const defaults = {
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        method: "GET",
        url: "",
        data: {},
      };
      options = Object.assign(defaults, options);
      options.method = options.method.toUpperCase();

      if (options.method === "GET"){
        //data is query string for get
        options.url += "?" + toQueryString(options.data);
      }
      request.open(options.method, options.url, true);
      request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      request.onload = e => {
        //NB: Triggered when request.readyState === XMLHttpRequest.DONE ===  4
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.onerror = () => {
        reject(request.response);
      }

      request.send(JSON.stringify(options.data));
    });
  }
}

export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'users',
    data: user
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'session',
    data: user
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'session'
  });
};

export const findCurrentUser = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'session'
  });
};

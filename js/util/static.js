let _static = window;

axios.defaults.baseURL = 'http://localhost:9175/jiangwei/'
_static.$http = axios;
_static.getUrlParam = function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                        return pair[1];
                }
        }
        return (false);
}
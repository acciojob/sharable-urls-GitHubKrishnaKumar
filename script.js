// your code here
document.getElementById('button').addEventListener('click', function() {
            let name = document.getElementById('name').value;
            let year = document.getElementById('year').value;

            let url = 'https://localhost:8080/';
            let queryString = [];

            if (name) {
                queryString.push('name=' + encodeURIComponent(name));
            }
            if (year) {
                queryString.push('year=' + encodeURIComponent(year));
            }

            if (queryString.length > 0) {
                url += '?' + queryString.join('&');
            }

            document.getElementById('url').innerText = url;
        });
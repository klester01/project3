const headers = {
    'Authorization': 'VU9wSUNOMWNGMHpoWml1c2F1d0VmZz09'
};

axios.get('https://trefle.io/api/kingdoms', { headers })
    .then(function (response)
    {
        document.getElementById('kingdoms').innerHTML = renderGames(response);

    });
(function(){
    localStorage.setItem('godking', 'godking-values');

    var obj = {
        name: 'godking',
        title: 'SE'
    };

    localStorage.setItem('obj', JSON.stringify(obj));

    var godkingvalues = localStorage.getItem('godking');

    console.log(godkingvalues);

    localStorage.removeItem('godking');

    //localStorage.clear();

    sessionStorage.setItem('oceansky', 'oceansky-values');
    sessionStorage.setItem('obj', JSON.stringify(obj));

    var oceanSkyValues = sessionStorage.getItem('oceansky');
    console.log(oceanSkyValues);

    sessionStorage.removeItem('oceansky');

    //sessionStorage.clear();
})();
var api= (function(){
    async function publicFetchData(url){
        var promise =await fetch(url);
        var data= await promise.json();
        return data;
    }
    return {fetchValuta: publicFetchData}
})();
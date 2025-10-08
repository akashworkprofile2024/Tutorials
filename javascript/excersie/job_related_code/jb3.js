const pass = (e)=>{
    const anagramG = new Map();
     e.forEach(element => {
        const sorted = element.split("").sort().join("")
        console.log(sorted)
        
        if(!anagramG.has(sorted)){
            anagramG.set(sorted,[]);
        }
        anagramG.get(sorted).push(element)
    });
    return Array.from(anagramG.values());
}; const arr = ["bat", "tab","tap","pat"]; console.log(pass(arr))
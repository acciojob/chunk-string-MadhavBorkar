function stringChop(str, size) {
  // your code here
	 if (str === null) {
        return [];
    }
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        let stringChop = str.substring(i, i + size);
        result.push(stringChop);
    }

    return result;
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));

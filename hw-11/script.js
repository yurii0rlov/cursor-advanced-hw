async function getRandomChinese(length){
    if (isNaN(length) || !Number.isInteger(+length) || length === '' || length.includes("-") || length === '0') {
        return alert("ERROR, хибний ввід, спробуйте ще раз");
    }

    let i = 1;
    let chinianCharachters = '';

    while(i <= length){
        const promise = new Promise(function(resolve) {
            const time = String(Date.now());
            const lastNumbers = time.substring(time.length, time.length - 5);
            const symbols = String.fromCharCode(lastNumbers)
            setTimeout(() => resolve(symbols), 50);
            i++;
        })
        chinianCharachters += await promise;
    }
    return alert(`
Ваш рядок китайський символів: "${chinianCharachters},
Затримка виводу: ${length * 50}мс`
    ); 
}
getRandomChinese(prompt("Введіть число", "10"));
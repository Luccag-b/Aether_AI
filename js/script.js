const contador = document.querySelectorAll('.card h3');

contador.forEach((contador) =>{
    const updateCount = () => {
        const target = +contador.getAttribute('data-target');
        const count = +contador.innerText;

        const velocidade = 200;
        const inc = target / velocidade;

        if(count < target){
            contador.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            contador.innerText = target;
        }
    };
    updateCount();
});
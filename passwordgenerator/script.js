

function generator(){
    const pattern='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?';
    const lenght = 12;
    let password = '';

    for(let i=0;i<lenght;i++){
        const randomselect= Math.floor(Math.random()*pattern.length)
        password +=pattern[randomselect]
    }
    document.getElementById('output').value=password
}
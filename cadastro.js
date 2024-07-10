function cadastrar(){
    let element_termos = document.getElementById(`termos`);
    let element_nao_aceitou_os_termos = document.getElementById(`nao_aceitou_os_termos`);
    if(element_termos.checked){
        window.location.href=`login.html`;
    } else{
        element_nao_aceitou_os_termos.innerHTML=`Favor, aceitar os termos!`;

    }
}

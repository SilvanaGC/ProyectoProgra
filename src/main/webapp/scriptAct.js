
function begin() {
    const xhr = new XMLHttpRequest()
    xhr.open("POST","hello-servlet",true)
    xhr.onreadystatechange = ()=>{
        if( xhr.readyState === 4 && xhr.status === 200 ){
            const resp = JSON.parse( xhr.responseText)
            if(resp.state){
                alert("Hecho, se inserto")
            }else{
                alert("No se ha insertado")
            }
        }
    }
}


document.getElementById('btnGuardar').addEventListener('click',function (){
    console.log("ENTRA AL BOTON")
    const tipoAct = document.getElementById('tipoAct');
    const selected = tipoAct.options[tipoAct.selectedIndex].value;
    const nombreAct = document.getElementById('nameAct').value
    const descripAct = document.getElementById('descripcion').value
    const ponderado = document.getElementById('ponderado').value
    const fecha = document.getElementById('fecha').value
    alert(selected +''+ nombreAct + ''+descripAct+''+ponderado+''+fecha)
    //const subId = document.getElementById('materiaId').value


    const data = `selected=${selected}&nombreAct=${nombreAct}&descripAct=${descripAct}&ponderado=${ponderado}&fecha=${fecha}`;
    $.ajax({
        url: 'hello-servlet?op=1',
        type: 'GET',
        data: data
    })
    //begin()
    /*xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send( data )
    alert("Elemento Agregado")*/
})

//begin()
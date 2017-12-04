function cargarSecciones()
{
    var padre=document.getElementById("listaSecciones");
    padre.innerHTML="";
    
    //For
    for (i=0;i<30;i++)
    {
        var seccion="Seccion"+i;
        var nombre="NombreDeMateria";

        var elemento=document.createElement("li");
        var label=document.createElement("label");
        label.setAttribute("class","label-radio item-content");
        var input=document.createElement("input");
        input.setAttribute("type","radio");
        input.setAttribute("name","secciones");
        input.setAttribute("value",seccion);

        var div=document.createElement("div");
        div.setAttribute("class","item-media")

        var icono=document.createElement("i");
        icono.setAttribute("class","icon icon-form-radio");
        div.appendChild(icono);

        var div2=document.createElement("div");
        div2.setAttribute("class","item-inner");

        var div3=document.createElement("div");
        div3.setAttribute("class","item-title");

        var mostrar=document.createTextNode(seccion+" / "+nombre);
        div3.appendChild(mostrar);
        div2.appendChild(div3);

        label.appendChild(input);
        label.appendChild(div);
        label.appendChild(div2);
        elemento.appendChild(label);

        padre.appendChild(elemento);
         
    }
    
}
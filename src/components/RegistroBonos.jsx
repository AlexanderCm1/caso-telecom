import React, { Component,Fragment } from 'react';

class RegistroBonos extends Component {
    constructor(props){
        super(props);
        this.state = {
            telefono: '',
            cliente: '',
            contacto: '',
            dni:'',
            bono: '',
            servicio: '',
            linea: ''


        };

        this.messageSave = this.messageSave.bind(this);
    }


    componentDidMount(){

        const a = Math.floor(Math.random() * 2) +1;
        

        if(a === 1){
            // text = "No se obtiene el tipo de servicio para la linea prepago";
            this.setState({ linea:"prepago"})  ;
        }else if(a ===2){
            // text = "La line es pospago!"
            this.setState({ linea:"pospago"})  ;
        }


    }


    handleChange = (e) =>{ 
        
        
        const value = e.target.value;
        if(value ==="fiesta"){
            this.setState({ bono: '5%' });
        }else if(value === "juventud"){
            this.setState({ bono : '7.5%'});
        }else if(value === "independiente"){
            this.setState({ bono : '10%'});
        }else if(value === "universitario"){
            this.setState({ bono : '11%'});

        }
        console.log(value);
        // this.setState({ servicio: value });

    }





    
    
    messageSave = () =>{
        
        if(this.state.bono === ""){
            alert("No se selecciono el motivo de servicio");
        }else if(this.state.linea === "prepago"){
            alert("La linea no es pospago!")
        }else{
            alert("Se grabo correctamente");
        }
    }



    render() {
        return (
            <section className="w-3/5 h-auto mx-auto bg-indigo-50 ">
                
                <div className="w-full bg-blue-600 h-10 flex justify-center ">
                    <h1 className="text-white self-center text-lg">Recarga de Bonos de paquetes de Datos</h1>
                </div>

                <p className="m-4">Nro Teléfono:  <span className="text-lg">988202023</span></p> 


                <h1 className="underline text-xl m-4">Datos Actuales del Cliente</h1>
                <div className="flex flex-row flex-wrap m-4">
                    <div>
                        <p>Cliente: <span className="text-lg">Juan villalobos</span></p>
                        <p>Contacto: <span className="text-lg">Juan villalobos</span></p>
                    </div>
                    <div className="ml-auto">
                        <p>DNI/RUC: 102932323</p>
                        <p>Motivo de servicio</p>
                        <select name="select" onChange={this.handleChange}>
                            <option value="seleccionar" >selecionar --</option>
                            <option value="fiesta" >Fiesta</option>
                            <option value="juventud">Juventud</option>
                            <option value="independiente">Independiente</option>               
                            <option value="universitario">Universitario</option>

                        </select>
                    </div>



                </div>
                <div className="w-full h-14 border border-green-300 p-4">
                    <h1>Recarga de Bonos: <span className="text-lg">{this.state.bono}</span></h1>


                </div>
                <div className="flex justify-center">
                    <div className="flex m-3 content-between">
                        <button className=" border border-red-600 p-2 rounded-lg mx-4" >Cerrar</button>
                        <button className=" border border-green-600 p-2 rounded-lg mx-4" onClick={this.messageSave}>Grabar</button>

                    </div>




                </div>
            
                <p> {  this.state.linea === "prepago"  ?  <span className="text-red-600">No se obtiene el tipo de servicio para la linea prepago</span> : 
                    <span className="text-green-500">La line es pospago!</span> }
                </p>

            </section>
        )
    }
}
export default RegistroBonos;
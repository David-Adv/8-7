// const API = "https://bootcamp-2024-2d43236510d5.herokuapp.com"

// const apiExamenes = '/examenes'
// const apiAlumnos = '/alumnos'
// const apiRespuestas = '/respuestas'

// function promiseGenerator (dataSelected ){
//     return fetch(API + dataSelected)
//     // fetch(API + dataSelected)
//     //          .then(response => {
//     //             response.json()
//     //             console.log(response)
//     //          }
//     //         )
//     //         .catch(error => console.log("hubo error pibe: " + error))
//   }


// //   

// const getInfo = async ()=> {

//     promises = []

//     promises.push(promiseGenerator(apiExamenes))
//     promises.push(promiseGenerator(apiRespuestas))
//     promises.push(promiseGenerator(apiAlumnos))
    

//     try{
//         const results = await Promise.all(promises)
    

//        const data = results.map(res => res.json())
//         console.log8(data[0])
      

    
//     }catch (error){
//     console.log(error)

//     }
    

// }

// getInfo()



const API = 'http://bootcamp-2024-2d43236510d5.herokuapp.com'
const apiExamenes = '/examenes'
const apiAlumnos = '/alumnos'
const apiRespuestas = '/respuestas'
const endpointsArray = [
  `${API}${apiAlumnos}`,
  `${API}${apiExamenes}`,
  `${API}${apiRespuestas}`,
]
 
const getData = async () => {
  const examenesPromise = await fetch(endpointsArray[0])
  const alumnosPromise = await fetch(endpointsArray[1])
  const respuestasPromise = await fetch(endpointsArray[2])
 
  const promisesArray = []
  promisesArray.push(examenesPromise)
  promisesArray.push(alumnosPromise)
  promisesArray.push(respuestasPromise)
 
  const responsesArray = await Promise.all(promisesArray)
  const dataArray = await Promise.all(responsesArray.map(r => r.json()))
 
  return dataArray
}
 
const viewDataArray = async () => {
  const data = await getData()
  const alumnos = data[0].data
  const examenes = data[1].data
  const respuestas = data[2].data




 let examenesID = examenes.map(item => {

    const {id} = item

   const examen = {
        examenId:id,
        preguntas:item.preguntas.map( pregunta =>{
            let obj = {
                preguntaId:pregunta.id,
                respuesta: pregunta.opciones.find(opc => opc.esCorrecta == true ).id
            }
            return obj
        })
        
    }

    return examen
 })

        console.log(examenesID)

}
 

viewDataArray()
 















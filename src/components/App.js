import React , {useState, useEffect} from "react"

function App(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [image, setImage] = useState("")

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(r => r.json())
        .then(data => {
            setIsLoaded(true)
            setImage(data.message)
        })
    },  [] )

    if (!isLoaded)return <p>Loading...</p>
    return (
        <img src={image} alt ="A Random Dog" />
        // <div>
        //     {!isLoaded ? <p>Loading...</p> : <img src={image} alt ="A Random Dog" />}
        // </div>
    )
}

export default App;
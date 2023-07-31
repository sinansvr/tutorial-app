import axios from "axios"
import { useEffect, useState } from "react"


const EditTutor = ({editItem ,getTutorials}) => {
  
const{title:oldTitle,description:oldDescription,id}=editItem
//   console.log(oldTitle,oldDescription,id)
const [title, setTitle] = useState(oldTitle)
const [description, setDescription] = useState(oldDescription)

useEffect(()=>{
    setTitle(oldTitle);
    setDescription(oldDescription);
},[oldTitle,oldDescription])


const editTutor=async(tutor)=>{
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

    try {
        await axios.put(`${BASE_URL}${id}/`,tutor);
    } catch (error) {
        console.log(error)        
    }
    getTutorials();
}


const handleSubmit=(e)=>{
    e.preventDefault()
    editTutor({title:title,description:description})

}
    
    return (
        <>

            <div
                className="modal fade"
                id="open-modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-danger" id="exampleModalLabel">
                                Edit Tutorial
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter your title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="desc"
                                        placeholder="Enter your Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="text-end">
                                    <button type="submit"
                                    data-bs-dismiss="modal" className="btn btn-danger mb-4">
                                    Save
                                </button>
                                </div>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>


    )
}

export default EditTutor
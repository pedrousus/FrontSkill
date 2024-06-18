
import { createContext, useContext, useState } from "react";
import { getTaskRequest, getCienciaRequest } from '../api/task'

const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)

    if(!context){
        throw new Error("useTask must be used within a TaskProvidre")
    }

    return context
}

export function TaskProvider({ children }){
    const {tasks, setTasks} = useState([])
    const {esañol, setespañol} = useState([])

    const getTask = async () => {
        try {
            const res = await getTaskRequest();
            const calificacion = res.data;
            console.log(res.data, calificacion);
            return calificacion;
        } catch (error) {
            console.error("Error al obtener la tarea:", error);
            throw error;
        }
    }
    const getEspañol = async () => {
        try {
            const res = await getCienciaRequest();
            const calificacion = res.data;
            console.log(res.data, calificacion);
            return calificacion;
        } catch (error) {
            console.error("Error al obtener la tarea:", error);
            throw error;
        }
    }


    return(
        <TaskContext.Provider
            value={{
                tasks,
                getTask,
                getEspañol
            }}
        >
        {children}   
        </TaskContext.Provider>
    )
}
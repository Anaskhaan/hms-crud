"use client"
import { saveEmployees } from "@/lib/action"
import { useActionState } from "react"
  
const CreateEmployeePage = () => {
    const  [state , formAction ] = useActionState(saveEmployees , null)
  return (
    <div className=" ">
        <div className=" flex items-center justify-center font-bold text-xl mt-24">

        <h1> Add New employee</h1>
        </div>
    <form action={formAction} className=" flex items-center  mt-8 justify-center flex-col space-y-7">

        <input id="name" name="name" type="text" className=" p-3 rounded-lg" placeholder="Full Name.." />
        <div id="error-name">
    <p className=" mt-2 text-sm text-red-500">{state?.Error?.name}</p>
        </div>
        <input id="email" name="email" type="text" className=" p-3 rounded-lg" placeholder="Email.." />
    <p className=" mt-2 text-sm text-red-500">{state?.Error?.email}</p>


        <input id="phone" name="phone" type="number" className=" p-3 rounded-lg"  placeholder="Number.."/>
    <p className=" mt-2 text-sm text-red-500">{state?.Error?.phone}</p>


    <button className=" bg-blue-600 px-4 py-2  rounded-lg">Save</button>
    </form> 
    </div>
  )
}

export default CreateEmployeePage

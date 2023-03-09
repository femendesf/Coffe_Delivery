import { InputHTMLAttributes, ReactNode } from "react";

interface InputRootProps{
    children: ReactNode
}

function InputRoot(props: InputRootProps){
    return(
        <div className="flex items-center justify-between rounded bg-base-input w-full">
            {props.children}
            
        </div>
    )
   
}

InputRoot.displayName = 'Input.Root'

export interface InputIconProps{
    children: ReactNode,
   
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

function Input( props : InputProps){

    return(
    <div className="flex items-center ">
        <input 
            className="bg-transparent flex-1"
            {...props}

        />
       
       
    </div>
        

    )
}

export const InputComp = {
    Root: InputRoot,
    Input: Input,
}
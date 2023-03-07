import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';


interface InputRootProps{
    children: ReactNode
}

function InputRoot(props: InputRootProps){
    return(
        <div className="flex items-center">
            {props.children}
        </div>
    )
   
}

InputRoot.displayName = 'Input.Root'

export interface InputIconProps{
    children: ReactNode,
  
}


function InputIcon(props: InputIconProps){
    return(
        <Slot>
            {props.children}
        </Slot>
    )
    
}
InputIcon.displayName = 'Input.Icon'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

function Input( props : InputProps){

    return(
        <input 
            className="bg-transparent flex-1"
            {...props}
        />
    )
}

export const InputComp = {
    Root: InputRoot,
    Input: Input,
    Icon: InputIcon
}
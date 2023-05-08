import React, { useState ,useEffect, useCallback } from 'react'
import { IoMdClose } from 'react-icons/io'
import Buttons from './Buttons'
const Modal = ({
    isOpen,
    onOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModel ,setShowModel] =useState(isOpen)
    useEffect(()=>{
        setShowModel(isOpen)
    },[isOpen])
    const handelClose =useCallback(()=>{
        if(disabled) return
        else {
            setShowModel(false)
            setTimeout(()=>{
                onClose()
            },300)
        }
    },[disabled, onClose])

    const handelSubmit =useCallback(()=>{
        if(disabled) return 
        else {
            onSubmit()
        }
    },[disabled , onSubmit])

    const handelSecondaryAction =useCallback(()=>{
        if(disabled || !secondaryAction ) return ;
        else {
            secondaryAction()
        } 
    },[disabled , secondaryAction])
if(!isOpen) {
    return null;
}

  return (
    <>
    <div className='
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        '>
    <div className='
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
        '>
        {/* content */}
    <div className={`
        trnaslate
        duration-300
        h-full
        ${showModel ? 'translate-y-0':'translate-y-full'}
        ${showModel ? 'opacity-100':'opacity-0'}
        `}>
        <div className='
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            '>
            <div className='
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]

            '>
            <button className='
                p-1 border-0
                hover:opacity-70
                transition 
                absolute
                left-9
            ' onClick ={handelClose}>
            <IoMdClose size ={18}/>
                
            </button>
            <div className='text-lg font-semibold'>
                {title}

            </div>

            </div>
            {/* Body */}
            <div className='relative p-6 flex-auto'>
                {body}
            </div>
            {/* Footer */}
            <div className='flex flex-col p-6 gap-2'>
            <div className='
                flex
                flex-row
                items-center
                gap-4
                w-full
            '>
            {secondaryActionLabel && secondaryAction && (
                <Buttons outline disabled={disabled} label={secondaryActionLabel} onClick={handelSecondaryAction}/>
            
            )}
            <Buttons disabled={disabled} label={actionLabel} onClick={handelSubmit}/>
           
            </div>
            {footer}

            </div>
        </div>

    </div>

    </div>

    </div>
    </>
  )
}

export default Modal

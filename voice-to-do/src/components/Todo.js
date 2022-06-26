import React from 'react'
import { FiX } from "react-icons/fi";
export default function Todo() {
    return (
        <div className='todo-main'>
            <h2 className='header'>Voice actioned To-Do </h2>
            <div className='todo-card'>
                <div className='todo-list'>
                    <h3>
                        Wash the clothes
                    <FiX className='close-icon'/>
                    </h3>
                </div>
                <div className='todo-list'>
                    <h3>
                        Cook the dinner
                    <FiX className='close-icon'/>
                    </h3>
                </div>
                <div className='todo-list'>
                    <h3>
                        Code some software
                    <FiX className='close-icon'/>
                    </h3>
                </div>
            </div>
        </div>
    )
}
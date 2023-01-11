import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'
import useSWR from 'swr'

export default function ProjectContent() {
    const router = useRouter()
    const { id } = router.query
    const clickPage = () => { 
        
    }
    return (
        <div className="panel m-auto h-100">
            <div className='row h-100'>
                <div className='col-md-6 img-show'>
                    <span className='arrow-top position-absolute'>
                        <FaChevronUp fontSize="2.5rem" />
                    </span>
                    <div className='img-show-box'>1</div>
                    <div className='img-show-box'>2</div>
                    <div className='img-show-box'>3</div>
                    <span className='arrow-bottom position-absolute'>
                        <FaChevronDown fontSize="2.5rem" />
                    </span>
                </div>
                <div className='col-md-6 detail border border-2'>
                    <h4>title</h4>
                </div>
            </div>
        </div>
    );
};


import { useState } from 'react'
interface props {
    id: string
    className: string
    title: string
    icon: JSX.Element
    refs?: any
    children?: JSX.Element
}
export default function ProjectInput({ id, className, title, icon, refs, children }: props) {
    const [value, setValue] = useState<string>("")
    return (
        <label htmlFor={id} className={className}>
            <span className='d-inline-flex gap-1 align-items-center'>
                {icon}
                <strong>{title}</strong>
            </span>
            {children === undefined ?
                <input ref={refs} id={id} className="form-control" onChange={e => setValue(e.target.value)} /> :
                children}
        </label>
    );
};

import { useState, forwardRef, useImperativeHandle } from 'react'
interface props {
    id: string
    className: string
    title: string
    icon: JSX.Element
    children?: JSX.Element
}
const ProjectInput = forwardRef((props: props, ref) => {
    const { id, className, icon, title, children } = props
    const [value, setValue] = useState<string>("")
    useImperativeHandle(ref, () => ({
        value
    }))
    return (
        <label htmlFor={id} className={className}>
            <span className='d-inline-flex gap-1 align-items-center'>
                {icon}
                <strong>{title}</strong>
            </span>
            {children === undefined ?
                <input id={id} className="form-control" onChange={e => setValue(e.target.value)} /> :
                children}
        </label>
    );
})

export default ProjectInput
export const EditButton = ({children, onClick}) => {
    return (
        <button className='btn btn-sm btn-primary' onClick={onClick}>{children}</button>
    )
}
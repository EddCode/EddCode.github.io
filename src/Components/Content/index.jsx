import './content.css'

const Content = props => {
  const { children } = props

  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Content

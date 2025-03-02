import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    <footer
      className= "bg-dark text-light" style={footerStyle}>
        <p className="text-center">
        Copyright &Copy; MyTodosList.com
        </p>
    </footer>
  )
}

export default Footer

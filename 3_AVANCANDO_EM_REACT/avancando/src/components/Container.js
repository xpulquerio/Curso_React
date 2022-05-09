const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        O valor é {myValue}
    </div>
  )
}

export default Container
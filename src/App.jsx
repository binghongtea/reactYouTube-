
import Layout from './layout/index.jsx'

const App = ({ children }) => {
  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  )
}

export default App
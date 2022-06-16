import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// connect gives the specified component awareness of the redux store!
// it can take up to 2 arguments!
// 1) "read-mode" (mapStateToProps)
// 2) """write-mode""" (mapDispatchToProps)

const mapStateToProps = (state) => {
  return {
    // every key of this object will become a prop for CartIndicator
    cartLength: state.cart.content.length,
    // CartIndicator really just needs the length of the cart...!
    username: state.user.name,
  }
}

// down below is a quick&dirty approach! doing this your component will end up
// having cart and user as props!
// const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  setUsername: (name) => {
    dispatch(setUsernameAction(name))
  },
})

const CartIndicator = ({ cartLength, username, setUsername }) => {
  const navigate = useNavigate()
  // very similar in functionality to Link
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="ml-auto mt-2">
      {username ? (
        <>
          <span className="mr-2">Hello {username}!</span>
          <Button color="primary" onClick={() => navigate('/cart')}>
            <FaShoppingCart />
            <span className="ml-2">{cartLength}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(inputValue)
            // now inputValue should reach the redux store!
            setUsername(inputValue)
          }}
        >
          <Form.Control
            placeholder="Log in here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>
      )}

      {/* Link provides navigation like useNavigate but just in JSX */}
      {/* creating a special anchor tag around the elements you want */}
      {/* <Link to="/cart">
        <h1>SARAH</h1>
      </Link> */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator)

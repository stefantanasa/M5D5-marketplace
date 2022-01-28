import React, { useEffect, useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

export default function ProductDetails() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)

  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(false)
  const [reviewsError, setReviewsError] = useState(false)

  const getProduct = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `http://localhost:3001/${productId}/reviews`,
        {
          method: "GET",
        }
      )

      setLoading(false)

      if (response.ok) {
        setProduct(await response.json())
        setError(false)
      } else {
        setError(true)
      }
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }

  const getReviews = async () => {
    setReviewsLoading(true)
    try {
      const response = await fetch(
        `http://localhost:3001/reviews/${productId}`,
        {
          method: "GET",
        }
      )

      setReviewsLoading(false)

      if (response.ok) {
        setReviews(await response.json())
        setReviewsError(false)
      } else {
        setReviewsError(true)
      }
    } catch (e) {
      setReviewsLoading(false)
      setReviewsError(true)
    }
  }

  useEffect(() => {
    console.log("hi")
    getProduct()
    getReviews()
  }, [])

  return (
    <div>
      <Container className="p-3 text-left">
        {!isLoading && !hasError && product && (
          <Row>
            <Col md={6} className="p-2">
              <h2>{product.name}</h2>
              <img src={product.imageUrl} />
            </Col>
            <Col>
              {" "}
              <h3> Description </h3>
              <div> {product.description}</div>
            </Col>
          </Row>
        )}

        <Row className="mt-3 text-left">
          <Col md={6}>
            <h4>Reviews</h4>
            <Form className="mt-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your comments..."
                />
              </Form.Group>
              {
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="rating"
                    type="radio"
                    id={`rating-1`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="rating"
                    type="radio"
                    id={`rating-2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="rating"
                    type="radio"
                    id={`rating-3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="rating"
                    type="radio"
                    id={`rating-4`}
                  />
                  <Form.Check
                    inline
                    label="5"
                    name="rating"
                    type="radio"
                    id={`rating-5`}
                  />
                </div>
              }
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

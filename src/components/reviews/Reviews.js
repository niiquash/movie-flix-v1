import React from 'react';
import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import Header from '../header/Header';

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    console.log(reviews);
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            console.log(reviews);
            const updatedReviews = [...reviews, { body: rev.value }];

            rev.value = "";

            setReviews(updatedReviews);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Header />
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className='mt-2'>
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review"/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return (
                            <>
                                <Row key={r.body}>
                                    <Col>{r.body}</Col>
                                </Row>
                                <hr />
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
            </Container>
        </>
  )
}

export default Reviews

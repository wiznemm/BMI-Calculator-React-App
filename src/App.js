import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">BMI Calculator</h1>
      <Form>
        <Form.Group controlId="weight">
          <Form.Label>Weight (in kg)</Form.Label>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="height">
          <Form.Label>Height (in cm)</Form.Label>
          <Form.Control
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={calculateBMI}>
          Calculate BMI
        </Button>
      </Form>
      {bmi && (
        <Alert variant="info" className="mt-4">
          Your BMI is: {bmi}
        </Alert>
      )}
    </Container>
  );
}

export default App;

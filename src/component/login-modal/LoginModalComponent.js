import React, { useState } from "react";
import { Modal, InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const LoginModalComponent = ({
    show,
    onSignedIn,
    onClose
}) => {
    const [error, setError] = useState(false);
    const username = React.createRef();
    const password = React.createRef();

    const validateLogin = () => {
        if (username.current.value === "" || password.current.value === "") {
            setError(true);
        }
        else {
            setError(false);
            onSignedIn();
        }
    };

    return (
        <Modal show={show} onHide={() => onClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">Please enter all details.</Alert>}
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        ref={username}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="password"
                        ref={password}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <Button variant="primary" className="float-right" onClick={() => validateLogin()}>Sign in</Button>

            </Modal.Body>

        </Modal>
    );
};

export default LoginModalComponent;

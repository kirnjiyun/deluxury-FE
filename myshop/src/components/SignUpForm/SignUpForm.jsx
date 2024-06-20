import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./SignUpFormStyles";
import { nextStep, prevStep } from "../../action/SignUpAction";

const SignUpForm = () => {
    const step = useSelector((state) => state.step.step);
    const dispatch = useDispatch();

    return (
        <form>
            {step == 1 && (
                <div>
                    <h2>Terms and Conditions</h2>
                    {/* Terms content here */}
                    <Button type="button" onClick={() => dispatch(nextStep())}>
                        Next
                    </Button>
                </div>
            )}

            {step == 2 && (
                <div>
                    <h2>Enter your email</h2>
                    <input type="email" placeholder="Email" />
                    <Button type="button" onClick={() => dispatch(prevStep())}>
                        Previous
                    </Button>
                    <Button type="button" onClick={() => dispatch(nextStep())}>
                        Next
                    </Button>
                </div>
            )}

            {step == 3 && (
                <div>
                    <h2>Create a password</h2>
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <Button type="button" onClick={() => dispatch(prevStep())}>
                        Previous
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
            )}
        </form>
    );
};

export default SignUpForm;

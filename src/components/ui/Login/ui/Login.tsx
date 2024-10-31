import { Modal } from "@/components/ui/Modal";
import cls from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../Button";
import { ReactComponent as CloseSVG } from "@/assets/icons/Arrows/x-close.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../../Icon";
import { LoginFormInputs, useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
    authIncorrectData,
    authIsLoading,
    isAuthenticated,
} from "@/redux/auth/selectors/authSelector";

interface AuthProps {
    isAccountOpen: boolean;
    setAccountOpen: (value: boolean) => void;
    closeAccountWindow: () => void;
}

const Login: React.FC<AuthProps> = ({
    isAccountOpen,
    closeAccountWindow,
}: AuthProps) => {
    const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const { SignIn, SignUp } = useAuth();
    const isLoading = useSelector(authIsLoading);
    const incorrectData = useSelector(authIncorrectData);
    const isAuth = useSelector(isAuthenticated);

    const navigate = useNavigate();
    const location = useLocation();
    const closeWindow = () => {
        closeAccountWindow();
        if (isAuth) {
            navigate(location.pathname + location.search);
        } else if (!isAuth) {
            navigate("/");
        }
        reset();
    };

    const toggleLoginAuth = () => {
        setIsRegisterMode(!isRegisterMode);
    };

    const handleSignIn = (data: LoginFormInputs) => {
        SignIn(data);
    };
    const handleSignUp = (data: LoginFormInputs) => {
        SignUp(data);
    };

    return (
        <Modal
            isOpen={isAccountOpen}
            onClose={closeWindow}
            className={cls.login_container}
        >
            <div className={cls.closeBtn}>
                <Icon
                    Svg={CloseSVG}
                    className={cls.closeIcon}
                    clickable
                    onClick={() => closeWindow()}
                />
            </div>
            <h1 className={cls.login_title}>
                {isRegisterMode
                    ? "Create your account"
                    : "Login to Your Account"}
            </h1>
            <form
                onSubmit={handleSubmit(
                    isRegisterMode ? handleSignUp : handleSignIn
                )}
                className={cls.login_form}
            >
                {incorrectData && (
                    <p className={cls.incorrectData}>{incorrectData}</p>
                )}
                {errors.email && (
                    <p className={cls.error}>{errors.email.message}</p>
                )}
                {errors.password && (
                    <p className={cls.error}>{errors.password.message}</p>
                )}
                <div className={cls.login_block}>
                    <label className={cls.login_block_title}>Email:</label>
                    <input
                        type="text"
                        className={cls.login_input}
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                </div>
                <div className={cls.login_block}>
                    <label className={cls.login_block_title}>Password:</label>
                    <input
                        type="password"
                        className={cls.login_input}
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                </div>
                <Button className={cls.footer_btn} disabled={isLoading}>
                    {isRegisterMode ? "Create an account" : "Sign In"}
                </Button>
                <div className={cls.login_footer}>
                    <p className={cls.login_footer_title}>
                        {isRegisterMode
                            ? "Already have an account?"
                            : "Don't have an account yet?"}
                    </p>
                    <button
                        className={cls.login_footer_btn}
                        onClick={toggleLoginAuth}
                        type="button"
                    >
                        {isRegisterMode ? "Sign In" : "Create Account"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export { Login };

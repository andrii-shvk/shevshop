import "./PageLoader.css";
import cls from "./PageLoader.module.scss"

const PageLoader = () => {
    return (
        <div className={cls.PageLoader}>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        </div>
    );
};

export { PageLoader };

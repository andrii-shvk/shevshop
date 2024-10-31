import cls from "./Loader.module.scss";

interface ILoader {
    width?: number;
    height?: number;
}

const Loader = ({ width = 50, height = 50 }: ILoader) => {
    return (
        <div className={cls.loader}>
            <div
                className={cls.spinner}
                style={{ width: width, height: height }}
            ></div>
        </div>
    );
};

export { Loader };

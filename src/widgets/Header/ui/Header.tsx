import cls from './Header.module.scss';

interface HeaderProps {
   
}

const Header = (props: HeaderProps) => {
    const {} = props;
    return (
        <div className={cls.header}>
            Header
        </div>
    );
}

export { Header }
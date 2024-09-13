interface IconProps {
    Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    clickable?: boolean;
    onClick?: () => void;
    className?: string;
}

const Icon = ({
    Svg,
    clickable = false,
    onClick,
    className = "",
}: IconProps) => {
    const icon = <Svg className={`icon ${className}`} onClick={undefined} />;

    if (clickable) {
        return (
            <button type="button" className={className} onClick={onClick}>
                {icon}
            </button>
        );
    }

    return icon;
};

export { Icon };

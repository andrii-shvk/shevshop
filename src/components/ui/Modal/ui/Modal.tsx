import cls from "./Modal.module.scss";
import { Dialog, DialogPanel } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode } from "react";

interface ModalWindowProps {
    children?: ReactNode;
    isOpen: boolean;
    onClose?: (value: boolean) => void;
    className?: string;
}

const Modal = ({ children, isOpen, onClose, className }: ModalWindowProps) => {
    const handleClose = () => {
        if (onClose) {
            onClose(false);
        }
    };
    return (
        <Dialog open={isOpen} onClose={handleClose} transition className={cls.Dialog}>
            <div className={cls.container}>
                <DialogPanel className={clsx(cls.panel, className)}>{children}</DialogPanel>
            </div>
        </Dialog>
    );
};

export { Modal };

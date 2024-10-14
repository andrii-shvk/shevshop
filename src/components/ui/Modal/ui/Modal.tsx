import cls from "./Modal.module.scss";
import { Dialog, DialogPanel } from "@headlessui/react";
import { ReactNode } from "react";

interface ModalWindowProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: (value: boolean) => void;
}

const Modal = ({ children, isOpen, onClose }: ModalWindowProps) => {
    const handleClose = () => {
        if (onClose) {
            onClose(false);
        }
    };
    return (
        <Dialog open={isOpen} onClose={handleClose} transition className={cls.Dialog}>
            <div className={cls.container} onClick={handleClose}>
                <DialogPanel className={cls.panel}>{children}</DialogPanel>
            </div>
        </Dialog>
    );
};

export { Modal };

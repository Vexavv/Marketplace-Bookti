import React from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../hook';
import { closeModal } from '../../store/slices/modalSlice';
import { CgClose } from 'react-icons/cg';
import ResetPassword from './ResetPassword/ResetPassword';
import AddBook from './AddBook/AddBook';

const ModalTypes: { [key: string]: React.FC<any> } = {
    // Define your modal component types here...
    resetPassword: ResetPassword,
    addBook: AddBook,
};
const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpen, type, props } = useAppSelector(state => state.modal);

    const handleClose = () => {
        dispatch(closeModal());
    };
    if (!isOpen) {
        return null;
    }
    const SpecificModal = ModalTypes[type];
    return (
        <div className={styles.Modal} onClick={handleClose}>
            <div className={styles.ModalContainer}>
                <div
                    className={styles.ModalContainerContent}
                    onClick={e => e.stopPropagation()}
                >
                    <CgClose
                        className={styles.ModalContainerContentClosed}
                        onClick={handleClose}
                    />

                    <SpecificModal {...props} />
                </div>
            </div>
        </div>
    );
};

export default Modal;

import classes from './Modal.module.css';

// Destructure the children prop so the modal can render content passed by its parent.
// The children prop is a special prop in React that allows components to pass arbitrary content to their children.
// alternate method signature: 'function Modal(props)' and use 'props.children' to access the content passed to the modal.
// 'children' is a reserved prop name in React that is used to pass content from a parent component to a child component. 
// It allows for flexible composition of components, enabling the parent to provide any content it wants to the child component. 
// In this case, the Modal component can render any content passed to it through the children prop, making it reusable for different 
// types of content.
function Modal({ children }) {
    return (
        <>
            {/* Background overlay behind the modal. */}
            <div className={classes.backdrop} />
            {/* Dialog container for the content passed through the children prop. */}
            <dialog open={true} className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;

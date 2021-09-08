import PropTypes from 'prop-types';

const Button = ({ text, type, icon, onClick, ...rest }) => {
    return (
        <button
            {...rest}
            type={type}
            onClick={onClick}
        >
            {text} {icon}
        </button>
    );
};

Button.defaultProps = {
    type: 'submit',
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;

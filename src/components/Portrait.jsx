import PropTypes from "prop-types";

export default function Portrait({ portrait, onPortraitClick }) {
    return <img className="Portrait" src={portrait} onClick={() => onPortraitClick(portrait)} />;
}

Portrait.propTypes = {
    portrait: PropTypes.string.isRequired,
    onPortraitClick: PropTypes.func.isRequired,
};

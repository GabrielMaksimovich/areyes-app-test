import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faCamera, faInfo, faPlus} from "@fortawesome/free-solid-svg-icons";

type Props = {
    handleShowModal: () => void;
    controlsHeight: number;
}

const CameraControls: React.FC<Props> = ({handleShowModal, controlsHeight}) => {
    const [counter, setCounter] = useState(0);

    const handleCenterButtonClick = () => {
        if (counter < 3) {
            setCounter(prevCounter => prevCounter + 1);
        }

        if (counter === 3) {
            setCounter(0);
            return handleShowModal();
        }
    }

    return (
        <div style={{height: controlsHeight}} className="controller">
            <div className="controller__btn controller__btn-left">
                <FontAwesomeIcon icon={faPlus} size="xl"/>
            </div>

            <div className="controller__wrapper controller__wrapper-center">
                <p className="controller__text">{counter}/3</p>
                <div className="controller__btn controller__btn-center" onClick={handleCenterButtonClick}>
                    <FontAwesomeIcon icon={faCamera} size="2xl"/>
                </div>
            </div>

            <div className="controller__wrapper">
                <div className="controller__btn controller__btn-right-upload">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} size="xl"/>
                </div>

                <div
                    className="controller__btn controller__btn-right-info"
                    onClick={handleShowModal}
                >
                    <FontAwesomeIcon icon={faInfo} size="xl"/>
                </div>
            </div>
        </div>
    );
};

export default CameraControls;

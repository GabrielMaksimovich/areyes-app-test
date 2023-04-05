import React from 'react';

type Props = {
    handleCloseModal: () => void;
};
export const Info: React.FC<Props> = ({handleCloseModal}) => {
    return (
        <div className="info">

            <div className="info__content">
                "This service does not collect or store any user metadata.
                <br/>
                We do no track or monitor user activity, nor do we collect any information about user behavior or preferences."
                <button className="info__close-btn" onClick={handleCloseModal}>
                    GOT IT!
                </button>
            </div>
        </div>
    );
};

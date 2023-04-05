import React from "react";
import Webcam from 'react-webcam';
import {CameraOptions, useFaceDetection} from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import {Camera} from '@mediapipe/camera_utils';
import FaceBoundedBox from "./FaceBoundedBox";
import {PreviewMessage} from "./PreviewMessage";
import {Info} from "./Info";


type Props = {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    handleShowModal: () => void;
    handleCloseModal: () => void;
}

const width = 500;
const height = 500;

const WebcamDemo: React.FC<Props> = ({
                                         handleCloseModal,
                                         showModal,
                                         setShowModal,
}) => {
    const {webcamRef, boundingBox, detected} = useFaceDetection({
        faceDetectionOptions: {
            model: 'short',
        },
        faceDetection: new FaceDetection.FaceDetection({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
        }),
        camera: ({mediaSrc, onFrame}: CameraOptions) =>
            new Camera(mediaSrc, {
                onFrame,
                width,
                height,
            }),
    });

    return (
        <div style={{position: 'relative'}} className="webcam">
                {boundingBox.map((box, index) => {
                    return !showModal && (
                        <FaceBoundedBox
                            key={`${index + 1}`}
                            color='#fff233'
                            size='60%'
                            borderLength="20%"
                            thickness={6}
                            borderRadius={20}
                            style={{
                                position: 'absolute',
                                top: `${box.yCenter * 100}%`,
                                left: `${box.xCenter * 100}%`,
                                width: `${box.width * 100}%`,
                                height: `${box.height * 100}%`,
                                padding: '0',
                                zIndex: 1,
                            }}
                        />
                    )
                })}
                <Webcam
                    ref={webcamRef}
                    forceScreenshotSourceSize
                    style={{
                        width: `100%`,
                        position: 'relative',
                        borderRadius: '10%',
                    }}
                />

                {detected && !showModal &&  <PreviewMessage />}

                {showModal && (
                    <Info handleCloseModal={handleCloseModal}/>
                )}
            </div>
    );
};

export default WebcamDemo;

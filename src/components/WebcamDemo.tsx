import React, {useMemo} from "react";
import Webcam from 'react-webcam';
import {CameraOptions, useFaceDetection} from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import {Camera} from '@mediapipe/camera_utils';
import FaceBoundedBox from "./FaceBoundedBox";
import {PreviewMessage} from "./PreviewMessage";
import {Info} from "./Info";
import useWindowSize from "../hooks/windowResizeHook";


type Props = {
    showModal: boolean;
    cameraHeight: number;
    ratio: number;
    cameraWidth: number;
    setShowModal: (value: boolean) => void;
    handleShowModal: () => void;
    handleCloseModal: () => void;
}


const WebcamDemo: React.FC<Props> = ({
                                         handleCloseModal,
                                         showModal,
                                         cameraHeight,
                                         ratio,
                                         cameraWidth,
                                         setShowModal,
                                     }) => {


    const boundedBoxWidthCoeff = useMemo(() => {
        return (30 / ratio) * 1.5;
    }, [ratio]);

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
                width: cameraWidth,
                height: cameraHeight,
            }),
    });

    return (
        <div style={{height: cameraHeight, width: cameraWidth, position: 'relative'}} className="webcam">
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
                            width: `${box.width * (100 + boundedBoxWidthCoeff)}%`,
                            height: `${box.height * 90}%`,
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
                    position: 'relative',
                    borderRadius: '30px',
                }}
                videoConstraints={{
                    height: cameraHeight,
                    aspectRatio: ratio,
                    width: cameraWidth,
                }}
            />

            {detected && !showModal && <PreviewMessage/>}

            {showModal && (
                <Info handleCloseModal={handleCloseModal}/>
            )}
        </div>
    );
};

export default WebcamDemo;

import React, {useCallback, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

const StyledFileDropZone = styled.div`
    position: relative;
    width: 90%;
    height: 200px;
    top: 65px;
    left: 4.5%;
    text-align: center;
    border: 3px dotted white;
    border-radius: 20px;
    background-color: ${({isHover}) => (isHover ? '#444455' : 'transparent')};
    color: ${({isHover}) => (isHover ? 'white' : 'black')};
    transition: 0.2s;
`

const StyledP = styled.p`
    text-align: center;
    width: 100%;
    height: 20px;
    margin-top: 70px;
`

const StyledH2 = styled.h2`
    position: relative;
    top: 30px;
`
const StyledButton = styled.button`
    position: relative;
    top: 80px;
    width: 100px;
    height: 30px;
    border: 0;
    border-radius: 10px;
`
const StyledPlus = styled.p`
    position: relative;
    top:-15px;
    font-size: 40px;
    font-weight: lighter;
    color : white;
`
function FileDropZone({dir}) {
    const [isHover, setIsHover] = useState(false);
    const onDrop = async (files) => {
        console.log(files)
        const file = await files[0];
        let formData = new FormData();
        console.log(dir);
        formData.append('destination', `public/${dir}`);
        formData.append('file', file);
        console.log("form Data:", formData);
        await axios.post('/upload?destination=public/'+dir, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            console.log('File uploaded successfully.');
        }).catch((err) => {
            console.error('Error during file upload: ', err);
        })
    };
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});



    return (
        <StyledFileDropZone 
            onMouseOver={() => setIsHover(1)}
            onMouseOut={() => setIsHover(0)}
            isHover={isHover}
            {...getRootProps()}>
            <input {...getInputProps()} />

            {
                isDragActive ?
                <StyledP>Drop the files here ...</StyledP> :
                <StyledP>Drag 'n' drop som files here, or click to select files</StyledP>
            }
            <StyledPlus>+</StyledPlus>
        </StyledFileDropZone>
    )
}

//자산 추가 시 자산 유형 별 연동 페이지 컴포넌트
export function FirstSafeAsset() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <StyledH2>First Safe 자산 추가</StyledH2>
            <FileDropZone dir='firstSafe'/>
            <StyledButton onClick={handleOnClick}>자산 추가</StyledButton>
        </>
    );
}

export function SecondSafeAsset() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <StyledH2>Second Safe 자산 추가</StyledH2>
            <FileDropZone dir='secondSafe'/>
            <StyledButton onClick={handleOnClick}>자산 추가</StyledButton>
        </>
    );
}

export function ThirdSafeAsset() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <StyledH2>Third Safe 자산 추가</StyledH2>
            <FileDropZone dir='thirdSafe'/>
            <StyledButton onClick={handleOnClick}>자산 추가</StyledButton>
        </>
    );
}

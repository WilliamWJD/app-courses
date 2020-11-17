import styled, { css } from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

interface HeaderProps{
    color:string;
}

export const Container = styled.View`
    flex:1;
    background-color:#fff;
`;

export const Header = styled.View<HeaderProps> `
    height:250px;
    align-items:center;

    ${props => css `
        background-color:${props.color};
    `};
`;

export const Image = styled.Image `
    width:150px;
    height:150px;
`;

export const SubHeader = styled.View `
    height:200px;
    background-color:#f4f7fc;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    margin-top:-80px;
    padding:20px;
`;

export const ViewTitle = styled.View `
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:14px;
`;

export const Title = styled.Text `
    font-size:20px;
    width:300px;
    font-weight:bold;
    color:#2c3e50;
`;

export const TeacherView = styled.View `
    flex-direction:row;
    align-items:center;
    margin-bottom:20px;
`;

export const ImageTeacher = styled.Image `
    width:30px;
    height:30px;
    border-radius:10px;
`;

export const TeacherName = styled.Text `
    font-size:16px;
    color:#2c3e50;
    margin-left:5px;
`;

export const ClassDetail = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

export const Time = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const TimeText = styled.Text`
    font-size:15px;
    color:#7159c1;
    margin-left:5px;
`;

export const LessonQuantity = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const LessonQuantityText = styled.Text`
    font-size:15px;
    color:#7159c1;
    margin-left:5px;
`;

export const Lessons = styled.View `
    flex:1;
    height:300px;
    background-color:#fff;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    margin-top:-53px;

    padding:20px;
`;

export const LessonTitle = styled.Text`
    font-size:20;
    font-weight:bold;
    color:#2c3e50;
`;

export const LessonItem = styled.TouchableOpacity`
    border-bottom-width:1px;
    border-color:#ecf0f1;
    margin-top:15px;

    flex-direction:row;
    align-items:center;

    padding-bottom:14px;
`;

export const LessonItemId = styled.Text`
    font-size:16px;
    color:#7159c1;
    margin-right:15px;
    font-weight:bold;
`;

export const LessonItemDescription = styled.View`
    
`;

export const LessonItemDescriptionText = styled.Text`
    font-size:16px;
    color:#2c3e50;
    font-weight:bold;
`;

export const LessonItemDescriptionTime = styled.Text`
    font-size:13px;
    color:#7159c1;
`;

export const FeatherIcon = styled(Feather)`
    margin-left:auto;
`;






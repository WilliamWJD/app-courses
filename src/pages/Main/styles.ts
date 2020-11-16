import styled, { css } from 'styled-components/native';

interface ICourseItem{
    colorItem:string;
}

export const Container = styled.View `
    flex:1;
    background-color:#f4f7fc;
    padding:20px;
`;

export const Profile = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const Text = styled.Text`
    color:#7f8c8d;
    font-weight:bold;
    font-size:17px;
`;

export const Image = styled.Image`
    width:45px;
    height:45px;
    border-radius:10px;
`;

export const Title = styled.Text `
    font-size:23px;
    width:160px;
    color:#2c3e50;
    font-weight:bold;
`;

export const InputSearch = styled.View `
    width:100%;
    height:45px;
    margin-top:20px;
    background-color:#fff;
    border-radius:10px;
    margin-bottom:20px;
    
    flex-direction:row;
    align-items:center;
    padding-left:10px;
`;

export const Input = styled.TextInput `
    flex:1;
    height:40px;
    color:#7f8c8d;
`;

export const ButtonSearch = styled.TouchableOpacity `
    width:50px;
    height:45px;
    background-color:#7159c1;
    border-radius:10px;
    
    align-items:center;
    justify-content:center;
`;

export const LastCourse = styled.View`
    position:relative;
    width:100%;
    height:140px;
    border-radius:15px;
    background-color:#2980b9;
    padding:15px;

    justify-content:center;
`;

export const LastCourseTitle = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:20px;
    width:140px;
`;

export const ButtonContinue = styled.TouchableOpacity`
    width:100px;
    height:30px;
    background-color:#7159c1;
    margin-top:10px;
    border-radius:10px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
`;

export const ButtonContinueText = styled.Text`
    color:#fff;
    margin-right:5px;
`;

export const LastCourseImage = styled.Image`
    width:100px;
    height:100px;
    position:absolute;
    right:10px;
    top:20%;
`;

export const TopCourse = styled.View`
    margin-top:20px;
`;

export const TopCourseTitle = styled.Text`
    font-size:18px;
    color:#2c3e50;
    font-weight:bold;
    margin-bottom:15px;
`;

export const TopCourseItem = styled.TouchableOpacity<ICourseItem>`
    width:140px;
    height:200px;
    border-radius:10px;
    padding:14px;
    align-items:center;
    justify-content:space-between;

    margin-right:15px;

    ${props=> css`background-color:${props.colorItem};`}
`;

export const TopCourseItemText = styled.Text`
    font-size:19px;
    color:#fff;
    font-weight:bold;
`;

export const TopCourseItemImage = styled.Image`
    width:80px;
    height:80px;
`;





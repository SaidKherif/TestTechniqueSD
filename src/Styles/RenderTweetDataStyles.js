import styled from 'styled-components';
import TwitterTextView from 'react-native-twitter-textview'

export const Container = styled.View`
    background: rgba(245, 245, 250, 0.4);
    border-radius: 12px;
    margin: 28px;
`;

export const StyledTwittertextView = styled(TwitterTextView)`
    flex: 1;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #8181A5;
`;

export const SubContainer = styled.View`
    flex-direction: row;
    marginLeft: 22.11px;
`;

export const ProfileImage = styled.Image`
    width: 38px;
    height: 38px;
    border-radius: 5px;
`;

export const TweetContainer = styled.View`
    flex-direction: column;
    flex: 1;
    flexShrink:1;
    padding: 5px;
`;

export const TweetSubContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-self: stretch;
`;

export const UsernameDisplay = styled.Text`
    flex: 8;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
`;
 
export const TweetDate = styled.Text`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #8181A5;
`;
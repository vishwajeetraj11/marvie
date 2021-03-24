import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { IconsNames } from '../shared/constants';
import styles from '../styles';
import Icon from './core/Icon';

import { MediumText, MiniFont, SmallText } from './Typography';
const Post = ({
    background,
    avatar,
    desc,
    postImages,
    username,
    date,
    comments,
    likes,
}) => {
    const [comment, setComment] = useState('');
    const onChange = (e) => { };
    return (
        <Container theme={background}>
            <UserInfoContainer>
                <AvatarContainer>
                    <Avatar source={avatar} />
                </AvatarContainer>
                <View>
                    <MediumText>{username}</MediumText>
                    <MiniFont>{date}</MiniFont>
                </View>
            </UserInfoContainer>
            <PostContent>
                <Description>{desc}</Description>
                <Images>
                    <ImagesLeft>
                        <BigImage resizeMode='cover' source={postImages.big} />
                    </ImagesLeft>
                    <ImagesRight>
                        <SmallImageMargBott
                            resizeMode='cover'
                            source={postImages.small[0]}
                        />
                        <SmallImage
                            resizeMode='cover'
                            source={postImages.small[1]}
                        />
                    </ImagesRight>
                </Images>
            </PostContent>
            <PostStats>
                <Stat>
                    <IconContainer>
                        <Icon
							name={IconsNames.chat_nav}
							color={styles.LightGrayUI}
							size={17}
						/>
                    </IconContainer>
                    <SmallText color={styles.LightGrayUI}>
                        {comments} Comments
					</SmallText>
                </Stat>
                <Stat>
                    <IconContainer>
                        <Icon
							name={IconsNames.like_nav}
							color={styles.LightGrayUI}
							size={17}
						/>
                    </IconContainer>

                    <SmallText color={styles.LightGrayUI}>
                        {likes} Likes
					</SmallText>
                </Stat>
                <Stat>
                    <IconContainer>
                        <Icon
							name={IconsNames.share}
							color={styles.LightGrayUI}
							size={17}
						/>
                    </IconContainer>
                    <SmallText color={styles.LightGrayUI}>Share</SmallText>
                </Stat>
            </PostStats>
            <Comment>
                <AvatarContainer>
                    <Avatar source={avatar} />
                </AvatarContainer>
                <ShareIcon>
                    <Icon
						name={IconsNames.attachment}
						color={styles.LightGrayUI}
						size={25}
					/>
                </ShareIcon>
                <CommentInputContainer>
                    <CommentInput
                        onChangeText={setComment}
                        value={comment}
                        placeholderTextColor={styles.DarkGRAYUI}
                        placeholder={'Write a comment!'}
                    // multiline
                    />
                </CommentInputContainer>
            </Comment>
        </Container>
    );
};

const ShareIcon = styled.View`
	position: absolute;
	right: 4px;
	top: 13px;
	z-index: 1;
`;

const Comment = styled.View`
	position: relative;
	display: flex;
	flex-direction: row;
	margin-top: 16px;
`;

const CommentInputContainer = styled.View`
	background-color: ${styles.backgroundDark};
	border-radius: 20px;
	flex: 1;
`;

const CommentInput = styled.TextInput`
	background-color: ${styles.backgroundDark};
	color: ${styles.LightGrayUI};
	padding: 12px 16px;
	width: 90%;
	border-radius: 20px;
`;

const IconContainer = styled.View`
	margin-right: 10px;
`;

const Stat = styled.View`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

const PostStats = styled(Stat)`
	border-bottom-width: 1px;
	padding: 10px 0;
	border-bottom-color: ${styles.DarkGRAYUI};
`;

const BigImage = styled.Image`
	height: 154px;
	width: 148px;
	border-radius: 20px;
`;
const SmallImage = styled.Image`
	height: 71px;
	width: 148px;
	border-radius: 20px;
`;

const SmallImageMargBott = styled(SmallImage)`
	margin-bottom: 12px;
`;

const ImagesLeft = styled.View``;
const ImagesRight = styled.View`
	margin-left: 12px;
`;

const Images = styled.View`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 1px;
	padding-bottom: 16px;
	border-bottom-color: ${styles.DarkGRAYUI};
`;

const Description = styled(SmallText)`
	line-height: 23px;
	margin-bottom: 10px;
`;

const PostContent = styled.View`
	/* margin: 10px 0; */
`;

const UserInfoContainer = styled.View`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

const AvatarContainer = styled.View`
	height: 48px;
	width: 48px;
	background-color: ${styles.Red};
	margin-right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 24px;
`;

const Avatar = styled.Image`
	height: 25px;
	width: 25px;
`;

const Container = styled.View`
	background-color: ${(props) => props.theme};
	margin-bottom: 24px;
	padding: 24px;
	border-radius: 24px;
`;

export default Post;
